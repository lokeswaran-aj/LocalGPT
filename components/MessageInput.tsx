import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

type Props = {};

const MessageInput = (props: Props) => {
    return (
        <div className="flex justify-center my-5">
            <Input
                type="text"
                placeholder="Message LocalGPT"
                className="max-w-screen-sm p-6 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
            <Button className="ml-3 py-6">
                <Send />
            </Button>
        </div>
    );
};

export default MessageInput;
