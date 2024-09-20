"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactForm from "@/app/email/contactForm";
// import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message');
    const email = formData.get('email');
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        };
    }
    if (!validateString(email, 500)) {
        return {
            error: 'Invalid email'
        };
    }

    try {
        await resend.emails.send({
            from: 'LTmedia | Portfolio <portfolio@mailing.ltmedia.pl>',
            to: ['ltryczynski1@gmail.com'],
            subject: 'Nowa wiadomość! LTmedia Portfolio',
            replyTo: email as string,
            text: message as string,
            react: ContactForm({ email: email as string, message: message as string })
        });
    } catch (error: unknown) {
        getErrorMessage(error)
    }



};


