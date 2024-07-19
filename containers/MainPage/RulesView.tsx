import { RulesSettingType } from "@/types/rules-setting.interface";
import { Card, Checkbox, DataList, Grid, TextField } from "@radix-ui/themes";

export const RulesSettingInitial: RulesSettingType = {
    min: "8",
    max: "",
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    favorite_food: "",
    favorite_drink: "",
    favorite_place: "",
    favorite_person: "",
};

type Props = {
    onChangeSetting: React.Dispatch<React.SetStateAction<RulesSettingType>>;
    setting: RulesSettingType;
};

export default function RulesView({ setting, onChangeSetting }: Props) {
    return (
        <section>
            <Card className="mb-4">
                <Grid gap="4" columns={{ md: "3", sm: "1" }} width="auto">
                    <DataList.Root className="h-min">
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Min Length
                            </DataList.Label>
                            <DataList.Value>
                                <TextField.Root
                                    className="w-16"
                                    type="number"
                                    size="1"
                                    value={setting.min}
                                    onChange={(e) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            min: e.target.value,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Max Length
                            </DataList.Label>
                            <DataList.Value>
                                <TextField.Root
                                    className="w-16"
                                    type="number"
                                    size="1"
                                    value={setting.max}
                                    onChange={(e) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            max: e.target.value,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                    <DataList.Root>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Uppercase
                            </DataList.Label>
                            <DataList.Value>
                                <Checkbox
                                    size="3"
                                    checked={setting.uppercase}
                                    onCheckedChange={(checked: boolean) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            uppercase: checked,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Lowercase
                            </DataList.Label>
                            <DataList.Value>
                                <Checkbox
                                    size="3"
                                    checked={setting.lowercase}
                                    onCheckedChange={(checked: boolean) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            lowercase: checked,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Numbers
                            </DataList.Label>
                            <DataList.Value>
                                <Checkbox
                                    size="3"
                                    checked={setting.numbers}
                                    onCheckedChange={(checked: boolean) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            numbers: checked,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Symbols
                            </DataList.Label>
                            <DataList.Value>
                                <Checkbox
                                    size="3"
                                    checked={setting.symbols}
                                    onCheckedChange={(checked: boolean) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            symbols: checked,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                    <DataList.Root>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Favorite Food
                            </DataList.Label>
                            <DataList.Value>
                                <TextField.Root
                                    size="1"
                                    placeholder="Optional"
                                    value={setting.favorite_food}
                                    onChange={(e) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            favorite_food: e.target.value,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Favorite Drink
                            </DataList.Label>
                            <DataList.Value>
                                <TextField.Root
                                    size="1"
                                    placeholder="Optional"
                                    value={setting.favorite_drink}
                                    onChange={(e) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            favorite_drink: e.target.value,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Favorite Place
                            </DataList.Label>
                            <DataList.Value>
                                <TextField.Root
                                    size="1"
                                    placeholder="Optional"
                                    value={setting.favorite_place}
                                    onChange={(e) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            favorite_place: e.target.value,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                        <DataList.Item>
                            <DataList.Label minWidth="88px">
                                Favorite Person
                            </DataList.Label>
                            <DataList.Value>
                                <TextField.Root
                                    size="1"
                                    placeholder="Optional"
                                    value={setting.favorite_person}
                                    onChange={(e) =>
                                        onChangeSetting((oldState) => ({
                                            ...oldState,
                                            favorite_person: e.target.value,
                                        }))
                                    }
                                />
                            </DataList.Value>
                        </DataList.Item>
                    </DataList.Root>
                </Grid>
            </Card>
        </section>
    );
}
