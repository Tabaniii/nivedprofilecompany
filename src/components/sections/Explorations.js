import "./Explorations.css";

// Display the original artwork regions without rasterising the page's live text.
function ReferenceArtwork({ crop, label, className = "" }) {
  const [x, y, width, height] = crop;
  return <div className={`explore-art ${className}`} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} style={{ aspectRatio: `${width} / ${height}`, backgroundSize: `${888 / width * 100}% auto`, backgroundPosition: `${x / (888 - width) * 100}% ${y / (2048 - height) * 100}%` }} />;
}

const DIRECTIONS = [
  { id: "exploration-development", eyebrow: "Step inside the development", division: "Nived / Development", title: "Development,", emphasis: "with direction.", tone: "gold", art: [221, 593, 514, 222], icon: [686, 521, 40, 40], alt: "Green, cream and ochre mosaic pathways with arrows connecting ideas into a shared direction", description: ["Ideas into structure.", "Progress through connection."], action: "Explore our work", href: "#projects", footer: "Curiosity. Clarity. A shared direction.", disciplines: "Think + Connect + Build" },
  { id: "exploration-studio", eyebrow: "A glimpse ahead", division: "Nived / Studio", title: "Where curiosity", emphasis: "takes us next.", tone: "lavender", art: [221, 1071, 514, 222], icon: [682, 996, 47, 46], alt: "Warm geometric sketches in orange, gold and lavender with dotted paths across an ivory canvas", description: ["New ideas. Unexpected connections.", "A first look at what’s taking shape."], action: "See what we’re making", href: "#about-process", footer: "Three directions. One restless imagination.", disciplines: "Design · Creation · Experience" },
  { id: "exploration-research", eyebrow: "A world of questions", division: "Nived / Research", title: "Where curiosity", emphasis: "connects ideas", tone: "ivory", art: [221, 1593, 514, 222], icon: [683, 1517, 46, 48], alt: "Blue, lavender and yellow mosaic tiles connected by concentric circles and research diagrams", description: ["Good questions. New possibilities.", "A glimpse into our research division."], action: "Explore our research", href: "#contact", footer: "Many branches. One curious mind.", disciplines: "Science · Technology · People" },
];

export function Explorations() {
  return <section id="about-approach" className="explorations" aria-labelledby="explorations-heading">
    <header className="explore-intro">
      <div className="explore-meta"><span className="explore-pill"><i /> A glimpse ahead</span><span>Nived / Explorations</span></div>
      <h3 id="explorations-heading">Where we are<br /><span>looking next</span></h3>
      <div className="explore-hero-art"><ReferenceArtwork crop={[212, 155, 532, 225]} label="Orange and gold mosaic shapes orbiting across a deep blue canvas with an ivory rounded frame" /></div>
      <div className="explore-caption explore-intro-caption"><p>New ideas. Unexpected connections.<br />A first look at what’s taking shape.</p><a href="#exploration-development">Explore what’s next</a></div>
    </header>
    {DIRECTIONS.map(direction => <article key={direction.id} id={direction.id} className={`explore-direction explore-${direction.tone}`}>
      <div className="explore-meta"><span><i /> {direction.eyebrow}</span><span>{direction.division}</span></div>
      <div className="explore-heading"><h4>{direction.title}<br /><em>{direction.emphasis}</em></h4><ReferenceArtwork crop={direction.icon} className="explore-emblem" /></div>
      <ReferenceArtwork crop={direction.art} label={direction.alt} />
      <div className="explore-caption"><p>{direction.description[0]}<br />{direction.description[1]}</p><a href={direction.href}>{direction.action}<span aria-hidden="true">↗</span></a></div>
      <footer className="explore-footer"><span>{direction.footer}</span><span>{direction.disciplines}</span></footer>
    </article>)}
  </section>;
}
