function getImageUrl({ image, type, variant, token }){
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

function extractId(query) {
  const removedFirstPart = query.slice(2); // /id{id}"
  return removedFirstPart.split('-')[0];
}

function getFileType(url) {
  return url.split(/\#|\?/)[0].split('.').pop().trim();
}

function isStringEmptyOrBlank(text) {
  return (!text || text === "")
}

function isAValidEmail(email) {
  return /^\S+@\S+/.test(email)
}

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
  
const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
}, {});
  
const validSizeForTypes = {
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
  
function getImageUrl({ imageUrl, type, size }){
	if (!imageUrl) { return }
	return `${imageUrl}${getImageFileEnding(type, size)}`
}

module.exports = {
  getImageUrl,
  getImageVariantKey,
  extractId,
  getFileType,
  isStringEmptyOrBlank,
  isAValidEmail,
  isValidHttpUrl,
  arrayToObject,
  getImageFileEnding,
  isValidSizeForTypeSet,
}