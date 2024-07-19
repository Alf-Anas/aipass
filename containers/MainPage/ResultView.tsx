import { swalError } from "@/utils";
import { CopyIcon } from "@radix-ui/react-icons";
import { Badge, DataList, IconButton } from "@radix-ui/themes";
import { useState } from "react";

type Props = {
    value: string;
};

export default function ResultView({ value }: Props) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log("Copied : " + text);
                setCopied(true);
            })
            .catch((err) => {
                swalError(err);
            });
    };
    return (
        <DataList.Item>
            <DataList.Label>
                <Badge
                    size="3"
                    color={copied ? "jade" : "indigo"}
                    variant="soft"
                    radius="full"
                >
                    {value}
                </Badge>
            </DataList.Label>
            <DataList.Value>
                <IconButton
                    size="1"
                    onClick={() => {
                        copyToClipboard(value);
                    }}
                >
                    <CopyIcon />
                </IconButton>
            </DataList.Value>
        </DataList.Item>
    );
}
