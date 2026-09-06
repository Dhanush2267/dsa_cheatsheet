import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { problemCategories } from '../data/problemSolvingData';
import ComplexitySection from './ComplexitySection';

const PROBLEM_NAV_TOPICS = [
  { id: 'numbers', label: 'Numbers' },
  { id: 'arrays', label: 'Arrays' },
  { id: 'strings', label: 'Strings' },
  { id: 'characters', label: 'Characters' },
  { id: 'loops', label: 'Loops' },
  { id: 'two-pointer', label: 'Two Pointer' },
  { id: 'sliding-window', label: 'Sliding Window' },
  { id: 'binary-search', label: 'Binary Search' },
  { id: 'prefix-sum', label: 'Prefix Sum' },
  { id: 'stack', label: 'Stack' },
  { id: 'queue', label: 'Queue' },
  { id: 'heap', label: 'Heap' },
  { id: 'trees', label: 'Trees' },
  { id: 'graphs', label: 'Graphs' },
  { id: 'recursion', label: 'Recursion' },
  { id: 'backtracking', label: 'Backtracking' },
  { id: 'greedy', label: 'Greedy' },
  { id: 'dynamic-programming', label: 'Dynamic Programming' },
  { id: 'kadane', label: "Kadane's" },
  { id: 'time-complexity', label: 'Time Complexity' }
];

export default function ProblemSolvingSection({ selectedTopic, onSelectTopic }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1600);
  };

  const activeId = (selectedTopic || 'numbers').toLowerCase();
  const isComplexityTopic =
    activeId === 'time-complexity' ||
    activeId === 'complexity' ||
    activeId.includes('complexity');

  const activeCategory = problemCategories.find(
    (c) =>
      c.id.toLowerCase() === activeId ||
      (isComplexityTopic && (c.id === 'time-complexity' || c.id === 'complexity'))
  );

  // Fallback to first topic if nothing matched
  const category = activeCategory || problemCategories[0];

  return (
    <section className="problem-solving-section" aria-label="Problem Solving Notes">
      <div className="section-head">
        <h2 className="section-main-title">Problem Solving Notes</h2>
        <p className="section-sub-title">Quick memory sheet for formulas, patterns, and tricks.</p>
      </div>

      {/* Horizontally scrollable Topic buttons */}
      <div className="topic-pills-bar-wrapper">
        <div className="topic-pills-bar" role="tablist">
          {PROBLEM_NAV_TOPICS.map((topic) => {
            const isSelected = activeId === topic.id.toLowerCase();
            return (
              <button
                key={topic.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`topic-pill ${isSelected ? 'active' : ''}`}
                onClick={() => onSelectTopic && onSelectTopic(topic.id)}
              >
                {topic.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Single Topic Content — ONLY the selected topic */}
      <div className="problem-single-topic">
        <div className="category-sheet-card active-category" id={`cat-${category.id}`}>
          <div className="category-header">
            <h3 className="category-title">{category.title}</h3>
            {category.usually && (
              <span className="category-complexity-badge">{category.usually}</span>
            )}
          </div>

          {category.think && (
            <div className="category-think-banner">
              <span className="think-label">Think:</span>
              <span className="think-content">{category.think}</span>
            </div>
          )}

          {/* Per-topic memory tips (only shown when the topic has them) */}
          {category.memoryTips && category.memoryTips.length > 0 && (
            <div className="topic-memory-tips">
              <span className="topic-memory-tips-label">Quick Memory</span>
              <div className="topic-memory-tips-grid">
                {category.memoryTips.map((tip, idx) => (
                  <div key={idx} className="topic-memory-tip-card">
                    <span className="qm-symbol">{tip.symbol}</span>
                    <span className="qm-arrow">
                      <ArrowRight size={12} />
                    </span>
                    <span className="qm-meaning">{tip.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {category.visualTable ? (
            <div className="complexity-visual-list">
              {category.items.map((row, idx) => (
                <div key={idx} className="complexity-visual-row">
                  <span className="c-badge">{row.complexity}</span>
                  <div className="c-details">
                    <span className="c-name">{row.name}</span>
                    <span className="c-example">{row.example}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="category-items-list">
              {category.items.map((item, idx) => {
                const itemKey = `${category.id}-${idx}`;
                const isCopied = copiedKey === itemKey;

                return (
                  <div key={idx} className="category-item-box">
                    <div className="item-label-row">
                      <span className="item-label">{item.label}</span>
                      {item.think && <span className="item-think">({item.think})</span>}
                      {item.code && (
                        <button
                          type="button"
                          className="copy-mini-btn"
                          onClick={() => handleCopy(itemKey, item.code)}
                          title="Copy code"
                          aria-label={`Copy code for ${item.label}`}
                        >
                          {isCopied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                        </button>
                      )}
                    </div>
                    {item.code && (
                      <pre className="item-code-block">
                        <code>{item.code}</code>
                      </pre>
                    )}
                    {item.hint && <span className="item-hint">{item.hint}</span>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Sorting & Searching Complexity Table — ONLY rendered for Complexity topic */}
      {isComplexityTopic && <ComplexitySection />}
    </section>
  );
}
