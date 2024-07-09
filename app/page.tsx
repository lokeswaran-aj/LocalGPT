"use client";
import ChatContainer from "@/components/ChatContainer";
import Header from "@/components/Header";
import MessageInput from "@/components/MessageInput";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow overflow-y-auto mt-4">
                <ChatContainer />
            </main>
            <MessageInput />
        </div>
    );
}
