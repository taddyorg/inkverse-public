import type { UUID } from "crypto";

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

export type ComicSeries = {
  id?: number;
  uuid: UUID;
  createdAt: Date;
  updatedAt?: Date;
  source?: string;
  sssUrl: string;
  sssOwnerName?: string;
  sssOwnerPublicEmail?: string;
  hash?: string;
  websubHash?: string;
  issuesHash?: string;
  creatorsHash?: string;
  datePublished?: number;
  name?: string;
  description?: string;
  coverImage?: Record<string, string>;
  bannerImage?: Record<string, string>;
  thumbnailImage?: Record<string, string>;
  seriesType?: string;
  language?: string;
  contentRating?: string;
  genre0?: string;
  genre1?: string;
  genre2?: string;
  tags?: string[];
  shortUrl: string;
  copyright?: string;
  isCompleted?: boolean;
  isBlocked?: boolean;
  status?: string;
  seriesLayout?: string;
  hostingProviderUuid?: UUID;
  scopesForExclusiveContent?: string[];
}

export const getCoverImageUrl = (series: ComicSeries, variant: ComicSeriesImageVariant = ComicSeriesImageVariant.MEDIUM): string | undefined => {
  if (!series.coverImage) { return undefined; }
  
  const baseUrl = series.coverImage['base_url'];
  const imagePath = series.coverImage[ComicSeriesImageType.COVER + `_${variant}`];

  if (!baseUrl || !imagePath) { return undefined; }

  return baseUrl + imagePath;
};

export const getBannerImageUrl = (series: ComicSeries, variant: ComicSeriesImageVariant = ComicSeriesImageVariant.MEDIUM): string | undefined => {
  if (!series.bannerImage) { return undefined; }
  
  const baseUrl = series.bannerImage['base_url'];
  const imagePath = series.bannerImage[ComicSeriesImageType.BANNER + `_${variant}`];

  if (!baseUrl || !imagePath) { return undefined; }

  return baseUrl + imagePath;

};

export const getThumbnailImageUrl = (series: ComicSeries): string | undefined => {
  if (!series.thumbnailImage) { return undefined; }
  
  const baseUrl = series.thumbnailImage['base_url'];
  const imagePath = series.thumbnailImage[ComicSeriesImageType.THUMBNAIL];

  if (!baseUrl || !imagePath) { return undefined; }

  return baseUrl + imagePath;
};