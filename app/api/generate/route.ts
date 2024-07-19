import { RulesSettingType } from "@/types/rules-setting.interface";
import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
} from "@google/generative-ai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GOOGLE_GEMINI_API_KEY || "";

type AIDataType = RulesSettingType;

function getRandomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function runAI({
    min,
    max,
    lowercase,
    uppercase,
    symbols,
    numbers,
    favorite_drink,
    favorite_food,
    favorite_person,
    favorite_place,
}: AIDataType) {
    const MODEL_NAME = process.env.GOOGLE_GEMINI_MODEL || "";
    if (!API_KEY) {
        console.error("Please provide the API Key.");
        return;
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const favorites = [
        favorite_drink,
        favorite_food,
        favorite_person,
        favorite_place,
    ];
    const favText = favorites.join(", ");

    const minReturn = getRandomBetween(3, 12);

    const parts = [
        {
            text: `Generate a secure password based on the following criteria:
            * Minimum Length: ${min} characters 
            * Maximum Length: ${max ? max + " characters" : "not set"} 
            * Uppercase letters: ${uppercase} 
            * Lowercase letters:  ${lowercase} 
            * Numbers:  ${numbers} 
            * Symbols:  ${symbols} 
            * Includes ${
                favorite_food ||
                favorite_drink ||
                favorite_person ||
                favorite_place
                    ? "one or two from these words : " + favText
                    : "at least one indie word in Indonesia Language"
            } and if possible replaces some letters in the words provide with similar-looking numbers or symbols.
            * And make sure the password is easily to remember
             Please return at least ${minReturn} possible passwords and provide your output in string array format} 
            `,
        },
    ];

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });

    const { response } = result;
    return response.text();
}

export async function POST(request: Request) {
    const {
        min,
        max,
        lowercase,
        uppercase,
        symbols,
        numbers,
        favorite_drink,
        favorite_food,
        favorite_person,
        favorite_place,
    } = await request.json();

    if (!min) {
        return NextResponse.json(
            {
                error: true,
                message: "Minimum legth is mandatory!",
            },
            { status: 422 }
        );
    }

    try {
        const res = await runAI({
            min,
            max,
            lowercase,
            uppercase,
            symbols,
            numbers,
            favorite_drink,
            favorite_food,
            favorite_person,
            favorite_place,
        });
        return NextResponse.json({ success: true, data: res }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
