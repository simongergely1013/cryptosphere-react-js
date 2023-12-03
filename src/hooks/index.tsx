import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from "../store";

export const useLocalState = (key: string, initialValue: any) => {
  const storedValue = localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState(item);

  const updateState = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateState];
}; 

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector