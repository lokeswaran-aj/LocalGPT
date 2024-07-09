import { create } from "zustand";

interface Message {
    messages: MessageType[];
    setMessage: (message: MessageType) => void;
}
const useMessage = create<Message>((set) => ({
    messages: [],
    setMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),
}));

export default useMessage;
