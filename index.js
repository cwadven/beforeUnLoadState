import { useEffect, useRef } from "react";

export const beforeUnLoadState = (array) => {
  // exception handling
  if (!Array.isArray(array)) {
    return;
  }

  const listener = useRef();

  useEffect(() => {
    listener.current = (event) => {
      let is_changed = array.some(([prevValue, curValue]) => {
        return curValue !== prevValue;
      });

      if (is_changed) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
  }, [array]);

  useEffect(() => {
    const eventListener = (event) => {
      listener.current(event);
    };
    window.addEventListener("beforeunload", eventListener);
    return () => {
      window.removeEventListener("beforeunload", eventListener);
    };
  }, []);
};