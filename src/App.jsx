import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CollectionsSection from './components/CollectionsSection';
import FunctionsSection from './components/FunctionsSection';
import ProblemSolvingSection from './components/ProblemSolvingSection';
import ImageViewerModal from './components/ImageViewerModal';


export default function App() {
  const [activeSection, setActiveSection] = useState('collections');
  const [selectedTopic, setSelectedTopic] = useState('collections-map');
  const [activeImage, setActiveImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Always force dark theme
    document.documentElement.removeAttribute('data-theme');
  }, []);

  // Close drawer when Escape is pressed
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body/page scroll when drawer is open on mobile
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [drawerOpen]);

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'collections') setSelectedTopic('collections-map');
    else if (sectionId === 'functions') setSelectedTopic('Arrays');
    else if (sectionId === 'problem-solving') setSelectedTopic('numbers');
    setDrawerOpen(false); // close mobile drawer on section select
  };

  const handleSelectTopic = (topicId) => {
    setSelectedTopic(topicId);
    // Close drawer automatically after a topic is picked (mobile UX)
    setDrawerOpen(false);
  };

  return (
    <div className="app-layout">
      <Header onMenuOpen={() => setDrawerOpen(true)} />


      <main className="main-wrapper">
        {/* Sidebar + Content split */}
        <div className="workspace-split">

          {/* Drawer backdrop — only visible on mobile when drawer is open */}
          {drawerOpen && (
            <div
              className="sidebar-backdrop"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
          )}

          <Sidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            selectedTopic={selectedTopic}
            onSelectTopic={handleSelectTopic}
            drawerOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          />

          <div className="main-viewport">
            {activeSection === 'collections' && (
              <CollectionsSection onSelectImage={(img) => setActiveImage(img)} />
            )}
            {activeSection === 'functions' && (
              <FunctionsSection
                selectedTopic={selectedTopic}
                onSelectTopic={(item) => handleSelectTopic(item.id || item)}
              />
            )}
            {activeSection === 'problem-solving' && (
              <ProblemSolvingSection
                selectedTopic={selectedTopic}
                onSelectTopic={(topicId) => handleSelectTopic(topicId)}
              />
            )}
          </div>
        </div>
      </main>

      <ImageViewerModal
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </div>
  );
}
