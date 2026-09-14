"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/src/lib/site";

// Defaults to FormSubmit, which needs no account: it posts to an address and
// emails it on. The first submission triggers a one-time confirmation mail to
// SITE.email that has to be clicked before anything is delivered.
//
// Set NEXT_PUBLIC_FORM_ENDPOINT to override, e.g. with a Formspree endpoint
// (https://formspree.io/f/xxxxxxx) or FormSubmit's hashed alias, which keeps
// the address out of the page source. See README.md.
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? `https://formsubmit.co/ajax/${SITE.email}`;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      // FormSubmit answers 200 with {"success":"false"} for a rejected post, so
      // response.ok alone would report a silent failure as a send.
      const body = await response.json().catch(() => null);
      const rejected = body && String(body.success) === "false";
      if (response.ok && !rejected) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-verified bg-verified-tint p-6" role="status">
        <p className="font-mono text-sm text-ink">
          Message sent. We reply from {SITE.email}, usually within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="_subject" value="New enquiry from pedaldown.tech" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-sm text-ink">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="rounded-sm border border-line-strong bg-paper-raised px-3 py-2.5 text-ink outline-none focus:border-steel"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-sm text-ink">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded-sm border border-line-strong bg-paper-raised px-3 py-2.5 text-ink outline-none focus:border-steel"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-sm text-ink">Company</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          className="rounded-sm border border-line-strong bg-paper-raised px-3 py-2.5 text-ink outline-none focus:border-steel"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-sm text-ink">What are you trying to build?</span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-sm border border-line-strong bg-paper-raised px-3 py-2.5 text-ink outline-none focus:border-steel"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-fit rounded-full bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-steel-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-amber-dark">
          Something went wrong sending that. Please email{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
