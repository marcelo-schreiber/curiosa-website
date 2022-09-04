import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: number) => {
  const [state, setState] = useState<number>(1);

  const initialize = (key: string): number => {
    try {
      const item = localStorage.getItem(key);
      if (item && item !== "undefined") {
        return JSON.parse(item);
      }

      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  useEffect(() => {
    setState(initialize(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = useCallback(
    (value: number) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key, setState]
  );

  return { questionNumber: state, setQuestionNumber: setValue };
};
