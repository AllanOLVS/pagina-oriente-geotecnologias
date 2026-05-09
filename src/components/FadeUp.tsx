import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function FadeUp({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  const Comp = Tag as any;
  return (
    <Comp ref={ref as any} style={style} className={`fade-up ${visible ? "in" : ""} ${className}`}>
      {children}
    </Comp>
  );
}
