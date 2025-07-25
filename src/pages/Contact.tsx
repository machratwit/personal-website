import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

const contactMethods = [
  {
    icon: MdOutlineEmail,
    label: "Email",
    value: "rodney.mach123@gmail.com",
    href: "mailto:rodney.mach123@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "Linkedin",
    value: "Rodney Mach",
    href: "https://www.linkedin.com/in/rodneymach/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "machratwit",
    href: "https://github.com/machratwit",
  },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    setDisabled(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong, please try again.");
    }

    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 max-w-3xl mx-auto pt-24 scroll-mt-24 text-white"
    >
      <FadeInSection>
        <h1 className="text-3xl font-bold text-center mb-12">Get in touch</h1>
      </FadeInSection>
      <FadeInSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-zinc-900 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <Icon className="w-6 h-6 text-blue-400" />
              <div>
                <p className="text-sm text-zinc-400">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </FadeInSection>

      <div className="mt-16 bg-zinc-900 border-blue-200 rounded-2xl p-8">
        <FadeInSection>
          <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
        </FadeInSection>

        <FadeInSection>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={disabled}
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 font-medium rounded-lg px-6 py-2 transition"
            >
              Send
            </button>
            {submitted && (
              <p className="text-blue-500 text-sm mt-4">
                Message submitted! Thank you.
              </p>
            )}
          </form>
        </FadeInSection>
      </div>
    </section>
  );
}
