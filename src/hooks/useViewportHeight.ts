import { useEffect } from 'react';

/**
 * Hook to handle dynamic viewport height for in-app browsers
 * Updates CSS custom property --vh to account for address bars
 */
export const useViewportHeight = () => {
  useEffect(() => {
    const updateVH = () => {
      // Calculate actual viewport height
      const vh = window.innerHeight * 0.01;
      // Set CSS custom property
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial calculation
    updateVH();

    // Update on resize and orientation change
    window.addEventListener('resize', updateVH);
    window.addEventListener('orientationchange', updateVH);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateVH);
      window.removeEventListener('orientationchange', updateVH);
    };
  }, []);
};
