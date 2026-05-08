/**
 * Shared email configuration for all form submissions.
 * Override FORM_RECIPIENT_EMAIL in .env.local to change recipient(s).
 * Use comma-separated addresses for multiple: email1@x.com,email2@x.com
 */
const DEFAULT_RECIPIENT = "Info@MikeTintnerProductions.com";

/** Starts notification subjects so they filter consistently in the inbox. */
export const FORM_EMAIL_SUBJECT_PREFIX = "planetarymusic.com booking";

export function formatFormEmailSubject(detail: string): string {
  const d = detail.trim();
  if (!d) return FORM_EMAIL_SUBJECT_PREFIX;
  return `${FORM_EMAIL_SUBJECT_PREFIX} – ${d}`;
}

export function getRecipientEmails(): string[] {
  const env = process.env.FORM_RECIPIENT_EMAIL?.trim();
  if (env) {
    return env.split(",").map((e) => e.trim()).filter(Boolean);
  }
  return [DEFAULT_RECIPIENT];
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(formatValue).filter(Boolean).join(", ");
  }

  if (value === null || value === undefined) {
    return "";
  }

  return value.toString().trim();
}

function formatKey(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function buildSubmittedFieldsSection(data: Record<string, unknown>): string {
  const lines = Object.entries(data)
    .map(([key, value]) => [formatKey(key), formatValue(value)] as const)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`);

  if (!lines.length) {
    return "--- ALL SUBMITTED FIELDS ---\n(none)";
  }

  return ["--- ALL SUBMITTED FIELDS ---", ...lines].join("\n");
}
