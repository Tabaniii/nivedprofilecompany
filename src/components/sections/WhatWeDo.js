"use client";

import { useState } from "react";
import "./WhatWeDo.css";

const SERVICES = [
  { title: "Web design to hosting", body: "A home for your brand, built from the first sketch to the live website. We connect thoughtful design with the practical details that make a site useful.", details: ["Website strategy and page structure", "Responsive design and development", "Hosting setup and launch support"], tags: ["Design", "Build", "Host"] },
  { title: "Consulting and agency work", body: "An extra pair of hands and a clear technical perspective. We help teams shape an idea, make decisions and move a project towards delivery.", details: ["Discovery and technical direction", "Design and development collaboration", "Project planning and ongoing support"], tags: ["Strategy", "Project support"] },
  { title: "Autonomous systems for business", body: "Custom systems for the work that repeats. We look at how your business runs and build useful automations so your team can focus on what matters.", details: ["Workflow mapping and automation", "Connected tools and custom integrations", "Human oversight and practical handover"], tags: ["Automation", "Custom systems"] },
];
const COLORS = [
  { name: "Cloud", background: "#fafbff", ink: "#dfe2e9" },
  { name: "Ocean", background: "#306ba0", ink: "#b1dce3" },
  { name: "Blush", background: "#f5bfc5", ink: "#793e56" },
];
function Mark({ className = "" }) {
  return <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true"><path d="M16 141C30 91 53 14 76 59S99 166 146 17" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /></svg>;
}
function Card({ color, back = false }) {
  return <div className={`wwd-card ${back ? "wwd-card-back" : ""}`} style={{ background: color.background, color: color.ink }}><span className="wwd-nfc" aria-hidden="true">N )))</span><Mark /><span className="wwd-card-label">Nived Card</span></div>;
}
export function WhatWeDo({ children }) {
  const [colorIndex, setColorIndex] = useState(0);
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
    <div className="wwd-showcase"><p className="wwd-new"><i /> New — Nived Card.</p><div className="wwd-charm-grid" aria-label="Nived tags in seven colors"><div className="wwd-blue-block block-one" /><div className="wwd-blue-block block-two" /><div className="wwd-blue-block block-three" /><div className="wwd-blue-block block-four" />{["black", "mint", "blue", "yellow", "white", "red", "pink"].map(color => <div key={color} className={`wwd-tag wwd-tag-${color}`}><Mark /><i /></div>)}<h3>One tap.<br />Your<br />whole<br />story.</h3></div><p className="wwd-showcase-caption">A little object. A new way to introduce yourself.</p></div>
    <div className="wwd-product"><div className="wwd-product-visual"><div className="wwd-card-stack" role="img" aria-label={`Nived Card in ${COLORS[colorIndex].name} and ${COLORS[(colorIndex + 1) % COLORS.length].name}`}><Card color={COLORS[(colorIndex + 1) % COLORS.length]} back /><Card color={COLORS[colorIndex]} /></div><div className="wwd-card-controls"><button type="button" aria-label="Previous card color" onClick={() => setColorIndex((colorIndex + COLORS.length - 1) % COLORS.length)}>←</button><span aria-live="polite">{COLORS[colorIndex].name}</span><button type="button" aria-label="Next card color" onClick={() => setColorIndex((colorIndex + 1) % COLORS.length)}>→</button></div></div><div className="wwd-product-copy"><p className="wwd-eyebrow">Introducing Nived Card.</p><h4>Your introduction,<br />all in one place.</h4><p>Nived Card brings your contact details, links, website and profile together in one digital destination, ready to share with a tap on a compatible NFC-enabled phone.</p><p>For the first hello, the next collaboration, and everything you want people to discover about you.</p><ul><li>Your details and links, together</li><li>A simple way to share your work</li><li>A physical card with a digital story</li></ul></div></div>
    <div className="wwd-order"><Mark /><div><p className="wwd-eyebrow">Meet your next introduction.</p><h3>One tap.<br />Your whole story.</h3><a href="#contact">Enquire about your card <span aria-hidden="true">→</span></a></div></div>
  </div>;
}
