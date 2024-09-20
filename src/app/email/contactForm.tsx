import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  email: string;
};

export default function ContactForm({ message, email }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nowa wiadomomść ze strony Portfolio LTmedia</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Otrzymałeś nową wiadomość z formularza kontaktowego
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Email nadawcy: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
