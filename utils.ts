export const inkverseWebsiteUrl = process.env.NODE_ENV === 'production' 
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

type InkverseUrlParams = {
  type: InkverseUrlType,
  shortUrl?: string | null,
  name?: string | null,
  uuid?: string | null
}

export function getInkverseUrl(
  params: InkverseUrlParams
): string | undefined {
  switch (params.type) {
    case InkverseUrlType.COMICSERIES:
      if (!params.shortUrl) return undefined;
      return `/comics/${params.shortUrl}`;

    case InkverseUrlType.CREATOR:
      if (!params.shortUrl) return undefined;
      return `/creators/${params.shortUrl}`;

    case InkverseUrlType.COMICISSUE:
      if (!params.shortUrl || !params.name || !params.uuid) return undefined;
      
      const slug = params.name
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-_]/g, '')
        .replace(/-+/g, '-')
        .slice(0, 80)
        .toLowerCase();

      const safeUuid = params.uuid.replace(/-/g, '');

      return `/comics/${params.shortUrl}/${slug}-${safeUuid}`;

  default:
    throw new Error('getInkverseLink - type is invalid');
  }
}