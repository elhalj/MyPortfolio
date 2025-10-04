"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setError(
        "Missing EmailJS configuration: check NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
      );
      return;
    }

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    const sid = serviceID as string;
    const tid = templateID as string;
    const pk = publicKey as string;

    emailjs
      .send(sid, tid, templateParams, pk)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setError(null);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setError(
          "Failed to send message. Rendez-vous au debut de la page pour mecrire sur mes differents reseaux.",
        );
      });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Contactez-moi</h2>
        <p className="text-lg text-gray-400 mt-2">
          N'hésitez pas à me laisser un message.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          {error && <p className="text-red-600">{error}</p>}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-300 mb-2"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg transform transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Envoyer le Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
