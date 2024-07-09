import { useState } from "react";
import useMessage from "./useMessageStore";

const useSendMessage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setMessage } = useMessage();
    const sendMessage = async (message: string) => {
        try {
            setIsLoading(true);
            setMessage({ message, role: "user" });
            const response = await fetch("/api/v1/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            setMessage({ message: data.message, role: "ai" });
            return data;
        } catch (error: any) {
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return { sendMessage, isLoading };
};

export default useSendMessage;
