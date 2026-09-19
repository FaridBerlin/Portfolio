import {
  Instagram,
  Linkedin,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string).trim();
    const email = (formData.get('email') as string).trim();
    const message = (formData.get('message') as string).trim();

    // Check for empty fields
    if (!name || !email || !message) {
      toast.error("Please fill in all fields", {
        description: "Name, email, and a message are all required.",
        duration: 4000,
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Contact form isn't configured yet", {
        description: "EmailJS credentials are missing. See .env.example for the required variables.",
        duration: 6000,
      });
      console.error(
        "Missing EmailJS env vars. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file."
      );
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out — I'll get back to you as soon as I can.",
          duration: 6000,
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error);
        toast.dismiss(loadingToast);
        toast.error("Failed to send message", {
          description: "Something went wrong. Please try again or email me directly.",
          action: {
            label: "Retry",
            onClick: () => handleSubmit(e),
          },
          duration: 6000,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Media Section */}
          <div className="space-y-8 relative flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center"> Connect With Me</h3>
              <div className="flex space-x-6 justify-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-7 w-7 text-primary" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-7 w-7 text-primary" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-7 w-7 text-primary" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Twitch className="h-7 w-7 text-primary" />
                </a>
              </div>
            </div>

            {/* Barely visible legal info for compliance */}
            <div className="absolute bottom-0 right-0 opacity-[0.01] text-[2px] pointer-events-none select-none">
              <div>Email: farid.hima@dci-student.org</div>
              <div>Location: 12045 Berlin, Germany</div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Bobby Fischer"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="bob@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
