import { Resend } from "resend";
import { getRecipientEmails } from "./email-config";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.FORM_FROM_EMAIL);
}

export async function sendFormEmail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const replyTo = opts.replyTo?.trim();
  const { error } = await resend.emails.send({
    from: process.env.FORM_FROM_EMAIL!,
    to: getRecipientEmails(),
    subject: opts.subject,
    text: opts.text,
    replyTo: replyTo || undefined,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
}
