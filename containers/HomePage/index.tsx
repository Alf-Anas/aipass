"use client";

import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    return (
        <main>
            <Grid columns={{ initial: "1", md: "2" }} gap="4">
                <Box>
                    <Heading size="6" as="h2">
                        Welcome to AIPass : Password Generator by AI
                    </Heading>

                    <Text as="p" className="font-bold mb-4">
                        AIPass: Where Beauty Meets Security
                    </Text>

                    <Text as="p" className="font-bold">
                        Tired of weak passwords and forgettable phrases?
                    </Text>

                    <Text as="p" className="my-4 text-justify">
                        AIPass is your one-stop shop for generating strong,
                        secure passwords that are also aesthetically pleasing.
                    </Text>

                    <Text as="p" className="font-bold">
                        Here`s what makes AIPass unique:
                    </Text>

                    <ul className="list-disc space-y-2">
                        <li>
                            <b>AI-powered Strength</b>: We leverage cutting-edge
                            AI to create passwords that meet the highest
                            security standards, making hacking nearly
                            impossible.
                        </li>
                        <li>
                            <b>Embrace the Indah (Beautiful)</b>: Go beyond just
                            strong - choose from a variety of beautiful
                            Indonesian words to personalize your password and
                            make it truly memorable.
                        </li>
                        <li>
                            <b>Say Goodbye to Frustration</b>: No more
                            struggling to remember complex combinations. AIPass
                            generates passwords that are easy to recall while
                            remaining unbreakable.
                        </li>
                    </ul>

                    <Text as="p" className="my-4 text-justify">
                        With AIPass, you can finally have both security and a
                        touch of elegance.
                    </Text>
                </Box>

                <Flex direction="column" gap="3" className="text-center">
                    <Image
                        alt="logo"
                        width="500"
                        height="500"
                        src="/img/logo.png"
                        className="max-w-96 max-h-96 mx-auto"
                    />
                    <Flex className="mx-auto" gap="4">
                        <Button
                            variant="solid"
                            size="3"
                            className="min-w-36"
                            onClick={() => router.push("/generate")}
                        >
                            Start Generating
                        </Button>
                    </Flex>
                </Flex>
            </Grid>
        </main>
    );
}
