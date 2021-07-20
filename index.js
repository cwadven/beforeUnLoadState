import { useEffect } from "react";

export const beforeUnLoadState = (array) => {
  // exception handling
  if (!Array.isArray(array)) {
    return;
  }

  const listener = (event) => {
    let is_changed = array.some(([prevValue, setState]) => {
      let state;
      setState((prevState) => {
        state = prevState;
        return prevState;
      });
      return state !== prevValue;
    });

    if (is_changed) {
      event.preventDefault();
      event.returnValue = "";
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", listener);
    return () => {
      window.removeEventListener("beforeunload", listener);
    };
  }, []);
};
