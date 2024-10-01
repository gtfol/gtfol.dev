"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);
    if (result.error) {
      setStatus(result.error);
    } else if (result.success) {
      setStatus(result.success);
    }
  };

  return (
    <form action={handleSubmit} className="mb-8 space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 bg-void-purple focus:bg-void-purple-hover text-white rounded focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 bg-void-purple focus:bg-void-purple-hover text-white rounded focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2">
          subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full p-2 bg-void-purple focus:bg-void-purple-hover text-white rounded focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full p-2 bg-void-purple focus:bg-void-purple-hover text-white rounded focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-hype-purple hover:bg-hype-purple-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-hype-purple"
      >
        send message
      </button>
      {status && (
        <div className={status.includes("successfully") ? "text-green-500" : "text-red-500"}>
          {status}
        </div>
      )}
    </form>
  );
}
