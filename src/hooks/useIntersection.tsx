import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(
  onIntersect: Function,
  option?: IntersectionObserverInit
) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const refObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { ...option }
    );
    refObserver.current = observer;
  }, []);

  useEffect(() => {
    const observer = refObserver.current;

    if (ref && observer) {
      observer.observe(ref);
    }

    return () => {
      if (ref && observer) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return setRef;
}
