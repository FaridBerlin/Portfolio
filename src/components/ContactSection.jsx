import React from 'react'

import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Demo function to showcase different toast types
  const showToastDemo = () => {
    toast.info("🚀 Portfolio Tech Stack Info", {
      description: "This amazing portfolio was built with React 19 + Vite 7 + Tailwind CSS 4 + Sonner for beautiful notifications!",
      duration: 4000,
    });
    
    setTimeout(() => {
      toast.warning("⚡ Experimental Feature Alert", {
        description: "You're currently viewing the experimental branch with enhanced colorful toast notifications and bigger icons!",
        duration: 4000,
      });
    }, 1500);
    
    setTimeout(() => {
      toast("🎨 Custom Toast Demo", {
        description: "This is a custom toast with bigger fonts, larger icons, and enhanced styling for better user experience!",
        duration: 4000,
      });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Show a loading toast first
    const loadingToast = toast.loading("🚀 Sending your awesome message...", {
      description: "Please wait while we process your request with style!",
    });

    // Simulate form validation
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Check for empty fields
    if (!name || !email || !message) {
      toast.dismiss(loadingToast);
      toast.error("⚠️ Please fill in all fields", {
        description: "All fields are required to send your amazing message. Don't leave any field empty!",
        duration: 4000,
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      // Dismiss the loading toast
      toast.dismiss(loadingToast);
      
      // Simulate random success/error for demo (90% success rate)
      if (Math.random() > 0.1) {
        // Show a colorful success toast
        toast.success("✨ Message sent successfully! 🎉", {
          description: "Thank you for reaching out! I'll get back to you within 24 hours with an amazing response.",
          action: {
            label: "Awesome!",
            onClick: () => console.log("Toast closed"),
          },
          duration: 20000,
        });
        e.target.reset();
      } else {
        // Show a colorful error toast
        toast.error("❌ Failed to send message", {
          description: "Oops! Something went wrong on our end. Please try again or contact me directly via email.",
          action: {
            label: "🔄 Retry",
            onClick: () => handleSubmit(e),
          },
          duration: 5000,
        });
      }
      
      setIsSubmitting(false);
    }, 1500);
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

        <div className="text-center mb-4">
          <button
            onClick={showToastDemo}
            className="cosmic-button mb-8 px-6 py-2 text-sm"
          >
            🎨 Preview Toast Notifications
          </button>
        </div>

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
