"use client";

import { useEffect, useId, useState } from "react";
import "./About.css";
import { WhatWeDo } from "./WhatWeDo";
import { Explorations } from "./Explorations";

const styles = {"accordion": "company-accordion", "approachGrid": "company-approachGrid", "approachHeading": "company-approachHeading", "articleTop": "company-articleTop", "artwork": "company-artwork", "cta": "company-cta", "ctaBottom": "company-ctaBottom", "ctaTitle": "company-ctaTitle", "desktopBreak": "company-desktopBreak", "dot": "company-dot", "footer": "company-footer", "hint": "company-hint", "intro": "company-intro", "introBottom": "company-introBottom", "label": "company-label", "layout": "company-layout", "main": "company-main", "masthead": "company-masthead", "number": "company-number", "overview": "company-overview", "processHeading": "company-processHeading", "processRow": "company-processRow", "rail": "company-rail", "railDash": "company-railDash", "railInner": "company-railInner", "railLink": "company-railLink", "section": "company-section", "selected": "company-selected", "statement": "company-statement", "story": "company-story", "storyCopy": "company-storyCopy", "toggle": "company-toggle"};

const NAV = [
  { id: "about-intro", label: "About us" },
  { id: "about-process", label: "What we do" },
  { id: "about-approach", label: "Explorations" },
];
const PROCESS = [
  ["Design", "How it looks", "Give the idea a clear form. We explore visual direction, map the experience and design the details people see and use — from a brand identity to a website interface. The aim is a coherent system that feels clear, useful and recognisably yours."],
  ["Create", "How it takes shape", "Turn a direction into something tangible. We create visual assets, content and prototypes that help a story take shape. Each piece has a purpose: explain the idea, invite someone in, or make the experience easier to understand."],
  ["Develop", "How it gets built", "Build websites, products and systems that people can use. We connect the interface to the logic behind it, consider different screen sizes, and work through testing, launch and handover. The result should be useful today and straightforward to improve tomorrow."],
  ["Research", "How it gets better", "Ask questions before assuming the answer. We explore the context, talk through real needs and test ideas early. Research stays close to the work, helping us choose what to build, understand what is working and decide what to improve next."],
];

function Label({ children, right }) {
  return <div className={styles.label}><span>{children}</span>{right && <span>{right}</span>}</div>;
}

function ProcessAccordion() {
  const [open, setOpen] = useState(0);
  const id = useId();
  return <div className={styles.accordion}>{PROCESS.map(([title, hint, body], index) => (
    <div key={title} className={styles.processRow}>
      <button type="button" id={`${id}-button-${index}`} aria-expanded={open === index} aria-controls={`${id}-panel-${index}`} onClick={() => setOpen(open === index ? -1 : index)}>
        <span className={styles.number}>0{index + 1}</span><span className={open === index ? styles.selected : ""}>{title}</span><span className={styles.hint}>{hint}</span><span className={`${styles.toggle} ${open === index ? styles.selected : ""}`} aria-hidden="true">{open === index ? "×" : "+"}</span>
      </button>
      <div id={`${id}-panel-${index}`} role="region" aria-labelledby={`${id}-button-${index}`} hidden={open !== index}><p>{body}</p></div>
    </div>
  ))}</div>;
}

export function About() {
  const [active, setActive] = useState("about-intro");
  useEffect(() => {
    const updateActive = () => {
      let current = NAV[0].id;
      for (const { id } of NAV) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true, capture: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive, true);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return <section id="about" data-overview-section={active} aria-labelledby="about-heading" className={styles.overview}>
    <header className={styles.masthead}><a href="#about">Nived <span>{"//"}</span> Studio</a><span>One small team. Many possibilities.</span><a href="#about-approach">Our way of thinking <b>↘</b></a></header>
    <div className={styles.layout}>
      <aside className={styles.rail}><div className={styles.railInner}>
        <Label>A little about us</Label>
        <nav aria-label="Company overview">{NAV.map(({ id, label }, index) => <a key={id} href={`#${id}`} onClick={() => setActive(id)} aria-current={active === id ? "location" : undefined}><span>0{index + 1}</span>{label}<b aria-hidden="true">{active === id ? "↗" : ""}</b></a>)}</nav>
        <p>Curiosity first.<br />Intention always.</p><div className={styles.railDash} /><a className={styles.railLink} href="#contact">Make it known <span>↘</span></a>
      </div></aside>
      <div className={styles.main}>
        <div id="about-intro" className={styles.intro}>
          <Label right="Nived / Company overview"><i className={styles.dot} /> Independent by nature</Label>
          <h2 id="about-heading">Ideas made real.<br /><span>Then made known.</span></h2>
          <div className={styles.introBottom}><p>We design, create, <strong>develop</strong><br />and <strong>research.</strong></p><a href="#about-story">Meet the team <span aria-hidden="true">↓</span></a></div>
          <figure className={styles.artwork}><div role="img" aria-label="Blue mosaic tiles with the white Nived mark" /><figcaption><span>Different pieces. One shared direction.</span><span>Fig. 01 — Nived</span></figcaption></figure>
          <div className={styles.statement}><Label><b>+</b> The short version</Label><p>We turn ideas into things<br className={styles.desktopBreak} /> people can use, <span>then make<br className={styles.desktopBreak} /> sure people know about them.</span></p></div>
          <div id="about-story" className={styles.story}><div><Label>Our story / 01</Label><h3>Small team.<br />Shared drive.</h3><em>One small team.</em></div><div className={styles.storyCopy}><p>We deliver creations to an audience, to be known. We take an idea from how it looks, to how it gets built, to how it ships, and then learn from what people do with it.</p><p>Nived is a small team of AI students. The name is my own, spelled backwards, because this started as one person’s idea before it became a team. Our first products were built by two friends who share the same drive, and we’re still growing.</p><p>Building something is only half the job. The other half is making sure the right people find it, which is why <span>“make it known”</span> is more than a slogan for us.</p></div></div>
        </div>
        <WhatWeDo><ProcessAccordion /></WhatWeDo>
        <Explorations />
        <div className={styles.cta}><Label>From an idea to an audience.</Label><a href="#contact" className={styles.ctaTitle}>Make it <em>known.</em><svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M40 4v72M4 40h72M14 14l52 52M66 14 14 66" /></svg></a><div className={styles.ctaBottom}><span>Design. Create. Develop. Research.</span><a href="#about">Back to top <span>↑</span></a></div></div>
        <footer className={styles.footer}><span>{"Nived // Studio"}</span><span>One small team.</span></footer>
      </div>
    </div>
  </section>;
}
