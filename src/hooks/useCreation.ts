import { useMemo } from 'react';
import { useLatest } from './useLatest';

export function useCreation<T>(fn: () => T, deps: any[]): T {
  const fnRef = useLatest(fn);
  return useMemo(() => {
    return fnRef.current();
  }, deps);
}
