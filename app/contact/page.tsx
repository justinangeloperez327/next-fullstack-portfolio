"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can add API call here
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
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded"
            required
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 border rounded"
            required
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
