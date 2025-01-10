import type { ComicSeries } from '../shared/graphql/types.js';

enum ComicSeriesImageType {
  COVER = "cover",
  BANNER = "banner",
  THUMBNAIL = "thumbnail",
}

enum ComicSeriesImageVariant {
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export const getCoverImageUrl = (coverImageAsString: string | null | undefined, variant: ComicSeriesImageVariant | undefined = ComicSeriesImageVariant.MEDIUM): string | null => {
  try {
    if (!coverImageAsString) { throw new Error('getCoverImageUrl - coverImageAsString is null'); }
  
    const coverImage = JSON.parse(coverImageAsString) as Record<string, string>;
    const baseUrl = coverImage['base_url'];
    const imagePath = coverImage[ComicSeriesImageType.COVER + `_${variant}`];

    if (!baseUrl || !imagePath) { throw new Error('getCoverImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing coverImageAsString', error);
    return null;
  }
};

export const getBannerImageUrl = (bannerImageAsString: string | null | undefined, variant: ComicSeriesImageVariant | undefined = ComicSeriesImageVariant.MEDIUM): string | null => {
  try {
    if (!bannerImageAsString) { throw new Error('getBannerImageUrl - bannerImageAsString is null'); }
  
    const bannerImage = JSON.parse(bannerImageAsString) as Record<string, string>;
    const baseUrl = bannerImage['base_url'];
    const imagePath = bannerImage[ComicSeriesImageType.BANNER + `_${variant}`];

    if (!baseUrl || !imagePath) { throw new Error('getBannerImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing bannerImageAsString', error);
    return null;
  }
};

export const getThumbnailImageUrl = (thumbnailImageAsString: string | null | undefined): string | null => {
  try {
    if (!thumbnailImageAsString) { throw new Error('getThumbnailImageUrl - thumbnailImageAsString is null'); }
  
    const thumbnailImage = JSON.parse(thumbnailImageAsString) as Record<string, string>;
    const baseUrl = thumbnailImage['base_url'];
    const imagePath = thumbnailImage[ComicSeriesImageType.THUMBNAIL];

    if (!baseUrl || !imagePath) { throw new Error('getThumbnailImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing thumbnailImageAsString', error);
    return null;
  }
};