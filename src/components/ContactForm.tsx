import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Get EmailJS credentials from environment variables
  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear status when user starts typing
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setSubmitStatus("error");
      setErrorMessage("Email service is not configured. Please check your environment variables.");
      return;
    }
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (!form.email.includes("@")) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Ramees", // Your name
        },
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
      <Input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="text-sm sm:text-base"
        disabled={isLoading}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="text-sm sm:text-base"
        disabled={isLoading}
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="text-sm sm:text-base"
        disabled={isLoading}
        required
        rows={4}
      />
      
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-3 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">
            ✅ Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="p-3 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">
            ❌ {errorMessage}
          </p>
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full hover-ring text-sm sm:text-base"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </div>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
