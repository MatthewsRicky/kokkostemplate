"use client";

import { FormEvent, useState } from "react";

const enquiryOptions = [
  "General enquiry",
  "Reservations",
  "Cakes & special occasions",
  "Catering",
  "Private event",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      enquiry: String(formData.get("enquiry") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />

        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" placeholder="+254..." />

        <div>
          <label
            htmlFor="enquiry"
            className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal/55"
          >
            Enquiry
          </label>

          <select
            id="enquiry"
            name="enquiry"
            required
            defaultValue=""
            className="w-full appearance-none border-b border-kokkos-charcoal/20 bg-transparent px-0 py-4 text-sm text-kokkos-charcoal outline-none transition-colors focus:border-kokkos-green"
          >
            <option value="" disabled>
              Select an enquiry
            </option>

            {enquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal/55"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="How can we help?"
          className="w-full resize-none border-b border-kokkos-charcoal/20 bg-transparent px-0 py-4 text-sm leading-7 text-kokkos-charcoal outline-none transition-colors placeholder:text-kokkos-charcoal/30 focus:border-kokkos-green"
        />
      </div>

      <div className="flex flex-col gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-fit items-center gap-5 bg-kokkos-charcoal px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-cream transition-colors duration-300 hover:bg-kokkos-green-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{status === "sending" ? "Sending..." : "Send enquiry"}</span>

          {status !== "sending" && (
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </button>

        {status === "success" && (
          <p className="text-sm leading-7 text-kokkos-green-dark">
            Thank you. Your message has been sent to Kokkos. We’ll be in touch
            shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm leading-7 text-red-700">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal/55"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-kokkos-charcoal/20 bg-transparent px-0 py-4 text-sm text-kokkos-charcoal outline-none transition-colors placeholder:text-kokkos-charcoal/30 focus:border-kokkos-green"
      />
    </div>
  );
}
