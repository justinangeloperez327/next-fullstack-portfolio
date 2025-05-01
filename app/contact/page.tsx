"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "justinangeloperez327@gmail.com",
        subject: "New Contact Form Submission",
        message: {
          name,
          email,
          message,
        },
      }),
    });
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      {submitted ? (
        <p className="text-center text-green-600 text-lg">
          Thanks! I’ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 border rounded"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
