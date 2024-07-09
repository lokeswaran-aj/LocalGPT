import useMessage from "@/hooks/useMessageStore";
import { cn } from "@/lib/utils";
import React from "react";
import Markdown from "react-markdown";

type Props = {};

const ChatContainer = (props: Props) => {
    const { messages } = useMessage();
    return (
        <div className="space-y-10 container max-w-screen-lg">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                        message.role === "user"
                            ? "ml-auto bg-primary text-primary-foreground"
                            : "bg-muted"
                    )}
                >
                    <Markdown>{message.message}</Markdown>
                </div>
            ))}
        </div>
    );
};

export default ChatContainer;
