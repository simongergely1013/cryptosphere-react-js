import { useState } from "react";

export const useLocalState = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState(item);

  const updateState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateState];
};
