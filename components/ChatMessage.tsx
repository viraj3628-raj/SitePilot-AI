type Props = {
  role: "user" | "ai";
  text: string;
};

export default function ChatMessage({ role, text }: Props) {
  const isUser = role === "user";

  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          isUser
            ? "bg-blue-600 text-white px-4 py-3 rounded-2xl max-w-[80%]"
            : "bg-zinc-800 text-white px-4 py-3 rounded-2xl max-w-[80%]"
        }
      >
        {text}
      </div>
    </div>
  );
}
