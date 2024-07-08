import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-sm font-medium leading-none sm:py-2 sm:mt-0 mt-4">
        A JS Mastery project. Made with ❤️ by{" "}
        <a
          href="https://github.com/Ankit-78"
          className="font-bold hover:underline underline-offset-4"
        >
           Ankit Tripathi
        </a>
      </p>
    </footer>
  );
}
