"use client";
// import { motion } from "framer-motion";
import H2 from "../h2";
import Wrapper from "../wrapper";
import { Button } from "../ui/button";
import { useActiveSection } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  const disabledButton = isVerified || isLoading;

  const handleSendAction = async (formData: FormData) => {
    const sendMessage = sendEmail(formData);
    toast.promise(sendMessage, {
      pending: "Message is sending...",
      success: "Message sent 👌",
      error: "Failed to send message 🤯",
    });

    setIsLoading(false);
  };

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const { ref } = useActiveSection("Contact");
  return (
    <Wrapper
      ref={ref}
      id="contact"
      className="mb-20 mt-20 pt-20 border-t border-gray-50/5 w-full container flex flex-col items-center">
      <H2>Contact me</H2>
      <p className="text-center text-gray-50/60 mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kontakt@lt-media.pl">
          kontakt@lt-media.pl
        </a>{" "}
        or through this form.
      </p>
      <ToastContainer
        position="top-right"
        autoClose={4500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
        <div className="flex md:justify-between gap-5 flex-wrap items-start">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            ref={recaptchaRef}
            theme="dark"
            onChange={handleChange}
            onExpired={handleExpired}
          />
          <Button
            type="submit"
            size="lg"
            variant="outline"
            disabled={!disabledButton}
            className="w-max border-gray-50/50  disabled:bg-slate-50/80 disabled:text-gray-950">
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}
