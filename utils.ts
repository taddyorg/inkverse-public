const inkverseWebsiteUrl = process.env.NODE_ENV === 'production' 
	? 'https://inkverse.co' 
	: 'http://inkverse.test:8082';

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

export enum InkverseUrlType {
  COMICSERIES = 'comicseries',
  COMICISSUE = 'comicissue',
  CREATOR = 'creator'
}

export function getInkverseUrl(type: InkverseUrlType, id?: string, shortUrl?: string, baseUrl = inkverseWebsiteUrl){
  switch(type){
    case InkverseUrlType.COMICSERIES:
      return `${baseUrl}/comics/${shortUrl}`
    case InkverseUrlType.COMICISSUE:
      return `${baseUrl}/comics/${shortUrl}/${id}`
    case InkverseUrlType.CREATOR:
      return `${baseUrl}/creators/${shortUrl}`
    default:
      throw new Error(`getInkverseUrl: type ${type} is not supported`)
  }
}