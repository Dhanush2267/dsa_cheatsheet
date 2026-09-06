import React, { useState } from 'react';
import { Check, Copy, Sparkles } from 'lucide-react';
import { inbuiltFunctions, INBUILT_TOPICS } from '../data/inbuiltFunctions';

export default function FunctionsSection({ selectedTopic, onSelectTopic }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1600);
  };

  // Determine active topic
  const activeTopic = selectedTopic || 'Arrays';
  const filteredFunctions = inbuiltFunctions.filter(
    (fn) => fn.topic.toLowerCase() === activeTopic.toLowerCase()
  );

  return (
    <section className="functions-section" aria-label="Java Inbuilt Functions">
      <div className="section-head">
        <h2 className="section-main-title">Java Inbuilt Functions</h2>
        <p className="section-sub-title">Syntax and quick memory hints for DSA coding.</p>
      </div>

      {/* Horizontally scrollable Topic buttons */}
      <div className="topic-pills-bar-wrapper">
        <div className="topic-pills-bar" role="tablist">
          {INBUILT_TOPICS.map((topic) => {
            const isSelected = activeTopic.toLowerCase() === topic.toLowerCase();
            return (
              <button
                key={topic}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`topic-pill ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  onSelectTopic({ id: topic, label: topic, section: 'functions' });
                }}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>

      {/* Function Cards Grid Directly (No extra STRINGBUILDER / 9 revision functions banner) */}
      <div className="function-cards-list">
        {filteredFunctions.map((fn) => {
          const isCopied = copiedId === fn.id;
          return (
            <article key={fn.id} className="function-card">
              <div className="fn-card-header">
                <h4 className="fn-name">{fn.name}</h4>
                <button
                  type="button"
                  className="copy-syntax-btn"
                  onClick={(e) => handleCopy(fn.id, fn.syntax, e)}
                  title="Copy Syntax"
                  aria-label={`Copy syntax for ${fn.name}`}
                >
                  {isCopied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Syntax Box - Prominent */}
              <div className="syntax-block">
                <span className="syntax-label">Syntax:</span>
                <code className="syntax-code">{fn.syntax}</code>
              </div>

              {/* Meaning */}
              <div className="meaning-block">
                <span className="info-label">Meaning:</span>
                <span className="meaning-text">{fn.meaning}</span>
              </div>

              {/* Optional Memory Hint */}
              {fn.memory && (
                <div className="memory-block">
                  <span className="memory-tag">
                    <Sparkles size={13} />
                    Memory:
                  </span>
                  <span className="memory-text">{fn.memory}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
