"use client";

import { useState, useRef, useCallback } from "react";
import { profile } from "@/lib/data/profile";
import "./Contact.css";

const TABS = [
  { id: "social", label: "SOCIAL", panelId: "nv-social-panel" },
  { id: "message", label: "SEND A MESSAGE", panelId: "nv-message-panel" },
  { id: "updates", label: "GET UPDATES", panelId: "nv-updates-panel" },
];

export function Contact() {
  const [activeTab, setActiveTab] = useState("social");
  const tabRefs = useRef([]);

  // Message Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("idle"); // idle | sending | success | error
  const [messageFeedback, setMessageFeedback] = useState("");

  // Updates Form State
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateFeedback, setUpdateFeedback] = useState("");

  // Social Links
  const instagramUrl =
    profile.community?.instagram || "https://instagram.com/nivedstudio";
  const twitterSocial = profile.socials?.find(
    (s) => s.name.includes("Twitter") || s.name.includes("X")
  );
  const twitterUrl = twitterSocial?.href || "https://x.com/nived_tech";
  const tiktokUrl = "https://www.tiktok.com/@nivedstudio";
  const youtubeUrl = "https://www.youtube.com/@nivedstudio";

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowDown") {
      nextIndex = (index + 1) % TABS.length;
    } else if (event.key === "ArrowUp") {
      nextIndex = (index - 1 + TABS.length) % TABS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = TABS.length - 1;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      tabRefs.current[nextIndex]?.focus();
      setActiveTab(TABS[nextIndex].id);
    }
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (messageStatus === "sending") return;

    setMessageStatus("sending");
    setMessageFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: "Project Inquiry from Nived Studio Website",
          message: message.trim(),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't send your message. Please try again."
        );
      }

      setMessageStatus("success");
      setMessageFeedback("Thanks for reaching out! Your message has been sent to our team.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setMessageStatus("error");
      setMessageFeedback(
        err instanceof TypeError
          ? "Connection interrupted. Please try again or email us directly."
          : err.message
      );
    }
  };

  const handleUpdatesSubmit = (e) => {
    e.preventDefault();
    if (!updateEmail.trim()) return;

    setUpdateFeedback(
      "Thank you for subscribing! We'll keep you updated with what's next."
    );
    setUpdateEmail("");
  };

  return (
    <section
      id="contact"
      aria-label="Nived contact section"
      className="nv-contact-section"
    >
      <div className="nv-container">
        <div id="nived-contact-preview">
          <div className="nv-shell">
            {/* Left Column: Branding, Title, Tab Nav, Strikethrough Logo */}
            <div className="nv-left">
              <div className="nv-blocks" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <h2 className="nv-title">
                GET IN
                <br />
                TOUCH
                <br />
                WITH
              </h2>

              <div
                className="nv-nav"
                role="tablist"
                aria-label="Get in touch"
                aria-orientation="vertical"
              >
                {TABS.map((tab, index) => {
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      ref={(el) => (tabRefs.current[index] = el)}
                      id={`nv-tab-${tab.id}`}
                      className="nv-tab"
                      type="button"
                      role="tab"
                      aria-controls={tab.panelId}
                      aria-selected={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => handleSelectTab(tab.id)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      <span>{tab.label}</span>
                      <span className="nv-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="nv-mark" aria-label="nived">
                nived
              </div>
              <div className="nv-bottom" aria-hidden="true" />
            </div>

            {/* Right Column: Dynamic Tab Panels */}
            <div className="nv-right">
              <p className="nv-eyebrow">
                <span className="nv-dot" aria-hidden="true" /> STAY CONNECTED
              </p>

              {/* Panel 1: Social */}
              <div
                id="nv-social-panel"
                role="tabpanel"
                aria-labelledby="nv-tab-social"
                hidden={activeTab !== "social"}
              >
                <h3 className="nv-heading">FIND US ONLINE.</h3>
                <p className="nv-copy">
                  A little more of us.
                  <br />
                  Follow along on your favourite platform.
                </p>

                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nv-social"
                >
                  <span>TikTok</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nv-social"
                >
                  <span>Instagram</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nv-social"
                >
                  <span>X</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nv-social"
                >
                  <span>YouTube</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Panel 2: Send a Message */}
              <div
                id="nv-message-panel"
                role="tabpanel"
                aria-labelledby="nv-tab-message"
                hidden={activeTab !== "message"}
              >
                <h3 className="nv-heading">LET’S TALK.</h3>
                <p className="nv-copy">
                  Have something in mind?
                  <br />
                  We’d love to hear it.
                </p>

                <form
                  className="nv-form"
                  onSubmit={handleMessageSubmit}
                  aria-busy={messageStatus === "sending"}
                >
                  <label className="nv-field" htmlFor="nv-name">
                    NAME
                    <input
                      id="nv-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      maxLength={100}
                      disabled={messageStatus === "sending"}
                    />
                  </label>

                  <label className="nv-field" htmlFor="nv-email">
                    EMAIL ADDRESS
                    <input
                      id="nv-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      maxLength={254}
                      disabled={messageStatus === "sending"}
                    />
                  </label>

                  <label className="nv-field" htmlFor="nv-message">
                    MESSAGE
                    <textarea
                      id="nv-message"
                      name="message"
                      placeholder="Tell us what’s on your mind…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      maxLength={5000}
                      disabled={messageStatus === "sending"}
                    />
                  </label>

                  <button
                    className="nv-submit"
                    type="submit"
                    disabled={messageStatus === "sending"}
                  >
                    <span>
                      {messageStatus === "sending"
                        ? "SENDING..."
                        : "SEND MESSAGE"}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </button>
                </form>

                {messageFeedback && (
                  <p
                    className={`nv-status ${
                      messageStatus === "error" ? "error" : "success"
                    }`}
                    role={messageStatus === "error" ? "alert" : "status"}
                    aria-live="polite"
                  >
                    {messageFeedback}
                  </p>
                )}
              </div>

              {/* Panel 3: Get Updates */}
              <div
                id="nv-updates-panel"
                role="tabpanel"
                aria-labelledby="nv-tab-updates"
                hidden={activeTab !== "updates"}
              >
                <h3 className="nv-heading">BE IN THE KNOW.</h3>
                <p className="nv-copy">
                  Leave your email and we’ll keep you updated with what’s next.
                </p>

                <form className="nv-form" onSubmit={handleUpdatesSubmit}>
                  <label className="nv-field" htmlFor="nv-update-email">
                    EMAIL ADDRESS
                    <input
                      id="nv-update-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={updateEmail}
                      onChange={(e) => setUpdateEmail(e.target.value)}
                      required
                    />
                  </label>

                  <button className="nv-submit" type="submit">
                    <span>KEEP ME UPDATED</span>
                    <span aria-hidden="true">↗</span>
                  </button>

                  <p className="nv-fine">
                    News, launches, and the occasional good thing.
                    <br />
                    Unsubscribe anytime.
                  </p>
                </form>

                {updateFeedback && (
                  <p className="nv-status success" aria-live="polite">
                    {updateFeedback}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
