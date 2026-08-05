import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref.
 * When the element enters the viewport it gets the `visible` class,
 * which CSS transitions react to.
 *
 * @param {object} options  IntersectionObserver options
 * @returns {React.RefObject}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/**
 * useParallax — drives a CSS custom property --parallax-y on an element
 * as the page scrolls, creating a vertical parallax offset.
 *
 * @param {number} speed   multiplier (0 = pinned, 0.2 = subtle, 0.5 = strong)
 * @returns {React.RefObject}
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        // progress: -1 (above viewport) → 0 (centred) → 1 (below viewport)
        const progress = (viewH / 2 - rect.top - rect.height / 2) / viewH;
        el.style.setProperty('--parallax-y', `${progress * speed * 100}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);
  return ref;
}
