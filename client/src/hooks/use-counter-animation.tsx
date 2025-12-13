import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
  prefix?: string;
  suffix?: string;
}

export function useCounterAnimation({
  end,
  duration = 2000,
  startOnView = true,
  prefix = "",
  suffix = "",
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, startOnView]);

  const animateCounter = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const displayValue = `${prefix}${count.toLocaleString()}${suffix}`;

  return { ref, displayValue, count };
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: UseCounterAnimationOptions & { className?: string }) {
  const { ref, displayValue } = useCounterAnimation({
    end,
    duration,
    prefix,
    suffix,
  });

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  );
}
