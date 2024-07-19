"use client";

import { Box, Button, Card, DataList, Heading } from "@radix-ui/themes";
import { useState } from "react";
import RulesView, { RulesSettingInitial } from "./RulesView";
import { ReloadIcon } from "@radix-ui/react-icons";
import { fetchAI } from "@/utils/fetch-ai";
import { swalError } from "@/utils";
import { RulesSettingType } from "@/types/rules-setting.interface";
import ResultView from "./ResultView";

export default function MainPage() {
    const [rulesSetting, setRulesSetting] =
        useState<RulesSettingType>(RulesSettingInitial);
    const [results, setResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function onClickStart() {
        setIsLoading(true);
        setResults([]);

        try {
            const theOutput = await fetchAI(rulesSetting);
            if (theOutput.ok) {
                const theRes = theOutput.results || [];
                let eStrLength: string[] = theRes.filter(
                    (str) => str.length >= Number(rulesSetting.min)
                );
                if (rulesSetting.max) {
                    eStrLength = eStrLength.filter(
                        (str) => str.length <= Number(rulesSetting.max)
                    );
                }
                setResults(eStrLength);
            } else {
                throw new Error(theOutput.message);
            }
        } catch (err) {
            console.error(err);
            swalError(err);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="overflow-x-auto text-center">
            <Heading size="6" as="h2" className="mb-4">
                Generate Password
            </Heading>

            <Box>
                <RulesView
                    setting={rulesSetting}
                    onChangeSetting={setRulesSetting}
                />
            </Box>

            <Button
                onClick={onClickStart}
                loading={isLoading}
                disabled={isLoading}
            >
                <ReloadIcon /> Generate Password
            </Button>

            {results.length > 0 && (
                <Box>
                    <Card className="my-4 text-center mx-auto w-fit">
                        <DataList.Root className="h-min">
                            {results.map((res) => (
                                <ResultView value={res} key={res} />
                            ))}
                        </DataList.Root>
                    </Card>
                </Box>
            )}
        </main>
    );
}
