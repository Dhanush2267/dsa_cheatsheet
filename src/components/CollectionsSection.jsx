import React from 'react';
import { Info, ZoomIn } from 'lucide-react';
import { collectionsImages } from '../data/collectionsImages';

export default function CollectionsSection({ onSelectImage }) {
  return (
    <section className="collections-section" aria-label="Java Collections Framework">
      <div className="section-head">
        <h2 className="section-main-title">Java Collections Framework</h2>
        <p className="section-sub-title">The original diagrams for quick reference.</p>
      </div>

      {/* 2-Column Grid of 4 Original Images */}
      <div className="collections-image-grid">
        {collectionsImages.map((item) => (
          <div
            key={item.id}
            className="diagram-card"
            onClick={() => onSelectImage(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectImage(item);
              }
            }}
            title="Click to zoom and view in high resolution"
          >
            <div className="diagram-frame">
              <img
                src={item.src}
                alt={item.title}
                className="diagram-img"
                loading="eager"
              />
              <div className="diagram-zoom-hint">
                <ZoomIn size={16} /> Click to enlarge
              </div>
            </div>
            <div className="diagram-label">
              <span className="diagram-title">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="legend-strip">
        <div className="legend-entry">
          <span className="legend-dot green"></span>
          <span className="legend-txt">Green = Interface</span>
        </div>
        <div className="legend-entry">
          <span className="legend-dot blue"></span>
          <span className="legend-txt">Blue = Class</span>
        </div>
        <div className="legend-entry">
          <span className="legend-arrow red">⟶</span>
          <span className="legend-txt">= extends</span>
        </div>
        <div className="legend-entry">
          <span className="legend-arrow dashed">⇢</span>
          <span className="legend-txt">= implements</span>
        </div>
      </div>

      {/* Note Box */}
      <div className="callout-note">
        <div className="callout-icon">
          <Info size={20} />
        </div>
        <div className="callout-content">
          <span className="callout-heading">Note:</span>
          <span className="callout-desc">
            These are the original diagrams. Use them for quick reference only.
          </span>
        </div>
      </div>
    </section>
  );
}
