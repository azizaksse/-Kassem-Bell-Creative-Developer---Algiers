"use client";

import { useEffect } from "react";

export function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false;
    
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // Optimize resize performance
    const optimizeResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive event listeners for better performance
    window.addEventListener('scroll', optimizeScroll, { passive: true });
    window.addEventListener('resize', optimizeResize, { passive: true });

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/geist-sans.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const imageLink = document.createElement('link');
      imageLink.rel = 'preload';
      imageLink.href = '/logo.jpg';
      imageLink.as = 'image';
      document.head.appendChild(imageLink);
    };

    preloadCriticalResources();

    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      window.removeEventListener('resize', optimizeResize);
    };
  }, []);

  return null;
}
