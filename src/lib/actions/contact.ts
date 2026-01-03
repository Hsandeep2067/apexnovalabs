"use server";

import { headers } from "next/headers";

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const budgetOptions = ["under-25k", "25k-75k", "75k-150k", "150k-plus"] as const;

type BudgetOption = (typeof budgetOptions)[number];

export type ContactActionInput = {
  name: string;
  email: string;
  company?: string;
  budget?: BudgetOption;
  timeline?: string;
  message: string;
};

export type ContactActionState =
  | { status: "idle" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof ContactActionInput, string>>;
    }
  | { status: "success"; message: string };

function sanitize(value: string | null | undefined) {
  return value?.toString().trim() ?? "";
}

export async function submitContactAction(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email"));
  const company = sanitize(formData.get("company"));
  const budget = sanitize(formData.get("budget")) as BudgetOption;
  const timeline = sanitize(formData.get("timeline"));
  const message = sanitize(formData.get("message"));
  const honeypot = sanitize(formData.get("companyWebsite"));

  if (honeypot) {
    return { status: "success", message: "Thanks! We will be in touch shortly." };
  }

  const fieldErrors: Partial<Record<keyof ContactActionInput, string>> = {};

  if (!name) {
    fieldErrors.name = "Please share your name so we know who to reach.";
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    fieldErrors.email = "We need a valid email address to respond.";
  }

  if (!message || message.length < 20) {
    fieldErrors.message = "Tell us a bit more about the project (20+ characters).";
  }

  if (budget && !budgetOptions.includes(budget)) {
    fieldErrors.budget = "Please choose one of the listed budget ranges.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const requestHeaders = headers();
  const submittedFrom = requestHeaders.get("x-forwarded-for") ?? "unknown";

  // TODO: Integrate Resend or your chosen email provider.
  console.log("📬 New contact inquiry from Apex Nova Labs website", {
    name,
    email,
    company,
    budget,
    timeline,
    message,
    submittedFrom,
    timestamp: new Date().toISOString(),
  });

  await new Promise((resolve) => setTimeout(resolve, 250));

  return {
    status: "success",
    message:
      "Thanks for reaching out. We'll follow up within two business days.",
  };
}
