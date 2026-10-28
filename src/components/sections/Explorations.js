import Link from "next/link";
import Image from "next/image";
import "./Explorations.css";

export function Explorations() {
  return (
    <section
      id="about-approach"
      className="explorations-section"
      aria-labelledby="explorations-heading"
    >
      <div className="explorations-container">
        {/* Top Tag */}
        <div className="explorations-tag">
          <span className="explorations-tag-dot" aria-hidden="true" />
          <span className="explorations-tag-text">A GLIMPSE AHEAD</span>
        </div>

        {/* Content Header: Heading Left, Description & CTA Right */}
        <div className="explorations-header">
          <div className="explorations-heading-block">
            <h3 id="explorations-heading" className="explorations-title">
              <span className="explorations-title-main">Where we are</span>
              <span className="explorations-title-sub">looking next.</span>
            </h3>
          </div>

          <div className="explorations-info-block">
            <div className="explorations-description">
              <p>New ideas. Unexpected connections.</p>
              <p>A first look at what’s taking shape.</p>
            </div>
            <Link
              href="/exploration"
              className="explorations-cta-btn"
              aria-label="Explore what's next in Nived explorations"
            >
              <span>Explore what’s next</span>
              <svg
                className="explorations-cta-icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 14L14 1M14 14V1H1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Artwork Banner */}
        <div className="explorations-banner-wrapper">
          <Image
            src="/images/glimpse-ahead.png"
            alt="Mosaic artwork showing connected pathways and geometric curves in warm ochre, gold, and cream against a deep celestial backdrop"
            width={967}
            height={400}
            priority
            className="explorations-banner-img"
          />
        </div>

        {/* Bottom Divider Line */}
        <div className="explorations-bottom-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
