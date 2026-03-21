/**
 * Shared email configuration for all form submissions.
 * Override FORM_RECIPIENT_EMAIL in .env.local to change recipient(s).
 * Use comma-separated addresses for multiple: email1@x.com,email2@x.com
 */
const DEFAULT_RECIPIENT = "info@miketintnerproductions.com";

export function getRecipientEmails(): string[] {
  const env = process.env.FORM_RECIPIENT_EMAIL?.trim();
  if (env) {
    return env.split(",").map((e) => e.trim()).filter(Boolean);
  }
  return [DEFAULT_RECIPIENT];
}
