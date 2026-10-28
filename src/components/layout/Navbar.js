"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data/profile";

const cell =
  "flex h-full w-12 shrink-0 items-center justify-center border-l border-[#2A2A2E] text-[#A1A1AA] transition-colors hover:text-[#F2F1EE] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2A53E7]";

function Logo() {
  return (
    <svg
      width="40"
      height="28"
      viewBox="0 0 45 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[27px] w-[40px]"
      aria-hidden="true"
    >
      <path
        d="M42.4999 1.49837e-09C42.4999 6.27422 30.1343 31.4307 23.7938 13.5469C17.4533 -4.33682 2.3434 26.463 2.50112 30"
        stroke="#F2F1EE"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TapeSticker() {
  return (
    <div className="relative inline-flex items-center justify-center -rotate-1 select-none transition-transform group-hover:scale-105 group-active:scale-95 duration-150">
      <svg
        className="h-[21.5px] w-[100px] shrink-0"
        viewBox="0 0 100.187 21.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.0935 0.75H99.0935L97.1632 5.75L99.0935 10.75L97.1632 15.75L99.0935 20.75H1.0935L3.0238 15.75L1.0935 10.75L3.0238 5.75L1.0935 0.75Z"
          fill="#F2F1EE"
          stroke="#F2F1EE"
          strokeWidth="1.5"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[12px] font-bold tracking-[0.16em] text-[#101014]">
        NIVED
      </span>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-[20px] w-[20px]"
    >
      <path d="M12.0952 0C14.1052 0.00347398 14.523 0.0192497 15.5345 0.0653987C16.7053 0.1188 17.5049 0.304768 18.2046 0.576711C18.928 0.857779 19.5414 1.23391 20.153 1.84543C20.7645 2.45699 21.1406 3.07044 21.4217 3.79378C21.6936 4.49346 21.8796 5.29309 21.933 6.46392C21.9792 7.47535 21.9949 7.89325 21.9984 9.90322V12.0952C21.9949 14.1052 21.9792 14.523 21.933 15.5345C21.8796 16.7053 21.6936 17.5049 21.4217 18.2046C21.1406 18.928 20.7645 19.5414 20.153 20.153C19.5414 20.7645 18.928 21.1406 18.2046 21.4217C17.5049 21.6936 16.7053 21.8796 15.5345 21.933C14.523 21.9792 14.1052 21.9949 12.0952 21.9984H9.90322C7.89325 21.9949 7.47535 21.9792 6.46392 21.933C5.29309 21.8796 4.49346 21.6936 3.79378 21.4217C3.07044 21.1406 2.45699 20.7645 1.84543 20.153C1.23391 19.5414 0.857779 18.928 0.576711 18.2046C0.304768 17.5049 0.1188 16.7053 0.0653987 15.5345C0.0192497 14.523 0.00347398 14.1052 0 12.0952V9.90322C0.00347398 7.89325 0.0192497 7.47535 0.0653987 6.46392C0.1188 5.29309 0.304768 4.49346 0.576711 3.79378C0.857779 3.07044 1.23391 2.45699 1.84543 1.84543C2.45699 1.23391 3.07044 0.857779 3.79378 0.576711C4.49346 0.304768 5.29309 0.1188 6.46392 0.0653987C7.47535 0.0192497 7.89325 0.00347398 9.90322 0H12.0952ZM11.5711 1.98135H10.4274C8.01023 1.98293 7.63417 1.99605 6.55426 2.04532C5.48177 2.09423 4.89933 2.27343 4.51172 2.42407C3.99827 2.62362 3.63183 2.86198 3.24693 3.24693C2.86198 3.63183 2.62362 3.99827 2.42407 4.51172C2.27343 4.89933 2.09423 5.48177 2.04532 6.55426C1.99605 7.63417 1.98293 8.01023 1.98135 10.4274V11.5711C1.98293 13.9882 1.99605 14.3642 2.04532 15.4441C2.09423 16.5166 2.27343 17.0991 2.42407 17.4867C2.62362 18.0001 2.86203 18.3666 3.24693 18.7515C3.63183 19.1364 3.99827 19.3748 4.51172 19.5743C4.89933 19.725 5.48177 19.9042 6.55426 19.9531C7.55406 19.9987 7.95046 20.0133 9.92264 20.0165H12.0758C14.0479 20.0133 14.4444 19.9987 15.4441 19.9531C16.5166 19.9042 17.0991 19.725 17.4867 19.5743C18.0001 19.3748 18.3666 19.1364 18.7515 18.7515C19.1364 18.3666 19.3748 18.0001 19.5743 17.4867C19.725 17.0991 19.9042 16.5166 19.9531 15.4441C19.9987 14.4442 20.0133 14.0477 20.0165 12.0757V9.92271C20.0133 7.95066 19.9987 7.55418 19.9531 6.55426C19.9042 5.48177 19.725 4.89933 19.5743 4.51172C19.3748 3.99827 19.1364 3.63183 18.7515 3.24693C18.3666 2.86198 18.0001 2.62362 17.4867 2.42407C17.0991 2.27343 16.5166 2.09423 15.4441 2.04532C14.3642 1.99605 13.9882 1.98293 11.5711 1.98135ZM10.9958 5.35581C14.1144 5.35581 16.6426 7.88398 16.6426 11.0027C16.6426 14.1214 14.1144 16.6495 10.9958 16.6495C7.87703 16.6495 5.34887 14.1214 5.34887 11.0027C5.34887 7.88398 7.87703 5.35581 10.9958 5.35581ZM10.9958 7.33716C8.97132 7.33716 7.33022 8.97826 7.33022 11.0027C7.33022 13.0271 8.97132 14.6682 10.9958 14.6682C13.0201 14.6682 14.6612 13.0271 14.6612 11.0027C14.6612 8.97826 13.0201 7.33716 10.9958 7.33716ZM16.8657 3.8131C17.5945 3.8131 18.1853 4.40392 18.1853 5.13271C18.1853 5.8615 17.5945 6.45227 16.8657 6.45227C16.1369 6.45227 15.5461 5.8615 15.5461 5.13271C15.5461 4.40392 16.1369 3.8131 16.8657 3.8131Z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-[12px] w-[16px]"
    >
      <path d="M14.0454 1.011C13.008 0.5349 11.9131 0.1953 10.7883 0.0009C10.778 -0.0011 10.7674 0.0002 10.7579 0.0047C10.7485 0.0091 10.7407 0.0164 10.7356 0.0256C10.5956 0.2756 10.4396 0.6016 10.3302 0.859C9.1177 0.6748 7.8843 0.6748 6.6717 0.859C6.5501 0.5738 6.4127 0.2956 6.2604 0.0256C6.2551 0.0166 6.2473 0.0095 6.2379 0.0051C6.2284 0.0007 6.2179 -0.0008 6.2077 0.0009C5.0828 0.1949 3.9879 0.5345 2.9506 1.011C2.9418 1.0147 2.9344 1.021 2.9292 1.029C0.8543 4.1286 0.2856 7.1516 0.5649 10.1365C0.5656 10.144 0.5678 10.1511 0.5713 10.1577C0.5749 10.1642 0.5797 10.17 0.5856 10.1746C1.7935 11.0694 3.1447 11.7526 4.5815 12.1947C4.5916 12.1977 4.6024 12.1975 4.6124 12.1941C4.6224 12.1908 4.6311 12.1845 4.6375 12.1761C4.9455 11.756 5.2202 11.3127 5.4549 10.8466C5.4582 10.8403 5.4601 10.8333 5.4605 10.8261C5.4608 10.819 5.4597 10.8118 5.4571 10.8051C5.4545 10.7985 5.4506 10.7924 5.4455 10.7874C5.4404 10.7823 5.4343 10.7784 5.4276 10.7759C4.9965 10.611 4.5791 10.4121 4.1794 10.1812C4.1721 10.177 4.1659 10.171 4.1615 10.1638C4.157 10.1566 4.1544 10.1484 4.1539 10.14C4.1533 10.1315 4.1549 10.1231 4.1584 10.1154C4.162 10.1077 4.1673 10.101 4.1741 10.0959C4.2582 10.0329 4.3409 9.968 4.4221 9.9012C4.4292 9.8954 4.4378 9.8918 4.4468 9.8906C4.4559 9.8894 4.4651 9.8908 4.4735 9.8945C7.0925 11.09 9.9275 11.09 12.5159 9.8945C12.5243 9.8906 12.5336 9.8892 12.5428 9.8904C12.552 9.8916 12.5607 9.8953 12.5679 9.9012C12.6479 9.9665 12.7319 10.0332 12.8166 10.0959C12.8232 10.1009 12.8286 10.1075 12.8321 10.1151C12.8357 10.1226 12.8373 10.1309 12.8369 10.1393C12.8365 10.1476 12.8341 10.1557 12.8299 10.1629C12.8256 10.1701 12.8197 10.1762 12.8126 10.1806C12.4138 10.4136 11.996 10.6126 11.5637 10.7753C11.557 10.7779 11.5509 10.7818 11.5458 10.7869C11.5407 10.792 11.5367 10.7981 11.5342 10.8049C11.5316 10.8116 11.5304 10.8188 11.5308 10.826C11.5312 10.8332 11.5331 10.8402 11.5364 10.8466C11.7764 11.312 12.0511 11.7547 12.3532 12.1754C12.3594 12.184 12.3681 12.1904 12.3782 12.1937C12.3882 12.1971 12.3991 12.1972 12.4092 12.1941C13.8484 11.7533 15.2017 11.0701 16.411 10.1739C16.4169 10.1697 16.4219 10.1644 16.4255 10.1582C16.4292 10.152 16.4316 10.145 16.4324 10.1379C16.7658 6.6862 15.8736 3.6879 14.0661 1.0303C14.0618 1.0214 14.0545 1.0149 14.0454 1.011ZM5.8463 8.3184C5.0575 8.3184 4.4081 7.595 4.4081 6.7056C4.4081 5.8168 5.0455 5.0927 5.8463 5.0927C6.6531 5.0927 7.2972 5.8235 7.2845 6.7062C7.2845 7.595 6.6471 8.3184 5.8463 8.3184ZM11.1637 8.3184C10.3749 8.3184 9.7255 7.595 9.7255 6.7056C9.7255 5.8168 10.3622 5.0927 11.1637 5.0927C11.9705 5.0927 12.6145 5.8235 12.6019 6.7062C12.6019 7.595 11.9711 8.3184 11.1637 8.3184Z" />
    </svg>
  );
}

function ThemeIcon({ dark }) {
  return dark ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3334"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M14.0001 8.32571C13.9375 9.48325 13.5409 10.5979 12.858 11.5349C12.175 12.472 11.2352 13.1913 10.1519 13.6059C9.0687 14.0205 7.88848 14.1126 6.75394 13.8712C5.61941 13.6298 4.57914 13.0652 3.75887 12.2455C2.93861 11.4259 2.37348 10.3863 2.13179 9.25253C1.89009 8.11876 1.9822 6.93929 2.39695 5.85671C2.81171 4.77412 3.53137 3.83477 4.46894 3.15221C5.4065 2.46965 6.52183 2.07309 7.68011 2.01048C7.95031 1.99582 8.09174 2.31718 7.9483 2.54587C7.46855 3.31297 7.26312 4.21993 7.36554 5.11873C7.46797 6.01753 7.8722 6.8551 8.51227 7.49476C9.15233 8.13442 9.99045 8.53839 10.8898 8.64075C11.7892 8.7431 12.6967 8.53781 13.4643 8.05836C13.6938 7.91501 14.0148 8.05569 14.0001 8.32571Z" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial preference from localStorage or HTML root class
    const stored = localStorage.getItem("color-scheme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-scheme", "light");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-12 border-b border-[#2A2A2E] bg-[#101014]/95 backdrop-blur-md">
      <nav
        className="relative flex h-full w-full items-stretch justify-between"
        aria-label="Main navigation"
      >
        {/* Left Side: Logo + Nav Links + Divider + Tape Sticker */}
        <div className="flex h-full items-center">
          {/* Logo container (x: 0 -> 68.5px in Figma) */}
          <Link
            href="/#top"
            className="flex h-full w-[68.5px] shrink-0 items-center justify-center border-r border-[#2A2A2E] transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2A53E7]"
            aria-label={`${profile.name} - Home`}
          >
            <Logo />
          </Link>

          {/* Desktop Nav Links (gap 28px, 11px font-mono) */}
          <ul className="hidden h-full items-center gap-[28px] px-5 xl:flex shrink-0">
            {profile.navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#top" && pathname === "/") ||
                (link.href === "/exploration" && pathname === "/exploration") ||
                (link.href === "/pricing" && pathname === "/pricing");

              return (
                <li key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className={`font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:text-white ${
                      isActive
                        ? "text-white font-semibold underline underline-offset-8 decoration-[#2A53E7]"
                        : "text-[#A1A1AA] hover:text-[#F2F1EE]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Navigation divider (x=538px in Figma) */}
          <div
            className="hidden h-full w-px bg-[#2A2A2E] xl:block shrink-0"
            aria-hidden="true"
          />

          {/* Desktop Brand Tape Sticker: placed after the divider (x=579px in Figma) */}
          <div className="ml-10 hidden xl:flex items-center">
            <Link
              href="/#top"
              className="group inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A53E7] rounded"
              aria-label={`${profile.name} - Home`}
            >
              <TapeSticker />
            </Link>
          </div>
        </div>

        {/* Center Brand Tape Sticker for screens < xl (Mobile & Tablet) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:hidden">
          <Link
            href="/#top"
            className="pointer-events-auto group inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A53E7] rounded"
            aria-label={`${profile.name} - Home`}
          >
            <TapeSticker />
          </Link>
        </div>

        {/* Right Side: Socials, Theme Toggle, Contact Us & Mobile Hamburger */}
        <div className="flex h-full items-stretch">
          <a
            href={profile.community.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cell} hidden sm:flex`}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href={profile.community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cell} hidden sm:flex`}
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className={cell}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <ThemeIcon dark={isDark} />
          </button>

          {/* Contact Us button (Figma width: 123.5px, height: 48px, solid #F2F1EE) */}
          <Link
            href="/#contact"
            className="hidden h-full w-[124px] shrink-0 items-center justify-center border-l border-[#2A2A2E] bg-[#F2F1EE] font-mono text-[11px] font-bold uppercase tracking-wider text-[#101014] transition-all duration-200 hover:bg-white active:bg-zinc-200 active:scale-[0.99] md:flex cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2A53E7]"
          >
            CONTACT US
          </Link>

          {/* Mobile Menu Toggle (Hamburger / X) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`${cell} xl:hidden`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[#2A2A2E] bg-[#101014]/98 backdrop-blur-md xl:hidden shadow-2xl"
        >
          <ul className="flex flex-col">
            {profile.navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#top" && pathname === "/") ||
                (link.href === "/exploration" && pathname === "/exploration") ||
                (link.href === "/pricing" && pathname === "/pricing");

              return (
                <li key={link.href} className="border-b border-[#2A2A2E]">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex min-h-[48px] items-center px-6 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors hover:bg-white/5 ${
                      isActive
                        ? "text-white font-bold bg-white/[0.04]"
                        : "text-[#A1A1AA] hover:text-[#F2F1EE]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Social Links for screens < sm */}
            <li className="flex border-b border-[#2A2A2E] sm:hidden">
              <a
                href={profile.community.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex flex-1 min-h-[48px] items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] hover:text-[#F2F1EE] border-r border-[#2A2A2E]"
                aria-label="Instagram"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a
                href={profile.community.discord}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex flex-1 min-h-[48px] items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] hover:text-[#F2F1EE]"
                aria-label="Discord"
              >
                <DiscordIcon />
                <span>Discord</span>
              </a>
            </li>

            {/* Mobile Full-width Contact Us */}
            <li className="md:hidden">
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="flex min-h-[48px] items-center justify-center bg-[#F2F1EE] font-mono text-[11px] font-bold uppercase tracking-wider text-[#101014] transition-all duration-200 hover:bg-white active:bg-zinc-200 cursor-pointer"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
