import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function POST(request: Request) {
    const { message: userMessage } = await request.json();
    const prompt = ChatPromptTemplate.fromMessages([
        [
            "system",
            "You are LocalGPT. You are a friendly AI that can help users with any queries. ",
        ],
        ["human", `{userMessage}`],
    ]);

    const model = new ChatOllama({ model: "llama3" });

    const chain = prompt.pipe(model);

    const result = await chain.invoke({ userMessage });

    return Response.json({ message: result.content });
}
