import "server-only";
import { Resend } from "resend";

const TO_ADDRESS = "hello@codeheads.com.au";
const FROM_ADDRESS =
  process.env.RESEND_FROM_EMAIL || "CodeHeads <notifications@codeheads.com.au>";

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      `Contact form email not sent (RESEND_API_KEY not set): "${name}" <${email}>`
    );
    return { sent: false, error: "RESEND_API_KEY is not set." };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) {
      console.error("Contact form email send failed:", error);
      return { sent: false, error: error.message };
    }
    return { sent: true };
  } catch (error) {
    console.error("Contact form email send failed:", error);
    return {
      sent: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
