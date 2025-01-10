import type { ComicIssue } from '../shared/graphql/types.js';

enum ComicIssueImageType {
  BANNER = "banner",
  THUMBNAIL = "thumbnail",
}

enum ComicIssueImageVariant {
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export const getBannerImageUrl = (bannerImageAsString: string | null | undefined, variant: ComicIssueImageVariant | undefined = ComicIssueImageVariant.MEDIUM): string | null => {
  try {
    if (!bannerImageAsString) { throw new Error('getBannerImageUrl - bannerImageAsString is null'); }

    const bannerImage = JSON.parse(bannerImageAsString) as Record<string, string>;

    const baseUrl = bannerImage['base_url'];
    const imagePath = bannerImage[ComicIssueImageType.BANNER + `_${variant}`];

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
    const imagePath = thumbnailImage[ComicIssueImageType.THUMBNAIL];

    if (!baseUrl || !imagePath) { throw new Error('getThumbnailImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing thumbnailImageAsString', error);
    return null;
  }
};
