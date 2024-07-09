import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

type Props = {};

const MessageInput = (props: Props) => {
    return (
        <div className="sticky bottom-0 w-full flex justify-center py-4 bg-background/60 backdrop-blur supports-[background-filter]:bg-background/60">
            <Input
                type="text"
                placeholder="Message LocalGPT"
                className="max-w-screen-sm p-6 focus-visible:ring-0 focus-visible:ring-offset-0  shadow-[0_3px_10px_rgb(0,0,0,0.1)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.1)]"
            />

            <Button className="ml-3 py-6  shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)]">
                <Send />
            </Button>
        </div>
    );
};

export default MessageInput;
