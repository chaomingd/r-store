import { useRef } from 'react';

export function useLatest<T>(val: T) {
  const ref = useRef<T>(val);
  ref.current = val;
  return ref
}
