"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { buttonClasses } from "@/components/ui/button";
import type { ContactActionState } from "@/lib/actions/contact";
import { submitContactAction } from "@/lib/actions/contact";

const initialState: ContactActionState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-8 rounded-3xl border border-[var(--color-border)] bg-white/85 p-8 shadow-[0_35px_110px_-60px_rgba(37,99,235,0.6)] backdrop-blur"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" error={state.status === "error" ? state.fieldErrors?.name : undefined}>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="How should we address you?"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] shadow-inner shadow-blue-500/5 outline-none transition focus:ring-2 focus:ring-[var(--color-brand)]"
          />
        </FormField>
        <FormField
          label="Email"
          htmlFor="email"
          error={state.status === "error" ? state.fieldErrors?.email : undefined}
        >
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] shadow-inner shadow-blue-500/5 outline-none transition focus:ring-2 focus:ring-[var(--color-brand)]"
          />
        </FormField>
        <FormField label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Who are you representing?"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] shadow-inner shadow-blue-500/5 outline-none transition focus:ring-2 focus:ring-[var(--color-brand)]"
          />
        </FormField>
        <FormField
          label="Budget range"
          htmlFor="budget"
          error={state.status === "error" ? state.fieldErrors?.budget : undefined}
        >
          <select
            id="budget"
            name="budget"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] shadow-inner shadow-blue-500/5 outline-none transition focus:ring-2 focus:ring-[var(--color-brand)]"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-25k">Under $25k</option>
            <option value="25k-75k">$25k – $75k</option>
            <option value="75k-150k">$75k – $150k</option>
            <option value="150k-plus">$150k+</option>
          </select>
        </FormField>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Timeline" htmlFor="timeline">
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="When do you hope to launch?"
            className="w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] shadow-inner shadow-blue-500/5 outline-none transition focus:ring-2 focus:ring-[var(--color-brand)]"
          />
        </FormField>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="companyWebsite" className="sr-only">
            Company Website
          </label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="url"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>
      <FormField
        label="Project details"
        htmlFor="message"
        error={state.status === "error" ? state.fieldErrors?.message : undefined}
      >
        <textarea
          id="message"
          name="message"
          required
          placeholder="Share objectives, metrics, constraints, and any existing context. The more we know, the better we can help."
          className="min-h-[160px] w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-foreground)] shadow-inner shadow-blue-500/5 outline-none transition focus:ring-2 focus:ring-[var(--color-brand)]"
        />
      </FormField>
      {state.status === "error" ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      ) : null}
      {state.status === "success" ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          {state.message}
        </div>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-muted-foreground)]">
          We respect your privacy. Your info is only used to facilitate this conversation...
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  error?: string;
};

function FormField({ label, htmlFor, children, error }: FormFieldProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-col gap-2 text-sm text-[var(--color-foreground)]"
    >
      <span className="font-medium">{label}</span>
      {children}
      {error ? (
        <span className="text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={buttonClasses({
        size: "md",
        className: pending
          ? "cursor-not-allowed opacity-60"
          : "cursor-pointer",
      })}
    >
      {pending ? "Sending…" : "Submit request"}
    </button>
  );
}
