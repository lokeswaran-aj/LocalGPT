import siteConfig from "@/config/site";
import Link from "next/link";
import React from "react";
import Icons from "./Icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[background-filter]:bg-background/60">
            <div className="container max-w-screen-2xl h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Icons.logo />
                    <h1 className="text-xl font-bold">{siteConfig.name}</h1>
                </Link>
                <div className="flex justify-center items-center">
                    <nav className="flex items-center">
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "w-10 px-0"
                                )}
                            >
                                <Icons.gitHub className="w-5 h-5" />
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "w-10 px-0"
                                )}
                            >
                                <Icons.twitter className="w-5 h-5" />
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
