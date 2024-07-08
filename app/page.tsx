import Header from "@/components/Header";
import MessageInput from "@/components/MessageInput";

export default function Home() {
    return (
        <div className="flex flex-col min-h-dvh relative bg-background">
            <main className="flex-1">
                <Header />
                <div className="container max-w-screen-lg">
                    <h1 className="text-4xl text-center">Chat</h1>
                </div>
            </main>
            <MessageInput />
        </div>
    );
}
