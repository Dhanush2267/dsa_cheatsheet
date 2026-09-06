import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';

export default function ImageViewerModal({ image, onClose }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 4));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.6));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (modalRef.current?.requestFullscreen) {
        modalRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.15, 4));
    } else {
      setScale((prev) => Math.max(prev - 0.15, 0.6));
    }
  };

  if (!image) return null;

  return (
    <div
      ref={modalRef}
      className="modal-overlay"
      onClick={onClose}
      onMouseUp={handleMouseUp}
    >
      <div
        className="modal-container image-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="modal-header">
          <div className="modal-title-group">
            {image.badge && <span className="topic-badge">{image.badge}</span>}
            <h3 className="modal-title">{image.title}</h3>
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="ctrl-btn"
              onClick={handleZoomIn}
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              type="button"
              className="ctrl-btn"
              onClick={handleZoomOut}
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <button
              type="button"
              className="ctrl-btn"
              onClick={handleReset}
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw size={18} />
            </button>
            <button
              type="button"
              className="ctrl-btn"
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button
              type="button"
              className="ctrl-btn close-btn"
              onClick={onClose}
              title="Close (Esc)"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Viewport for image */}
        <div
          className="image-viewport"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
          style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="full-fidelity-image"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.15s ease-out'
            }}
            draggable={false}
          />
        </div>

        {/* Bottom hint info */}
        <div className="modal-footer">
          <span className="scale-indicator">Zoom: {Math.round(scale * 100)}%</span>
          <span className="hint-text">Tip: Scroll mouse wheel to zoom, drag to pan when zoomed in</span>
        </div>
      </div>
    </div>
  );
}
