import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";
import { env } from "@/env.mjs";

interface EmailVerificationProps {
  token: string;
}

export const EmailVerification: React.FC<Readonly<EmailVerificationProps>> = ({
  token,
}) => (
  <Html>
    <Head />
    <Preview>Verify your email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Verify your email</Heading>
        <Text style={text}>
          Thank you for joining our waitlist and for your patience. We will send
          you a note when we have something new to share.
        </Text>
        <Button href={`${env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`}>
          Verify your email
        </Button>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#000000",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "auto",
  padding: "96px 20px 64px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "40px",
  margin: "0 0 20px",
};

const text = {
  color: "#aaaaaa",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 40px",
};
