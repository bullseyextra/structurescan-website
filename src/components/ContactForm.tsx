"use client";

import { useId, useState } from "react";
import { services, site } from "@/lib/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function validate(data: FormState) {
    const next: Partial<FormState> = {};
    if (!data.name.trim()) next.name = "Enter your name.";
    if (!data.email.trim()) next.email = "Enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!data.message.trim()) next.message = "Tell us about the work.";
    return next;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.website) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      `Name: ${values.name}`,
      `Company: ${values.company || "—"}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "—"}`,
      `Service: ${values.service || "Not specified"}`,
      "",
      values.message,
    ].join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website quote request from ${values.name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="border border-line bg-cream p-6 rounded-3xl"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-2xl font-bold tracking-tight">
          Open your email app to send
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your message is ready in your email client, addressed to{" "}
          <a className="text-brand underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . If nothing opened, email us directly or call{" "}
          <a className="text-brand underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id="quote"
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          required
          value={values.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
        />
        <Field
          id={`${formId}-company`}
          label="Company"
          value={values.company}
          onChange={(value) => update("company", value)}
          autoComplete="organization"
        />
        <Field
          id={`${formId}-email`}
          label="Email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
        />
        <Field
          id={`${formId}-phone`}
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={(value) => update("phone", value)}
          autoComplete="tel"
        />
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-service`}
            className="block text-sm font-semibold"
          >
            Service needed
          </label>
          <select
            id={`${formId}-service`}
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-line bg-paper px-3 py-3 text-base"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.cardTitle}
              </option>
            ))}
            <option value="Not sure / multiple">Not sure / multiple</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-message`}
            className="block text-sm font-semibold"
          >
            Project details{" "}
            <span className="font-normal text-muted">(required)</span>
          </label>
          <textarea
            id={`${formId}-message`}
            required
            rows={6}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            className="mt-2 w-full rounded-2xl border border-line bg-paper px-3 py-3 text-base"
          />
          {errors.message ? (
            <p id={`${formId}-message-error`} className="mt-1 text-sm text-brand">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Send it over
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Submitting opens an email to {site.email}. We do not publish hours or
        turnaround times on this site—call if the work is time-sensitive.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}{" "}
        {required ? (
          <span className="font-normal text-muted">(required)</span>
        ) : (
          <span className="font-normal text-muted">(optional)</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-2xl border border-line bg-paper px-3 py-3 text-base"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-brand">
          {error}
        </p>
      ) : null}
    </div>
  );
}
