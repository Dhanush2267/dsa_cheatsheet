import React from 'react';
import { Network, Code2, Lightbulb } from 'lucide-react';

export default function TopNavCards({ activeSection, onSelectSection }) {
  const cards = [
    {
      id: 'collections',
      title: 'Collections Map',
      subtitle: 'Java Collections Framework Diagrams',
      icon: Network
    },
    {
      id: 'functions',
      title: 'Inbuilt Functions',
      subtitle: 'Syntax for each topic',
      icon: Code2
    },
    {
      id: 'problem-solving',
      title: 'Problem Solving Notes',
      subtitle: 'Formulas, patterns and quick tips',
      icon: Lightbulb
    }
  ];

  return (
    <div className="top-nav-cards-grid">
      {cards.map((card) => {
        const Icon = card.icon;
        const isActive = activeSection === card.id;

        return (
          <button
            key={card.id}
            type="button"
            className={`top-nav-card ${isActive ? 'active' : ''}`}
            onClick={() => onSelectSection(card.id)}
          >
            <div className="card-icon-box">
              <Icon size={24} />
            </div>
            <div className="card-text-box">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-subtitle">{card.subtitle}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
