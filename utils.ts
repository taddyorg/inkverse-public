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

export const validSizeForTypes = {
  avatar: ['sm', 'md', 'lg'],
  cover: ['sm', 'md', 'lg'],
  banner: ['sm', 'md', 'lg'],
  thumbnail: [],
  story: [],
}
  
function isValidSizeForTypeSet(type, size){
	return new Set(validSizeForTypes[type]).has(size)
}
  
function getImageFileEnding(type, size){
	switch (type) {
	  case 'avatar':
		  return isValidSizeForTypeSet(type, size) ? `avatar-${size}.webp` : 'avatar-md.webp'
	  case 'cover':
		  return isValidSizeForTypeSet(type, size) ? `cover-${size}.webp` : 'cover-md.webp'
	  case 'banner':
		  return isValidSizeForTypeSet(type, size) ? `banner-${size}.webp` : 'banner-md.webp'
	  case 'thumbnail':
		  return 'thumbnail.webp'
	  case 'story':
		  return 'story.webp'
	}
}
export function getImageUrl({ image, type, variant, token }){
  if (!image) { return }
  const variantKey = getImageVariantKey({ type, variant })
  if (token) {
	return image['base_url'] + image[variantKey] + `?token=${token}`;
  }
  return image['base_url'] + image[variantKey];
}

function getImageVariantKey({ type, variant }){
	switch(type){
		case 'cover':
		case 'banner':
		case 'avatar':
			return `${type}_${variant}`;
		case 'story':
		case 'thumbnail':
			return type;
		default:
			throw new Error('getImageVariantKey - type is invalid');
	}
}
