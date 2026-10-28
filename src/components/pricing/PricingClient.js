"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Exact SVG vectors from Figma (with proper horizontal flip for the Nived N logo) ─── */
function StarterSquiggle() {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <g transform="scale(-1, 1) translate(-26, 0)">
        <path
          d="M1.046 0.0001C1.046 5.0194 8.385 25.1446 12.148 10.8376C15.91 -3.4695 24.878 21.1704 24.784 24"
          stroke="white"
          strokeWidth="2.09"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function DoodleArrow() {
  return (
    <svg
      width="41"
      height="31"
      viewBox="0 0 41.465 31.268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <path
        d="M38.103 6.10826C30.2582 20.677 17.9308 25.1597 3.36203 18.4357M12.3274 17.315L3.36203 18.4357L7.84473 26.2804"
        stroke="#7DA3FF"
        strokeWidth="1.45688"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQSquiggle() {
  return (
    <svg
      width="67"
      height="65"
      viewBox="0 0 67.0925 65.035"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 pointer-events-none select-none text-white"
      aria-hidden="true"
    >
      {/* Horizontally flipped to match Figma node 47:573 and Nived's flowing N logo */}
      <g transform="scale(-1, 1) translate(-67.0925, 0)">
        <path
          d="M1.04632 0C1.04632 13.5941 21.1403 68.0999 31.4437 29.3517C41.747 -9.39645 66.3006 57.3365 66.0443 65"
          stroke="white"
          strokeWidth="2.09264"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function PadlockIcon() {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#80858A]"
      aria-hidden="true"
    >
      <path
        d="M4 6H10C11.1046 6 12 6.89543 12 8V12C12 13.1046 11.1046 14 10 14H4C2.89543 14 2 13.1046 2 12V8C2 6.89543 2.89543 6 4 6Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M4 6V4C4 3.20435 4.31607 2.44129 4.87868 1.87868C5.44129 1.31607 6.20435 1 7 1C7.79565 1 8.55871 1.31607 9.12132 1.87868C9.68393 2.44129 10 3.20435 10 4V6"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

const COMPARISON_CATEGORIES = [
  {
    name: "Collaboration & Space",
    features: [
      {
        title: "Team members",
        starter: "Up to 3",
        grow: "Unlimited",
        bloom: "Unlimited",
        custom: "Flexible / Tailored",
      },
      {
        title: "Active projects",
        starter: "3 projects",
        grow: "Unlimited",
        bloom: "Unlimited",
        custom: "Unlimited",
      },
      {
        title: "Tasks, docs & shared boards",
        starter: true,
        grow: true,
        bloom: true,
        custom: true,
      },
      {
        title: "Timelines & custom workflows",
        starter: false,
        grow: true,
        bloom: true,
        custom: true,
      },
      {
        title: "Guests & external collaborators",
        starter: "Up to 2",
        grow: "Unlimited",
        bloom: "Unlimited",
        custom: "Unlimited",
      },
    ],
  },
  {
    name: "Storage & Ecosystem",
    features: [
      {
        title: "File storage capacity",
        starter: "1 GB",
        grow: "100 GB",
        bloom: "1 TB",
        custom: "Tailored (multi-TB)",
      },
      {
        title: "Integrate your favorite tools",
        starter: "Basic",
        grow: "All tools & APIs",
        bloom: "All tools & APIs",
        custom: "Custom integrations",
      },
      {
        title: "Custom templates & automations",
        starter: "Standard",
        grow: "Standard",
        bloom: "Advanced & team-wide",
        custom: "Tailored workflows",
      },
      {
        title: "Portfolios & team-wide insights",
        starter: false,
        grow: false,
        bloom: true,
        custom: true,
      },
    ],
  },
  {
    name: "Security, Governance & Support",
    features: [
      {
        title: "Support channel",
        starter: "Community support",
        grow: "Priority support",
        bloom: "Dedicated success partner",
        custom: "Dedicated partner & SLA",
      },
      {
        title: "Single sign-on (SSO)",
        starter: false,
        grow: false,
        bloom: true,
        custom: true,
      },
      {
        title: "Advanced roles & permissions",
        starter: false,
        grow: false,
        bloom: true,
        custom: true,
      },
      {
        title: "Tailored onboarding program",
        starter: false,
        grow: false,
        bloom: false,
        custom: true,
      },
    ],
  },
];

export function PricingClient() {
  const [isYearly, setIsYearly] = useState(true);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="w-full">
      {/* ─── Hero Section ─── */}
      <section
        aria-labelledby="pricing-heading"
        className="relative mx-auto max-w-[1120px] px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#7DA3FF]"
            aria-hidden="true"
          />
          <span className="font-['DM_Sans',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9CCCE]">
            ONE SMALL TEAM
          </span>
        </div>

        {/* Hero Headings */}
        <h1
          id="pricing-heading"
          className="font-bricolage text-4xl sm:text-5xl md:text-[58px] font-normal leading-[1.08] tracking-[-0.02em] text-[#F2F2EF]"
        >
          Good things start small.
          <span className="block font-['DM_Sans',sans-serif] text-[#A5ADAE] font-normal">
            Great things grow together.
          </span>
        </h1>

        {/* Monospace Subtitle */}
        <div className="mt-7 space-y-1 font-jetbrains text-[13px] sm:text-[14px] leading-relaxed text-[#A6A9AC]">
          <p>A little more clarity. A lot more possibility.</p>
          <p>Find the right space for your team to do its best work.</p>
          <p className="pt-0.5">Make It Known</p>
        </div>

        {/* Billing Switch Row with Save 20% callout (SHARP BOX EDGES) */}
        <div className="mt-9 flex items-center justify-center">
          <div className="relative inline-flex items-center">
            {/* Sharp Capsule Switch */}
            <div
              role="radiogroup"
              aria-label="Billing frequency"
              className="inline-flex items-center rounded-none border border-[#35383C] bg-[#161819] p-[3px]"
            >
              <button
                type="button"
                role="radio"
                aria-checked={!isYearly}
                onClick={() => setIsYearly(false)}
                className={`rounded-none px-4 py-1.5 font-['DM_Sans',sans-serif] text-xs transition-colors duration-150 cursor-pointer ${
                  !isYearly
                    ? "bg-[#E9ECE8] font-semibold text-[#111314] shadow-sm"
                    : "text-[#9D9FA6] hover:text-[#F2F2EF]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={isYearly}
                onClick={() => setIsYearly(true)}
                className={`rounded-none px-4 py-1.5 font-['DM_Sans',sans-serif] text-xs transition-colors duration-150 cursor-pointer ${
                  isYearly
                    ? "bg-[#E9ECE8] font-semibold text-[#111314] shadow-sm"
                    : "text-[#9D9FA6] hover:text-[#F2F2EF]"
                }`}
              >
                Yearly
              </button>
            </div>

            {/* Save 20% Callout + Curly Hand-drawn Arrow */}
            <div className="absolute left-[calc(100%+12px)] top-[-10px] flex items-center gap-1">
              <span className="font-['DM_Sans',sans-serif] text-[11px] font-normal text-[#7DA3FF] whitespace-nowrap">
                Save 20%
              </span>
              <div className="pt-2">
                <DoodleArrow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 Plans Grid (SHARP BOX EDGES FOR ALL PLANS & BUTTONS) ─── */}
      <section
        id="plans"
        aria-label="Pricing plans"
        className="mx-auto max-w-[1120px] px-6 sm:px-0 pt-7 pb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[26px] items-stretch">
          {/* ════════════ PLAN 1: STARTER (SHARP BOX) ════════════ */}
          <div className="flex flex-col justify-between rounded-none border border-[#373A3D] bg-[#191B1D]/96 p-6 transition-colors duration-200 hover:border-zinc-500/50">
            <div>
              {/* Header Icon & Category */}
              <div className="flex items-center gap-2.5 h-8">
                <StarterSquiggle />
                <span className="font-jetbrains text-[7px] font-bold uppercase tracking-wider text-[#B1B4B9]">
                  FOR THE FIRST SPARK
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3.5 font-bricolage text-[27px] font-normal leading-tight text-[#F2F2EF]">
                Starter
              </h2>

              {/* Description (fixed min-height for uniform alignment) */}
              <p className="mt-2 font-jetbrains text-xs leading-relaxed text-[#A4A7AE] min-h-[44px]">
                A home for your ideas.
                <br />
                And the people who make them happen.
              </p>

              {/* Price Block */}
              <div className="mt-5 flex items-baseline">
                <span className="font-['DM_Sans',sans-serif] text-[25px] font-normal text-[#F2F2EF]">
                  $
                </span>
                <span className="font-bricolage text-[56px] font-normal leading-none text-[#F2F2EF] ml-0.5">
                  0
                </span>
                <span className="ml-2 font-jetbrains text-[10px] text-[#A8ABB3]">
                  / member / month
                </span>
              </div>

              {/* Billing Detail */}
              <p className="mt-1.5 font-jetbrains text-[10px] text-[#92969F]">
                Free forever. No strings attached.
              </p>

              {/* Action Button (SHARP) */}
              <Link
                href="/#contact"
                className="group mt-5 flex h-[44px] w-full items-center justify-between rounded-none border border-[#494C50] bg-white/[0.02] px-4 font-bricolage text-xs font-bold text-[#F2F2EF] transition-all duration-150 hover:border-white/40 hover:bg-white/[0.05] active:scale-[0.99] cursor-pointer"
              >
                <span>Start for free</span>
                <span
                  className="font-['DM_Sans',sans-serif] text-[20px] leading-none transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              {/* Divider */}
              <div
                className="my-5 h-px w-full bg-white/[0.08]"
                aria-hidden="true"
              />

              {/* Feature List Header */}
              <h3 className="font-bricolage text-[11px] font-bold text-[#D6D8DD]">
                A little space to get going:
              </h3>

              {/* Features */}
              <ul className="mt-3.5 space-y-2.5 font-jetbrains text-[11px] text-[#B3B6BD]">
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Up to 3 team members</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>3 projects to make your own</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Tasks, docs &amp; shared boards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>1 GB of file storage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Community support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ════════════ PLAN 2: GROW (SHARP BOX & SHARP BADGE) ════════════ */}
          <div className="relative flex flex-col justify-between rounded-none border border-[#929FEA] bg-gradient-to-br from-[#262A3A] to-[#1B1E26] p-6 shadow-[0_0_30px_rgba(146,159,234,0.12)] transition-colors duration-200">
            {/* Top Attached Pill (SHARP BOX) */}
            <div className="absolute -top-[27px] left-[-1px] right-[-1px] flex h-[27px] items-center justify-center gap-1.5 rounded-none bg-[#A4AFFB] px-3 text-center">
              <span
                className="font-['DM_Sans',sans-serif] text-[13px] leading-none text-[#222637]"
                aria-hidden="true"
              >
                ✦
              </span>
              <span className="font-['DM_Sans',sans-serif] text-[8px] font-bold uppercase tracking-[0.14em] text-[#222637]">
                A LITTLE MORE ROOM. A LOT MORE MAGIC.
              </span>
            </div>

            <div>
              {/* Header Icon & Category */}
              <div className="flex items-center gap-2.5 h-8">
                <span
                  className="font-['DM_Sans',sans-serif] text-[34px] leading-none text-[#B2BCFF]"
                  aria-hidden="true"
                >
                  ✣
                </span>
                <span className="font-jetbrains text-[7px] font-bold uppercase tracking-wider text-[#B1B4B9]">
                  FOR FINDING YOUR FLOW
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3.5 font-bricolage text-[27px] font-normal leading-tight text-[#F2F2EF]">
                Grow
              </h2>

              {/* Description */}
              <p className="mt-2 font-jetbrains text-xs leading-relaxed text-[#A4A7AE] min-h-[44px]">
                Less busywork. More good work.
                <br />
                Bring your team’s next big idea to life.
              </p>

              {/* Price Block */}
              <div className="mt-5 flex items-baseline">
                <span className="font-['DM_Sans',sans-serif] text-[25px] font-normal text-[#F2F2EF]">
                  $
                </span>
                <span className="font-bricolage text-[56px] font-normal leading-none text-[#F2F2EF] ml-0.5">
                  {isYearly ? "12" : "15"}
                </span>
                <span className="ml-2 font-jetbrains text-[10px] text-[#A8ABB3]">
                  / member / month
                </span>
              </div>

              {/* Billing Detail */}
              <p className="mt-1.5 font-jetbrains text-[10px] text-[#92969F]">
                {isYearly ? "$144 per member, billed yearly" : "Billed monthly"}
              </p>

              {/* Action Button (SHARP) */}
              <Link
                href="/#contact"
                className="group mt-5 flex h-[44px] w-full items-center justify-between rounded-none border border-[#A4AFFB] bg-[#A4AFFB] px-4 font-bricolage text-xs font-bold text-[#161B32] transition-all duration-150 hover:bg-[#B2BCFF] hover:border-[#B2BCFF] active:scale-[0.99] cursor-pointer"
              >
                <span>Find your flow</span>
                <span
                  className="font-['DM_Sans',sans-serif] text-[20px] leading-none transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              {/* Divider */}
              <div
                className="my-5 h-px w-full bg-white/[0.08]"
                aria-hidden="true"
              />

              {/* Feature List Header */}
              <h3 className="font-bricolage text-[11px] font-bold text-[#D6D8DD]">
                Everything in Starter, plus:
              </h3>

              {/* Features */}
              <ul className="mt-3.5 space-y-2.5 font-jetbrains text-[11px] text-[#B3B6BD]">
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#A4AFFB]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Unlimited team members &amp; projects</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#A4AFFB]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Timelines &amp; custom workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#A4AFFB]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Unlimited guests, always welcome</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#A4AFFB]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>100 GB of file storage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#A4AFFB]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Connect your favorite tools</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#A4AFFB]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Priority support from real people</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ════════════ PLAN 3: BLOOM (SHARP BOX) ════════════ */}
          <div className="flex flex-col justify-between rounded-none border border-[#373A3D] bg-[#191B1D]/96 p-6 transition-colors duration-200 hover:border-zinc-500/50">
            <div>
              {/* Header Icon & Category */}
              <div className="flex items-center gap-2.5 h-8">
                <span
                  className="font-['DM_Sans',sans-serif] text-[33px] leading-none text-[#E2D29A]"
                  aria-hidden="true"
                >
                  ✺
                </span>
                <span className="font-jetbrains text-[7px] font-bold uppercase tracking-wider text-[#B1B4B9]">
                  FOR THE BIG PICTURE
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3.5 font-bricolage text-[27px] font-normal leading-tight text-[#F2F2EF]">
                Bloom
              </h2>

              {/* Description */}
              <p className="mt-2 font-jetbrains text-xs leading-relaxed text-[#A4A7AE] min-h-[44px]">
                Big ambitions, meet a bigger canvas.
                <br />
                Keep everyone moving in the same direction.
              </p>

              {/* Price Block */}
              <div className="mt-5 flex items-baseline">
                <span className="font-['DM_Sans',sans-serif] text-[25px] font-normal text-[#F2F2EF]">
                  $
                </span>
                <span className="font-bricolage text-[56px] font-normal leading-none text-[#F2F2EF] ml-0.5">
                  {isYearly ? "24" : "30"}
                </span>
                <span className="ml-2 font-jetbrains text-[10px] text-[#A8ABB3]">
                  / member / month
                </span>
              </div>

              {/* Billing Detail */}
              <p className="mt-1.5 font-jetbrains text-[10px] text-[#92969F]">
                {isYearly ? "$288 per member, billed yearly" : "Billed monthly"}
              </p>

              {/* Action Button (SHARP) */}
              <Link
                href="/#contact"
                className="group mt-5 flex h-[44px] w-full items-center justify-between rounded-none border border-[#494C50] bg-white/[0.02] px-4 font-bricolage text-xs font-bold text-[#F2F2EF] transition-all duration-150 hover:border-white/40 hover:bg-white/[0.05] active:scale-[0.99] cursor-pointer"
              >
                <span>Make room for more</span>
                <span
                  className="font-['DM_Sans',sans-serif] text-[20px] leading-none transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              {/* Divider */}
              <div
                className="my-5 h-px w-full bg-white/[0.08]"
                aria-hidden="true"
              />

              {/* Feature List Header */}
              <h3 className="font-bricolage text-[11px] font-bold text-[#D6D8DD]">
                Everything in Grow, plus:
              </h3>

              {/* Features */}
              <ul className="mt-3.5 space-y-2.5 font-jetbrains text-[11px] text-[#B3B6BD]">
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Portfolios &amp; team-wide insights</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Advanced roles &amp; permissions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Custom templates &amp; automations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>1 TB of file storage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Single sign-on (SSO)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>A dedicated success partner</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ════════════ PLAN 4: CUSTOM (SHARP BOX) ════════════ */}
          <div className="flex flex-col justify-between rounded-none border border-[#373A3D] bg-gradient-to-br from-[#232630] to-[#191B1D] p-6 transition-colors duration-200 hover:border-zinc-500/50">
            <div>
              {/* Header Icon & Category */}
              <div className="flex items-center gap-2.5 h-8">
                <span
                  className="font-['DM_Sans',sans-serif] text-[34px] leading-none text-[#C6C3EE]"
                  aria-hidden="true"
                >
                  ✧
                </span>
                <span className="font-jetbrains text-[7px] font-bold uppercase tracking-wider text-[#B1B4B9]">
                  FOR YOUR OWN KIND OF GROWTH
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-3.5 font-bricolage text-[27px] font-normal leading-tight text-[#F2F2EF]">
                Custom
              </h2>

              {/* Description */}
              <p className="mt-2 font-jetbrains text-xs leading-relaxed text-[#A4A7AE] min-h-[44px]">
                Your team. Your way.
                <br />
                A plan for your unique needs.
              </p>

              {/* Price Block */}
              <div className="mt-5 flex items-baseline">
                <span className="font-bricolage text-[36px] font-normal leading-none text-[#F2F2EF]">
                  Tailored
                </span>
                <span className="ml-2 font-jetbrains text-[10px] text-[#A8ABB3]">
                  pricing
                </span>
              </div>

              {/* Billing Detail */}
              <p className="mt-1.5 font-jetbrains text-[10px] text-[#92969F]">
                Quoted around your team’s needs.
              </p>

              {/* Action Button (SHARP) */}
              <Link
                href="/#contact"
                className="group mt-5 flex h-[44px] w-full items-center justify-between rounded-none border border-[#7883B1] bg-white/[0.02] px-4 font-bricolage text-xs font-bold text-[#F2F2EF] transition-all duration-150 hover:border-[#A4AFFB] hover:bg-white/[0.05] active:scale-[0.99] cursor-pointer"
              >
                <span>Let’s talk</span>
                <span
                  className="font-['DM_Sans',sans-serif] text-[20px] leading-none transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              {/* Divider */}
              <div
                className="my-5 h-px w-full bg-white/[0.08]"
                aria-hidden="true"
              />

              {/* Feature List Header */}
              <h3 className="font-bricolage text-[11px] font-bold text-[#D6D8DD]">
                A plan built around you:
              </h3>

              {/* Features */}
              <ul className="mt-3.5 space-y-2.5 font-jetbrains text-[11px] text-[#B3B6BD]">
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Flexible team sizes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Tailored onboarding</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    className="font-['DM_Sans',sans-serif] text-xs font-normal text-[#B5E8E3]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>Support that fits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ─── Footnotes Below Plans Grid ─── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-jetbrains text-[10px] text-[#80858A]">
          <div className="flex items-center gap-2">
            <PadlockIcon />
            <span>No credit card needed to start.</span>
          </div>
          <div>
            <span>Good work, at your own pace. Change plans anytime.</span>
          </div>
        </div>
      </section>

      {/* ─── Benefit Pillars: "A LITTLE GOODNESS IN EVERY PLAN" ─── */}
      <section
        aria-label="Platform inclusions"
        className="mx-auto max-w-[1120px] px-6 sm:px-0 my-14 sm:my-18"
      >
        <div className="border-y border-white/[0.08] py-9 sm:py-11">
          <p className="font-jetbrains text-[9px] font-bold uppercase tracking-[0.25em] text-[#969BA1] text-center mb-8">
            A LITTLE GOODNESS IN EVERY PLAN
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center md:text-left">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <span
                className="font-['DM_Sans',sans-serif] text-[24px] text-[#A7AFB9] shrink-0 leading-none"
                aria-hidden="true"
              >
                ▧
              </span>
              <div>
                <p className="font-bricolage text-[12px] font-normal text-[#F2F2EF]">
                  Your work, all together
                </p>
                <p className="mt-1 font-['DM_Sans',sans-serif] text-[10px] text-[#858A92]">
                  One calm home for every project.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <span
                className="font-['DM_Sans',sans-serif] text-[24px] text-[#A7AFB9] shrink-0 leading-none"
                aria-hidden="true"
              >
                ↗
              </span>
              <div>
                <p className="font-bricolage text-[12px] font-normal text-[#F2F2EF]">
                  Space to make it yours
                </p>
                <p className="mt-1 font-['DM_Sans',sans-serif] text-[10px] text-[#858A92]">
                  Flexible by design. Just like you.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5">
              <span
                className="font-['DM_Sans',sans-serif] text-[24px] text-[#A7AFB9] shrink-0 leading-none"
                aria-hidden="true"
              >
                ♡
              </span>
              <div>
                <p className="font-bricolage text-[12px] font-normal text-[#F2F2EF]">
                  People, before everything
                </p>
                <p className="mt-1 font-['DM_Sans',sans-serif] text-[10px] text-[#858A92]">
                  Thoughtful service for real teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── "THE FINER DETAILS" - Feature Comparison Toggle & Table ─── */}
      <section
        id="compare-features"
        aria-label="Feature comparison"
        className="mx-auto max-w-[1120px] px-6 sm:px-0 mb-16 sm:mb-20"
      >
        <div className="border-b border-white/[0.08] pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <p className="font-jetbrains text-[9px] font-bold uppercase tracking-[0.25em] text-[#969BA1]">
                THE FINER DETAILS
              </p>
              <h2 className="mt-2 font-bricolage text-[28px] font-normal text-[#F2F2EF] leading-tight">
                Find your perfect fit.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowComparison(!showComparison)}
              aria-expanded={showComparison}
              aria-controls="comparison-matrix"
              className="inline-flex items-center gap-2 font-jetbrains text-[11px] text-[#C3C7D4] transition-colors hover:text-white cursor-pointer py-1"
            >
              <span>{showComparison ? "Hide feature matrix" : "Compare all features"}</span>
              <span
                className={`font-['DM_Sans',sans-serif] text-[22px] leading-none text-[#A4AFFB] transition-transform duration-200 ${
                  showComparison ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>
          </div>

          {/* Expandable Comparison Matrix (SHARP BOX) */}
          {showComparison && (
            <div
              id="comparison-matrix"
              className="mt-8 overflow-x-auto rounded-none border border-white/[0.08] bg-[#141619] p-4 sm:p-6"
            >
              <table className="w-full min-w-[700px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] text-xs font-bricolage text-zinc-400">
                    <th scope="col" className="py-3 px-4 font-normal">Feature</th>
                    <th scope="col" className="py-3 px-4 font-normal">Starter</th>
                    <th scope="col" className="py-3 px-4 font-normal text-[#A4AFFB]">Grow</th>
                    <th scope="col" className="py-3 px-4 font-normal">Bloom</th>
                    <th scope="col" className="py-3 px-4 font-normal">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_CATEGORIES.map((cat) => (
                    <tr key={cat.name} className="contents">
                      <tr className="bg-white/[0.02]">
                        <th
                          colSpan={5}
                          className="py-2.5 px-4 font-jetbrains text-[10px] font-bold uppercase tracking-wider text-[#A4AFFB]"
                        >
                          {cat.name}
                        </th>
                      </tr>
                      {cat.features.map((feat) => (
                        <tr
                          key={feat.title}
                          className="border-b border-white/[0.05] font-jetbrains text-xs text-zinc-300 hover:bg-white/[0.01]"
                        >
                          <td className="py-3 px-4 font-normal">{feat.title}</td>
                          <td className="py-3 px-4 text-zinc-400">
                            {typeof feat.starter === "boolean" ? (
                              feat.starter ? "✓" : "—"
                            ) : (
                              feat.starter
                            )}
                          </td>
                          <td className="py-3 px-4 text-[#A4AFFB] font-medium">
                            {typeof feat.grow === "boolean" ? (
                              feat.grow ? "✓" : "—"
                            ) : (
                              feat.grow
                            )}
                          </td>
                          <td className="py-3 px-4 text-zinc-400">
                            {typeof feat.bloom === "boolean" ? (
                              feat.bloom ? "✓" : "—"
                            ) : (
                              feat.bloom
                            )}
                          </td>
                          <td className="py-3 px-4 text-zinc-400">
                            {typeof feat.custom === "boolean" ? (
                              feat.custom ? "✓" : "—"
                            ) : (
                              feat.custom
                            )}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ─── FAQ Section ("A FEW THINGS YOU MIGHT BE WONDERING") ─── */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-[1120px] px-6 sm:px-0 mb-20 sm:mb-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Nived N Logo (Fixed with proper orientation) */}
          <div className="lg:col-span-5">
            <p className="font-jetbrains text-[8px] font-bold uppercase tracking-[0.22em] text-[#969BA1]">
              A FEW THINGS YOU MIGHT BE WONDERING
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-bricolage text-3xl sm:text-[34px] font-normal leading-[1.12] text-[#F2F2EF]"
            >
              Good questions.
              <br />
              Straight answers.
            </h2>
            <div className="mt-8">
              <FAQSquiggle />
            </div>
          </div>

          {/* Right Column: Native Accessible Disclosures */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {/* FAQ 1 */}
            <details
              name="pricing-faq"
              className="group py-4 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-jetbrains text-xs font-normal text-[#F2F2EF] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7DA3FF] rounded-none">
                <span>What’s the difference between monthly and yearly?</span>
                <span
                  className="ml-4 font-['DM_Sans',sans-serif] text-[20px] text-[#9FA7BB] leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 pr-8 font-jetbrains text-xs leading-relaxed text-[#92969F]">
                Choosing yearly billing saves you 20% compared to paying month-to-month. With yearly billing, you lock in the best rate for 12 months with a single upfront invoice. Monthly billing gives you the flexibility to adapt and change plans whenever your team’s headcount or budget shifts.
              </div>
            </details>

            {/* FAQ 2 */}
            <details
              name="pricing-faq"
              className="group py-4 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-jetbrains text-xs font-normal text-[#F2F2EF] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7DA3FF] rounded-none">
                <span>Can I change my plan later?</span>
                <span
                  className="ml-4 font-['DM_Sans',sans-serif] text-[20px] text-[#9FA7BB] leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 pr-8 font-jetbrains text-xs leading-relaxed text-[#92969F]">
                Yes, absolutely. You can upgrade, downgrade, or adjust seats at any time from your team workspace settings. Upgrades take effect immediately with automatic prorated calculations. Downgrades take effect seamlessly at the end of your billing cycle.
              </div>
            </details>

            {/* FAQ 3 */}
            <details
              name="pricing-faq"
              className="group py-4 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-jetbrains text-xs font-normal text-[#F2F2EF] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7DA3FF] rounded-none">
                <span>What happens to my work if I downgrade?</span>
                <span
                  className="ml-4 font-['DM_Sans',sans-serif] text-[20px] text-[#9FA7BB] leading-none transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 pr-8 font-jetbrains text-xs leading-relaxed text-[#92969F]">
                All your existing files, boards, workflows, and documentation stay safe and accessible. You will never lose data. You can always view, share, and export your archives even if you move to a free tier. Creating new projects beyond the lower tier’s limits is simply paused until you re-activate.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner (SHARP BOX & SHARP BUTTON) ─── */}
      <section
        aria-label="Closing call to action"
        className="mx-auto max-w-[1120px] px-6 sm:px-0 mb-20 sm:mb-24"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-none border border-[#343A44] bg-[#1C2025] px-6 py-4 sm:px-8 sm:py-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span
              className="font-['DM_Sans',sans-serif] text-[31px] text-[#A4AFFB] leading-none"
              aria-hidden="true"
            >
              ✦
            </span>
            <h2 className="font-bricolage text-[21px] font-normal text-[#F2F2EF]">
              Your next great thing starts here.
            </h2>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex items-center justify-between gap-3 rounded-none border border-[#494C50] bg-white/[0.02] px-5 py-2.5 font-['DM_Sans',sans-serif] text-[11px] font-bold text-[#F2F2EF] transition-all duration-150 hover:border-white/40 hover:bg-white/[0.05] active:scale-[0.99] cursor-pointer"
          >
            <span>Make It Known</span>
            <span
              className="text-[20px] leading-none transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
