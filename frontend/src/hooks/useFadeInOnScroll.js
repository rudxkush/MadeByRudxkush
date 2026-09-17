import { useEffect, useRef, useState } from 'react';

const useFadeInOnScroll = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after triggering once
        }
      },
      {
        threshold,
      }
    );

    if (ref.current && !isVisible) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, isVisible]); // Removed isVisible from deps

  return { ref, isVisible };
};

export default useFadeInOnScroll;