"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./WhatWeDo.css";

const SERVICES = [
  { title: "Web design to hosting", body: "A home for your brand, built from the first sketch to the live website. We connect thoughtful design with the practical details that make a site useful.", details: ["Website strategy and page structure", "Responsive design and development", "Hosting setup and launch support"], tags: ["Design", "Build", "Host"] },
  { title: "Consulting and agency work", body: "An extra pair of hands and a clear technical perspective. We help teams shape an idea, make decisions and move a project towards delivery.", details: ["Discovery and technical direction", "Design and development collaboration", "Project planning and ongoing support"], tags: ["Strategy", "Project support"] },
  { title: "Autonomous systems for business", body: "Custom systems for the work that repeats. We look at how your business runs and build useful automations so your team can focus on what matters.", details: ["Workflow mapping and automation", "Connected tools and custom integrations", "Human oversight and practical handover"], tags: ["Automation", "Custom systems"] },
];
const CARDS = [
  { name: "White", src: "/card/White.svg", hex: "#fcfcff" },
  { name: "Ocean Blue", src: "/card/Oceon%20Blue.svg", hex: "#3368a0" },
  { name: "Ocean Green", src: "/card/Oceon%20Green.svg", hex: "#287a74" },
  { name: "Ocean Pink", src: "/card/Oceon%20Pink.svg", hex: "#ffc4c4" },
  { name: "Ocean Red", src: "/card/Oceon%20Red.svg", hex: "#ff4d4d" },
  { name: "Yellow", src: "/card/yellow.svg", hex: "#ffedb9" },
  { name: "Black", src: "/card/Black.svg", hex: "#0c0d10" },
];

function Mark({ className = "" }) {
  return <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true"><path d="M16 141C30 91 53 14 76 59S99 166 146 17" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /></svg>;
}

export function WhatWeDo({ children }) {
  const [colorIndex, setColorIndex] = useState(0);
  const [transition, setTransition] = useState(null);

  const handleNext = () => {
    if (transition) return;
    const next = (colorIndex + 1) % CARDS.length;
    setTransition({ dir: "next", from: colorIndex, to: next });
    setColorIndex(next);
  };

  const handlePrev = () => {
    if (transition) return;
    const prev = (colorIndex - 1 + CARDS.length) % CARDS.length;
    setTransition({ dir: "prev", from: colorIndex, to: prev });
    setColorIndex(prev);
  };

  const handleSelectColor = (index) => {
    if (transition || index === colorIndex) return;
    const dir = index > colorIndex ? "next" : "prev";
    setTransition({ dir, from: colorIndex, to: index });
    setColorIndex(index);
  };

  useEffect(() => {
    if (!transition) return;
    const timer = setTimeout(() => {
      setTransition(null);
    }, 400);
    return () => clearTimeout(timer);
  }, [transition]);

  const activeCard = CARDS[colorIndex];
  const nextCard = CARDS[(colorIndex + 1) % CARDS.length];

  return <div id="about-process" className="wwd">
    <div className="wwd-hero">
      <div><p className="wwd-eyebrow">Design / Development / Research</p><h3><span>We</span> Design,<br />Create, <strong>Develop</strong><br /><span>and</span> <strong>Research.</strong></h3><p className="wwd-intro-copy">Curious by nature. Intentional by design.<br />We make room for ideas to become something real.</p></div>
      <div className="wwd-poster" role="img" aria-label="Vintage orange mosaic planet with a blue orbit: A little further than the familiar." />
    </div>
    <div className="wwd-thinking">
      <div><h4>From first thought</h4>{children}</div>
      <div className="wwd-future"><h4>The future is a place<br />we can <strong>design for.</strong></h4><p>We pay attention to the edges: where emerging tools meet human needs, where a small signal hints at a wider change, and where a thoughtful experiment can open a new path.</p><p>Our process connects design, making, development and research. We start with the question, build something we can learn from, and keep refining it with intention.</p><div>One small team.<span>Stay curious about what’s next</span></div></div>
    </div>
    <div className="wwd-services"><p className="wwd-eyebrow">Built around what you need / 01</p><h3>Products we<br />deliver today.</h3><div className="wwd-service-grid">{SERVICES.map((service, index) => <article key={service.title}><span className="wwd-service-number">0{index + 1}</span><h4>{service.title}</h4><p>{service.body}</p><ul>{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="wwd-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><div className="wwd-project-link"><span>Make it Known</span><a href="#contact">Start a project <span aria-hidden="true">→</span></a></div></div>
    <div className="wwd-showcase">
      <div className="wwd-charm-grid" aria-label="Nived tags in seven colors">
        <button
          type="button"
          className="wwd-new"
          onClick={() => {
            handleNext();
          }}
          title="Click to explore next Nived Card"
          aria-label="New — Nived Card"
        >
          <i /> NEW — Nived Card.
        </button>
        <div className="wwd-blue-block block-one" />
        <div className="wwd-blue-block block-two" />
        <div className="wwd-blue-block block-mid-left" />
        <div className="wwd-blue-block block-btm-left" />
        <div className="wwd-blue-block block-btm-right-base" />
        <div className="wwd-blue-block block-btm-right-up" />
        {[
          { color: "black", label: "Black Tag", cardIdx: 6 },
          { color: "mint", label: "Mint Tag", cardIdx: 2 },
          { color: "blue", label: "Blue Tag", cardIdx: 1 },
          { color: "yellow", label: "Yellow Tag", cardIdx: 5 },
          { color: "white", label: "White Tag", cardIdx: 0 },
          { color: "red", label: "Red Tag", cardIdx: 4 },
          { color: "pink", label: "Pink Tag", cardIdx: 3 },
        ].map(({ color, label, cardIdx }) => (
          <div
            key={color}
            role="button"
            tabIndex={0}
            className={`wwd-tag wwd-tag-${color}`}
            aria-label={`${label} - click to view matching card`}
            onClick={() => handleSelectColor(cardIdx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelectColor(cardIdx);
              }
            }}
          >
            <Mark />
            <i />
          </div>
        ))}
        <h3>One tap.<br />Your<br />whole<br />story.</h3>
      </div>
      <p className="wwd-showcase-caption">A little object. A new way to introduce yourself.</p>
    </div>
    <div className="wwd-product">
      <div className="wwd-product-visual">
        <div className="wwd-card-stack" role="region" aria-label="Nived Card Showcase">
          {transition ? (
            transition.dir === "next" ? (
              <>
                <div className="wwd-card wwd-card-exit-next" key={`exit-${transition.from}`}>
                  <Image src={CARDS[transition.from].src} alt={CARDS[transition.from].name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized />
                </div>
                <div className="wwd-card wwd-card-rise-next" key={`rise-${transition.to}`}>
                  <Image src={CARDS[transition.to].src} alt={CARDS[transition.to].name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized />
                </div>
                <div className="wwd-card wwd-card-enter-back" key={`enter-${(transition.to + 1) % CARDS.length}`}>
                  <Image src={CARDS[(transition.to + 1) % CARDS.length].src} alt={CARDS[(transition.to + 1) % CARDS.length].name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized />
                </div>
              </>
            ) : (
              <>
                <div className="wwd-card wwd-card-exit-prev" key={`exitprev-${(transition.from + 1) % CARDS.length}`}>
                  <Image src={CARDS[(transition.from + 1) % CARDS.length].src} alt={CARDS[(transition.from + 1) % CARDS.length].name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized />
                </div>
                <div className="wwd-card wwd-card-step-back" key={`stepback-${transition.from}`}>
                  <Image src={CARDS[transition.from].src} alt={CARDS[transition.from].name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized />
                </div>
                <div className="wwd-card wwd-card-enter-front" key={`enterfront-${transition.to}`}>
                  <Image src={CARDS[transition.to].src} alt={CARDS[transition.to].name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized />
                </div>
              </>
            )
          ) : (
            <>
              <div
                className="wwd-card wwd-card-back"
                role="button"
                tabIndex={0}
                aria-label={`Switch to ${nextCard.name} card`}
                onClick={handleNext}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleNext(); } }}
              >
                <Image src={nextCard.src} alt={nextCard.name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized priority />
              </div>
              <div className="wwd-card wwd-card-front">
                <Image src={activeCard.src} alt={activeCard.name} width={511} height={809} className="wwd-card-img" draggable={false} unoptimized priority />
              </div>
            </>
          )}
        </div>
        <div className="wwd-card-controls">
          <button type="button" aria-label="Previous card color" onClick={handlePrev} disabled={!!transition}>←</button>
          <span aria-live="polite" className="wwd-card-name">{activeCard.name}</span>
          <button type="button" aria-label="Next card color" onClick={handleNext} disabled={!!transition}>→</button>
        </div>
        <div className="wwd-card-dots" aria-label="Select card color">
          {CARDS.map((card, i) => (
            <button
              key={card.name}
              type="button"
              className={`wwd-card-dot ${i === colorIndex ? "active" : ""}`}
              style={{ backgroundColor: card.hex }}
              aria-label={`Select ${card.name} card`}
              onClick={() => handleSelectColor(i)}
            />
          ))}
        </div>
      </div>
      <div className="wwd-product-copy"><p className="wwd-eyebrow">Introducing Nived Card.</p><h4>Your introduction,<br />all in one place.</h4><p>Nived Card brings your contact details, links, website and profile together in one digital destination, ready to share with a tap on a compatible NFC-enabled phone.</p><p>For the first hello, the next collaboration, and everything you want people to discover about you.</p><ul><li>Your details and links, together</li><li>A simple way to share your work</li><li>A physical card with a digital story</li></ul></div>
    </div>
    <div className="wwd-order"><Mark /><div><p className="wwd-eyebrow">Meet your next introduction.</p><h3>One tap.<br />Your whole story.</h3><a href="#contact">Enquire about your card <span aria-hidden="true">→</span></a></div></div>
  </div>;
}
