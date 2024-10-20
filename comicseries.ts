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

export const getCoverImageUrl = (series: ComicSeries, variant: ComicSeriesImageVariant | undefined = ComicSeriesImageVariant.MEDIUM): string | null => {
  try {
    if (!series.coverImageAsString) { throw new Error('getCoverImageUrl - coverImageAsString is null'); }
  
    const coverImage = JSON.parse(series.coverImageAsString) as Record<string, string>;
    const baseUrl = coverImage['base_url'];
    const imagePath = coverImage[ComicSeriesImageType.COVER + `_${variant}`];

    if (!baseUrl || !imagePath) { throw new Error('getCoverImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing coverImageAsString', error);
    return null;
  }
};

export const getBannerImageUrl = (series: ComicSeries, variant: ComicSeriesImageVariant | undefined = ComicSeriesImageVariant.MEDIUM): string | null => {
  try {
    if (!series.bannerImageAsString) { throw new Error('getBannerImageUrl - bannerImageAsString is null'); }
  
    const bannerImage = JSON.parse(series.bannerImageAsString) as Record<string, string>;
    const baseUrl = bannerImage['base_url'];
    const imagePath = bannerImage[ComicSeriesImageType.BANNER + `_${variant}`];

    if (!baseUrl || !imagePath) { throw new Error('getBannerImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing bannerImageAsString', error);
    return null;
  }
};

export const getThumbnailImageUrl = (series: ComicSeries): string | null => {
  try {
    if (!series.thumbnailImageAsString) { throw new Error('getThumbnailImageUrl - thumbnailImageAsString is null'); }
  
    const thumbnailImage = JSON.parse(series.thumbnailImageAsString) as Record<string, string>;
    const baseUrl = thumbnailImage['base_url'];
    const imagePath = thumbnailImage[ComicSeriesImageType.THUMBNAIL];

    if (!baseUrl || !imagePath) { throw new Error('getThumbnailImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing thumbnailImageAsString', error);
    return null;
  }
};