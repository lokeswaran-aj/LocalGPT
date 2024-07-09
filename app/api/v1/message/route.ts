import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function POST(request: Request) {
    if (process.env.ENVIRONMENT === "production") {
        return Response.json({
            message:
                "Hey!! I'm currently not connected to an LLM. Please clone https://github.com/lokeswaran-aj/LocalGPT and run it locally with Ollama and an open-source LLM.",
        });
    }
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
