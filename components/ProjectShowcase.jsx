'use client';

import React, { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    id: 'underground-parking-penetron',
    title: 'Underground Parking by Penetron',
    coverImage: '/images/Underground Parking by Penetron-1.jpeg',
    images: [
      '/images/Underground Parking by Penetron-1.jpeg',
      '/images/Underground Parking by Penetron-2.jpeg',
      '/images/Underground Parking by Penetron-3.jpeg',
      '/images/Underground Parking by Penetron-4.jpeg',
      '/images/Underground Parking by Penetron-5.jpeg',
    ],
  },
  {
    id: 'elpro-mall-chinchwad',
    title: 'Elpro Mall Chinchwad',
    coverImage: '/images/Elpro Mall Chinchwad-1.jpeg',
    images: [
      '/images/Elpro Mall Chinchwad-1.jpeg',
      '/images/Elpro Mall Chinchwad-2.jpeg',
      '/images/Elpro Mall Chinchwad-3.jpeg',
      '/images/Elpro Mall Chinchwad-4.jpeg',
      '/images/Elpro Mall Chinchwad-5.jpeg',
      '/images/Elpro Mall Chinchwad-6.jpeg',
      '/images/Elpro Mall Chinchwad-7.jpeg',
      '/images/Elpro Mall Chinchwad-8.jpeg',
      '/images/Elpro Mall Chinchwad-9.jpeg',
    ],
  },
  {
    id: 'palwe-house',
    title: 'Palwe House (Pankaja Mundhe Bunglow)',
    coverImage: '/images/Palwe House (Pankaja Mundhe Bunglow)-1.jpeg',
    images: [
      '/images/Palwe House (Pankaja Mundhe Bunglow)-1.jpeg',
      '/images/Palwe House (Pankaja Mundhe Bunglow)-2.jpeg',
      '/images/Palwe House (Pankaja Mundhe Bunglow)-3.jpeg',
      '/images/Palwe House (Pankaja Mundhe Bunglow)-4.jpeg',
    ],
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (project, index = 0) => {
    setActiveProject(project);
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
  }, [activeProject]);

  const prevImage = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  }, [activeProject]);

  // Keyboard controls for lightbox
  useEffect(() => {
    function handleKeyDown(e) {
      if (!activeProject) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, nextImage, prevImage]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <div className="w-full">
      {/* CURATED EDITORIAL GALLERY GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openLightbox(project, 0)}
            className="group cursor-pointer flex flex-col transition-all duration-300"
          >
            {/* Cleanly Framed Portrait Image Container (Native 3:4 Aspect Ratio) */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs group-hover:shadow-xl group-hover:border-royal-300 transition-all duration-300">
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
              />
            </div>

            {/* Clean Caption Area OUTSIDE the image frame */}
            <div className="pt-5 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400 font-medium">
                    {project.images.length} {project.images.length === 1 ? 'Photograph' : 'Photographs'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-royal-600 transition-colors tracking-tight leading-snug">
                  {project.title}
                </h3>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-royal-600 group-hover:text-royal-800 transition-colors">
                <span>View Gallery</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MINIMAL FULL-SCREEN LIGHTBOX MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-slate-950/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Bar: Project Title & Close Button */}
          <div
            className="flex items-center justify-between text-white pb-4 border-b border-white/10 relative z-10 max-w-5xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-royal-400">
                Project Gallery
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {activeProject.title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm text-slate-400 font-mono">
                {activeImageIndex + 1} / {activeProject.images.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-full bg-white/10 p-2 text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close Gallery"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Image View with Sensible Maximum Dimensions (No pixelation) */}
          <div
            className="relative flex flex-1 items-center justify-center my-4 overflow-hidden max-w-5xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {activeProject.images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-20 rounded-full bg-slate-900/80 p-3 text-white backdrop-blur-md border border-white/10 hover:bg-royal-600 hover:border-royal-600 transition-all shadow-lg"
                aria-label="Previous Photograph"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Crisp Native Sized Image Container */}
            <div className="relative max-h-[72vh] max-w-[85vw] md:max-w-2xl lg:max-w-3xl flex items-center justify-center">
              <img
                key={activeProject.images[activeImageIndex]}
                src={activeProject.images[activeImageIndex]}
                alt={`${activeProject.title} - Photograph ${activeImageIndex + 1}`}
                className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
              />
            </div>

            {/* Next Button */}
            {activeProject.images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-20 rounded-full bg-slate-900/80 p-3 text-white backdrop-blur-md border border-white/10 hover:bg-royal-600 hover:border-royal-600 transition-all shadow-lg"
                aria-label="Next Photograph"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto pb-1 relative z-10 max-w-5xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {activeProject.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  activeImageIndex === idx
                    ? 'border-royal-400 scale-105 opacity-100 shadow'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
