"use client";

import { useEffect } from "react";

export function PerformanceOptimizer() {
  useEffect(() => {
    // Aggressive performance optimizations
    let scrollTicking = false;
    let resizeTicking = false;
    
    // Throttled scroll handler
    const optimizeScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    // Throttled resize handler
    const optimizeResize = () => {
      if (!resizeTicking) {
        requestAnimationFrame(() => {
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    };

    // Add passive event listeners
    window.addEventListener('scroll', optimizeScroll, { passive: true });
    window.addEventListener('resize', optimizeResize, { passive: true });

    // Preload critical resources immediately
    const preloadCriticalResources = () => {
      // Preload fonts with higher priority
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

      // Preload CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'preload';
      cssLink.href = '/_next/static/css/app/layout.css';
      cssLink.as = 'style';
      document.head.appendChild(cssLink);
    };

    // Optimize rendering
    const optimizeRendering = () => {
      // Force hardware acceleration
      document.body.style.transform = 'translateZ(0)';
      document.body.style.willChange = 'transform';
      
      // Optimize repaints
      document.body.style.backfaceVisibility = 'hidden';
      document.body.style.perspective = '1000px';
    };

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    preloadCriticalResources();
    optimizeRendering();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      window.removeEventListener('resize', optimizeResize);
    };
  }, []);

  return null;
}

