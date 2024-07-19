import { Link, Text } from "@radix-ui/themes";

export default function Footer() {
    return (
        <footer className="block text-center bg-indigo-700 text-black py-3">
            <Text as="p" color="gray" size="2">
                © 2024 |{" "}
                <Link color="gray" href="https://geoit.dev/" target="_blank">
                    GeoIT Developer
                </Link>
            </Text>
            <Text as="p" color="gray" size="1">
                Made with{" "}
                <Link color="gray" href="https://gemini.google.com/" target="_blank">
                    Gemini AI
                </Link>
            </Text>
        </footer>
    );
}
