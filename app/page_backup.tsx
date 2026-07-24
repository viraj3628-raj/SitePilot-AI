"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-blue-600">
          🚀 SitePilot AI
        </h1>

        <p className="mt-4 text-lg">
          <strong>Founder:</strong> Viraj Singh
        </p>

        <p className="mt-2">
          Mission: एक ऐसा AI प्लेटफ़ॉर्म जो किसी भी व्यक्ति की वेबसाइट
          बनाने, अपडेट करने, SEO करने और मैनेज करने में मदद करे।
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Version 1.0 (MVP)
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>Dashboard</li>
          <li>AI Chat</li>
          <li>Website Manager</li>
          <li>Blog Writer</li>
          <li>SEO Optimizer</li>
          <li>Image Generator</li>
          <li>Analytics</li>
          <li>Domain Manager</li>
          <li>Hosting Manager</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          AI Agent Features
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>वेबसाइट का विश्लेषण करेगा</li>
          <li>होम पेज बेहतर बनाने के सुझाव देगा</li>
          <li>ब्लॉग लिखेगा</li>
          <li>SEO Title और Description बनाएगा</li>
          <li>इमेज के लिए Prompt तैयार करेगा</li>
          <li>Website Performance Report देगा</li>
          <li>जहाँ अनुमति और तकनीकी इंटीग्रेशन उपलब्ध हो, वहाँ बदलाव करने में मदद करेगा।</li>
        </ul>

<h2 className="mt-8 text-2xl font-semibold">
  AI Chat
</h2>

<input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Ask SitePilot AI..."
  className="w-full border rounded-lg p-3 mt-4"
/>

<button
  className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
  onClick={async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  }}
>
  Ask AI
</button>

{reply && (
  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
    <strong>AI Reply:</strong>
    <p>{reply}</p>
  </div>
)}
      </div>
    </main>
  );
}
