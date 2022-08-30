import { RefObject, useEffect } from "react";

export default function useSwipe(swipeRef: RefObject<HTMLElement>) {
  const listClientWidth = swipeRef.current ? swipeRef.current.clientWidth : 0;
  const listScrollWidth = swipeRef.current ? swipeRef.current.scrollWidth : 0;

  let isSwiping = false;
  let startX = 0;
  let nowX = 0;
  let startPoint = 0;

  useEffect(() => {
    bindEvents();
  }, []);

  const bindEvents = () => {
    if (!swipeRef.current) return;

    swipeRef.current.addEventListener("mousedown", onMouseStart);
  };

  const setTranslateX = (x: number) => {
    if (!swipeRef.current) return;

    swipeRef.current.style.transform = `translateX(${x}px)`;
  };

  const getTranslateX = () => {
    if (!swipeRef.current) return 0;

    return parseInt(
      getComputedStyle(swipeRef.current).transform.split(/[^\-0-9]+/g)[5]
    );
  };

  const onMouseStart = (e: MouseEvent) => {
    if (!swipeRef.current) return;
    startX = e.clientX;
    isSwiping = true;

    swipeRef.current.addEventListener("mousemove", onMouseMove);
    swipeRef.current.addEventListener("mouseup", onMouseEnd);
    swipeRef.current.addEventListener("mouseleave", onMouseEnd);
  };

  const onMouseMove = (e: MouseEvent) => {
    nowX = e.clientX;

    if (!isSwiping) return;

    setTranslateX(startPoint + nowX - startX);
  };

  const onMouseEnd = () => {
    if (!swipeRef.current) return;

    isSwiping = false;
    startPoint = getTranslateX();

    console.log(listClientWidth, listScrollWidth, startPoint);

    if (startPoint > 0) {
      setTranslateX(0);
      swipeRef.current.style.transition = `all 0.3s ease`;
      startPoint = 0;
    }
    // else if (startPoint < listClientWidth - listScrollWidth) {
    //   setTranslateX(listClientWidth - listScrollWidth);
    //   swipeRef.current.style.transition = `all 0.3s ease`;
    //   startPoint = listClientWidth - listScrollWidth;
    // }

    swipeRef.current.removeEventListener("mousedown", onMouseStart);
    swipeRef.current.removeEventListener("mouseup", onMouseEnd);
    swipeRef.current.removeEventListener("mousemove", onMouseMove);
    swipeRef.current.removeEventListener("mouseleave", onMouseEnd);

    setTimeout(() => {
      bindEvents();
      if (swipeRef.current) {
        swipeRef.current.style.transition = ``;
      }
    }, 300);
  };
}
