import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="max-w-lg mx-auto space-y-4">
      <Input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
      />
      <Button type="button" className="w-full hover-ring">
        Send Message
      </Button>
    </form>
  );
}
