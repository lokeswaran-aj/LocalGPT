"use client";

import { useTheme } from "next-themes";
import React from "react";
import Icons from "./Icons";
import siteConfig from "@/config/site";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
    const { theme } = useTheme();
    return (
        <>
            <Link href="/" className="flex items-center">
                {theme === "dark" ? <Icons.logoDark /> : <Icons.logoLight />}
                <h1 className="text-xl font-bold">{siteConfig.name}</h1>
            </Link>
        </>
    );
};
{
}

export default Logo;
