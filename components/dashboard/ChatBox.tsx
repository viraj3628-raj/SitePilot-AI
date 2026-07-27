"use client";

import { useState } from "react";
import ChatMessage from "@/components/ChatMessage";

type Msg = {
  role: "user" | "ai";
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [message, setMessage] = useState("");

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;
    setMessages((old) => [...old, { role: "user", text: userMessage }]);
    setMessage("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    setMessages((old) => [
      ...old,
      { role: "ai", text: data.reply },
    ]);
  }

  return (
    <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold mb-4">🤖 AI Chat</h2>

      <div className="space-y-3 min-h-[200px] mb-4">
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} text={m.text} />
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 rounded-xl bg-zinc-800 p-3 text-white"
          placeholder="Ask SitePilot AI..."
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-blue-600 px-6 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
