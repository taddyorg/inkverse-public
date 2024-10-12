export function isAValidEmail(email: string): boolean {
  return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
}

export function isValidHttpUrl(potentialUrl: string): boolean {
  try {
    const url = new URL(potentialUrl);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}
  
export const arrayToObject = <T extends Record<K, PropertyKey>, K extends keyof T>(
  array: T[],
  keyField: K
): Record<T[K], T> =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
}, {} as Record<T[K], T>);