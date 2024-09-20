"use client";
// import { motion } from "framer-motion";
import H2 from "../h2";
import Wrapper from "../wrapper";
import { Button } from "../ui/button";
import { useActiveSection } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";
// import { sendEmail } from "@/actions/sendEmail";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await sendEmail(formData);
    setIsLoading(false);
  };

  const { ref } = useActiveSection("Contact");
  return (
    <Wrapper
      ref={ref}
      id="contact"
      className="mb-20 mt-20 pt-20 border-t border-gray-50/5 w-full container flex flex-col items-center">
      <H2>Contact me</H2>
      <p className="text-center text-gray-50/60 mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@example.com">
          example@example.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-2 max-w-[768px] w-full"
        action={handleSendAction}
        onSubmit={() => setIsLoading(true)}>
        <input
          type="email"
          name="email"
          className="h-14 pl-4 rounded-lg borderBlack bg-gray-50/5 border border-gray-50/10"
          placeholder="Your E-mail"
          maxLength={500}
          required
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack bg-gray-50/5 border border-gray-50/10 p-4"
          placeholder="Your message"
          name="message"
          required
          maxLength={1000}
        />
        <Button
          type="submit"
          size="lg"
          variant="outline"
          disabled={isLoading}
          className="w-max border-gray-50/50 self-end disabled:bg-slate-50/80 disabled:text-gray-950">
          {isLoading ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Wrapper>
  );
}
