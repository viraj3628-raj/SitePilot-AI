"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ChatMessage from "@/components/ChatMessage";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((old) => [
      ...old,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((old) => [
        ...old,
        {
          role: "ai",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((old) => [
        ...old,
        {
          role: "ai",
          text: "Something went wrong.",
        },
      ]);
    }

   setLoading(false);
}

return (
  <main className="min-h-screen flex bg-zinc-950">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {messages.length === 0 && (
            <div className="text-center mt-20">
              <h1 className="text-5xl font-bold text-white">
                🚀 SitePilot AI
              </h1>

              <p className="text-zinc-400 mt-4 text-lg">
                Luxury AI Website Builder
              </p>
            </div>
          )}

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              role={msg.role}
              text={msg.text}
            />
          ))}

          {loading && (
            <div className="text-zinc-400">
              🤖 SitePilot AI is thinking...
            </div>
          )}

          <div ref={bottomRef}></div>

        </div>

        <div className="border-t border-zinc-800 bg-zinc-900 p-5 flex gap-3">

          <input
            className="flex-1 rounded-xl bg-zinc-800 text-white border border-zinc-700 p-4 outline-none"
            placeholder="Ask SitePilot AI..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                sendMessage();
              }
            }}
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl text-white font-semibold"
          >
            Send
          </button>

        </div>

      </div>

    </main>
  );
}
