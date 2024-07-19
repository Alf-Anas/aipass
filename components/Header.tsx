"use client";

import { Avatar, Button, Flex, Heading } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <header className="flex items-center px-4 border-b bg-indigo-700 text-gray-200">
            <Avatar src="./img/logo.png" fallback="AIPass" className="mr-2" />
            <Heading as="h1" className="flex-grow my-4">
                AIPass
            </Heading>
            <Flex gap="1">
                <Button
                    variant="solid"
                    disabled={pathname === "/"}
                    onClick={() => router.push("/")}
                >
                    Home
                </Button>
                <Button
                    variant="solid"
                    disabled={pathname === "/generate"}
                    onClick={() => router.push("/generate")}
                >
                    Generate
                </Button>
            </Flex>
        </header>
    );
}
