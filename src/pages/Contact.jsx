import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="bg-white py-28 px-8 text-slate-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-12">Contact Me</h2>

        <div className="space-y-4">
          <input placeholder="Name" className="w-full p-4 border rounded-xl" />

          <input placeholder="Email" className="w-full p-4 border rounded-xl" />

          <textarea
            placeholder="Message"
            className="w-full p-4 border rounded-xl h-40"
          />

          <button
            className="
          w-full
          bg-blue-500
          text-white
          py-4
          rounded-xl
          font-semibold
          hover:bg-blue-600
          transition
          "
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
