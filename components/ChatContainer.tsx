"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = {};

const ChatContainer = (props: Props) => {
    const [messages, setMessages] = useState([
        {
            role: "user",
            timestamp: "2024-07-08T10:00:00Z",
            message:
                "Hi, I heard there's a new ChatGPT alternative that can run locally with an open-source LLM",
        },
        {
            role: "AI",
            timestamp: "2024-07-08T10:00:10Z",
            message: "Yes, that's correct! It is called LocalGPT",
        },
        {
            role: "user",
            timestamp: "2024-07-08T10:00:00Z",
            message: "Can you tell me more about it?",
        },
        {
            role: "AI",
            timestamp: "2024-07-08T10:00:10Z",
            message:
                "LocalGPT allows users to run it locally using an open-source large language model. This offers several advantages, including enhanced privacy, greater control over the model, and the ability to customize the model to better suit specific needs.",
        },
        {
            role: "user",
            timestamp: "2024-07-08T10:01:00Z",
            message:
                "That sounds interesting. What open-source LLMs are compatible with this version of ChatGPT?",
        },
        {
            role: "AI",
            timestamp: "2024-07-08T10:01:20Z",
            message:
                "The new ChatGPT version is compatible with several open-source LLMs, including Llama3, Llama2, Mistral and many more models.",
        },
        {
            role: "user",
            timestamp: "2024-07-08T10:02:00Z",
            message:
                "How difficult is it to set up and run ChatGPT with one of these open-source models?",
        },
        {
            role: "AI",
            timestamp: "2024-07-08T10:02:30Z",
            message:
                "Setting up and running ChatGPT locally with an open-source model is relatively straightforward. Detailed documentation and step-by-step guides are available to assist users.",
        },
    ]);
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
                    {message.message}
                </div>
            ))}
        </div>
    );
};

export default ChatContainer;
