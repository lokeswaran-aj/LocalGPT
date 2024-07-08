"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type Props = {};

const ModeToggler = (props: Props) => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <Button
                variant="ghost"
                className="w-10 px-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </>
    );
};

export default ModeToggler;
