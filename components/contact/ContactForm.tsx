"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Formulaire visuel uniquement — l’envoi n’est pas encore connecté.",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-paper p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-ink">
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            autoComplete="name"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-ink"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full resize-y border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Envoyer (inactif)
      </button>

      {notice ? (
        <p role="status" className="mt-4 text-sm text-muted">
          {notice}
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Aucun message n’est envoyé à ce stade.
        </p>
      )}
    </form>
  );
}
