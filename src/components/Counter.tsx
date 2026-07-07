import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks';

/** Animated counter that starts when scrolled into view. */
export function Counter({
  value,
  suffix = '',
  duration = 1800,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = useCountUp(value, active, duration);

  return (
    <span ref={ref}>
      {Math.round(current)}
      {suffix}
    </span>
  );
}
