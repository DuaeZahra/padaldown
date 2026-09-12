"use client";

import { useMemo, useState } from "react";

const DIMENSIONS = [
  "billing",
  "refunds",
  "pricing",
  "security",
  "onboarding",
  "api",
  "data",
  "integrations",
  "account",
  "support",
] as const;

type Dimension = (typeof DIMENSIONS)[number];
type Vector = Record<Dimension, number>;

function vec(partial: Partial<Vector>): Vector {
  const base = Object.fromEntries(DIMENSIONS.map((d) => [d, 0])) as Vector;
  return { ...base, ...partial };
}

interface Doc {
  id: string;
  path: string;
  title: string;
  body: string;
  vector: Vector;
}

// A small, fixed corpus standing in for a real documents table with a
// pgvector column. Vectors below are hand-authored topic weights rather
// than model embeddings, but the search math (cosine similarity) below
// runs for real, in the browser, on whatever the visitor types.
const DOCS: Doc[] = [
  {
    id: "billing-terms",
    path: "docs/billing-terms.md",
    title: "Billing changes and mid-cycle credit",
    body: "Explains how charges are calculated when you upgrade or downgrade mid-cycle, and how credit for the unused period is applied to your next invoice.",
    vector: vec({ billing: 1, pricing: 0.6, refunds: 0.7, account: 0.2 }),
  },
  {
    id: "sso-setup",
    path: "docs/sso-setup.md",
    title: "Configuring SAML single sign-on",
    body: "Walks admins through connecting an identity provider so team members can log in without a separate password.",
    vector: vec({ security: 1, onboarding: 0.5, integrations: 0.6, account: 0.3 }),
  },
  {
    id: "api-rate-limits",
    path: "docs/api-rate-limits.md",
    title: "API request limits",
    body: "Describes how many requests each plan allows per minute and what happens once you go over that ceiling.",
    vector: vec({ api: 1, pricing: 0.4, data: 0.2 }),
  },
  {
    id: "data-export",
    path: "docs/data-export.md",
    title: "Exporting your workspace",
    body: "Shows how to download every record in your workspace as a single archive you can keep for your own records.",
    vector: vec({ data: 1, account: 0.4, support: 0.2 }),
  },
  {
    id: "team-roles",
    path: "docs/team-roles.md",
    title: "Managing team members",
    body: "Covers how to invite colleagues, assign them a role, and control what each one is allowed to see or change.",
    vector: vec({ account: 1, security: 0.5, onboarding: 0.4 }),
  },
  {
    id: "webhooks",
    path: "docs/webhooks.md",
    title: "Sending events to your own server",
    body: "Describes how to register a URL that gets called automatically whenever an event occurs in your workspace.",
    vector: vec({ integrations: 1, api: 0.6, data: 0.4 }),
  },
];

const KEYWORD_DICTIONARY: [string, Partial<Vector>][] = [
  ["refund", { refunds: 1, billing: 0.5 }],
  ["money back", { refunds: 1 }],
  ["cancel", { refunds: 0.8, billing: 0.4 }],
  ["annual", { billing: 0.6, pricing: 0.4 }],
  ["plan", { pricing: 0.5, billing: 0.3 }],
  ["subscription", { billing: 0.6, pricing: 0.4 }],
  ["price", { pricing: 1 }],
  ["cost", { pricing: 1 }],
  ["charge", { pricing: 0.8, billing: 0.4 }],
  ["sso", { security: 1, onboarding: 0.4, integrations: 0.4 }],
  ["saml", { security: 1, integrations: 0.4 }],
  ["single sign-on", { security: 1, onboarding: 0.4 }],
  ["identity provider", { security: 1, integrations: 0.5 }],
  ["log in", { security: 0.8, account: 0.3 }],
  ["login", { security: 0.8, account: 0.3 }],
  ["password", { security: 1 }],
  ["auth", { security: 1 }],
  ["rate limit", { api: 1, pricing: 0.3 }],
  ["quota", { api: 0.8, pricing: 0.3 }],
  ["throttle", { api: 0.8 }],
  ["requests per", { api: 1 }],
  ["export", { data: 1, account: 0.3 }],
  ["data out", { data: 1 }],
  ["download", { data: 0.8, support: 0.2 }],
  ["backup", { data: 0.8, support: 0.3 }],
  ["webhook", { integrations: 1, api: 0.5, data: 0.3 }],
  ["notify", { integrations: 0.7, api: 0.3 }],
  ["happens", { integrations: 0.5, api: 0.2 }],
  ["automatically", { integrations: 0.4, api: 0.2 }],
  ["callback", { integrations: 0.7, api: 0.4 }],
  ["role", { account: 0.8, security: 0.4 }],
  ["permission", { account: 0.7, security: 0.6 }],
  ["team member", { account: 0.7, onboarding: 0.4 }],
  ["invite", { account: 0.6, onboarding: 0.5 }],
  ["access", { security: 0.5, account: 0.5 }],
  ["onboarding", { onboarding: 1 }],
  ["get started", { onboarding: 1 }],
];

const EXAMPLES = [
  "refund policy for annual plans",
  "how do I set up SSO",
  "can I get all my data out",
  "notify my server when something happens",
];

const STOPWORDS = new Set([
  "a","an","the","is","are","do","does","how","what","whats","who","where","when","why",
  "i","you","we","my","our","your","of","in","on","to","for","with","and","or","up","set",
  "get","can","all","out","me","it","this","that","from","about","as","be","if",
]);

function buildQueryVector(query: string): Vector {
  const lower = query.toLowerCase();
  const result = vec({});
  for (const [phrase, weights] of KEYWORD_DICTIONARY) {
    if (lower.includes(phrase)) {
      for (const d of DIMENSIONS) {
        result[d] += weights[d] ?? 0;
      }
    }
  }
  return result;
}

function cosineSimilarity(a: Vector, b: Vector): number {
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (const d of DIMENSIONS) {
    dot += a[d] * b[d];
    magA += a[d] * a[d];
    magB += b[d] * b[d];
  }
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function keywordMatches(query: string): Doc[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];
  const words = lower.split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !STOPWORDS.has(w));
  if (words.length === 0) return [];
  return DOCS.filter((doc) => {
    const text = `${doc.title} ${doc.body}`.toLowerCase();
    return words.some((w) => new RegExp(`\\b${w}\\b`).test(text));
  });
}

function semanticMatch(query: string): { doc: Doc; score: number } | null {
  const qv = buildQueryVector(query);
  let best: { doc: Doc; score: number } | null = null;
  for (const doc of DOCS) {
    const score = cosineSimilarity(qv, doc.vector);
    if (!best || score > best.score) best = { doc, score };
  }
  if (!best || best.score < 0.2) return null;
  return best;
}

export function QueryConsole() {
  const [query, setQuery] = useState(EXAMPLES[0]);

  const keyword = useMemo(() => keywordMatches(query), [query]);
  const semantic = useMemo(() => semanticMatch(query), [query]);

  return (
    <div className="rounded-sm border border-line bg-terminal text-ink shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden="true" />
        <span className="ml-2 min-w-0 flex-1 truncate font-mono text-xs text-white/50">
          search demo — runs in your browser, no API calls
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <label htmlFor="console-query" className="font-mono text-sm text-white/60">
          pedaldown=# ask
        </label>
        <div className="mt-1 flex items-center gap-2 border-b border-white/15 pb-2">
          <input
            id="console-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-white/55"
            placeholder="type a question in plain language…"
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setQuery(ex)}
              className={`rounded-sm border px-2.5 py-1 font-mono text-xs transition-colors ${
                query === ex
                  ? "border-amber text-amber"
                  : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {ex}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" aria-live="polite">
          <div className="rounded-sm border border-white/10 p-4">
            <p className="font-mono text-xs uppercase tracking-wide text-white/50">
              Keyword match
            </p>
            <p className="mt-1 font-mono text-[11px] text-white/55">
              literal text search against document contents
            </p>
            <div className="mt-3">
              {keyword.length === 0 ? (
                <p className="font-mono text-sm text-white/70">
                  <span aria-hidden="true">✗</span> no rows returned
                </p>
              ) : (
                <ul className="space-y-1">
                  {keyword.map((doc) => (
                    <li key={doc.id} className="font-mono text-sm text-white/70">
                      <span aria-hidden="true">✓</span> {doc.path}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="rounded-sm border border-amber/40 bg-amber/5 p-4">
            <p className="font-mono text-xs uppercase tracking-wide text-amber">
              Semantic match
            </p>
            <p className="mt-1 font-mono text-[11px] text-white/55">
              cosine similarity over document embeddings
            </p>
            <div className="mt-3">
              {semantic ? (
                <p className="font-mono text-sm text-ink">
                  <span aria-hidden="true">✓</span> {semantic.doc.path}
                  <span className="ml-2 text-amber">similarity {semantic.score.toFixed(2)}</span>
                </p>
              ) : (
                <p className="font-mono text-sm text-white/70">
                  <span aria-hidden="true">✗</span> no strong match
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="mt-4 font-mono text-[11px] leading-relaxed text-white/55">
          Fixed demo corpus of six support docs, computed client-side. Same idea as a pgvector
          similarity query running inside Postgres — no separate vector database, no network call.
        </p>
      </div>
    </div>
  );
}
