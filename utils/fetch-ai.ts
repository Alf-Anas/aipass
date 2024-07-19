import { RulesSettingType } from "@/types/rules-setting.interface";

type FetchAIType = RulesSettingType;

export async function fetchAI(rawData: FetchAIType) {
    const response = await fetch("/api/generate", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(rawData),
    });

    if (response.status === 200) {
        const resData = await response.json();
        return {
            ok: true,
            message: "success",
            results: JSON.parse(resData?.data) as string[],
        };
    } else {
        return { ok: false, message: JSON.stringify(response.json()) };
    }
}
