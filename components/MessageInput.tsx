"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import useSendMessage from "@/hooks/useSendMessage";

type Props = {};

const MessageInput = (props: Props) => {
    const [message, setMessage] = useState("");
    const { isLoading, sendMessage } = useSendMessage();
    const handleSubmit = async () => {
        setMessage("");
        await sendMessage(message);
    };
    return (
        <form className="sticky bottom-0 w-full flex justify-center py-4 bg-background/60 backdrop-blur supports-[background-filter]:bg-background/60">
            <Input
                type="text"
                placeholder="Message LocalGPT"
                className="max-w-screen-sm p-6 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[0_3px_10px_rgb(0,0,0,0.1)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.1)]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoFocus
            />

            <Button
                className="ml-3 py-6  shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)]"
                disabled={isLoading}
                type="submit"
                onClick={handleSubmit}
            >
                <Send />
            </Button>
        </form>
    );
};

export default MessageInput;
