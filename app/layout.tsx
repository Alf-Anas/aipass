import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "@/styles/radix.config.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";

export const metadata: Metadata = {
    title: "AIPass : Password Generator by AI",
    description: "Easily Remember Password Generate by AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="dicoding:email" content="alfadila.anas@gmail.com" />
            </head>

            <body>
                <Theme
                    accentColor="indigo"
                    grayColor="gray"
                    panelBackground="solid"
                    scaling="100%"
                    appearance="dark"
                >
                    <div className="flex flex-col min-h-screen bg-gray-800">
                        <Header />
                        <MainContainer>{children}</MainContainer>
                        <Footer />
                    </div>
                </Theme>
            </body>
        </html>
    );
}
