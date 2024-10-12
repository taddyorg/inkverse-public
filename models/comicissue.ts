import type { UUID } from "crypto";

enum ComicIssueImageType {
  BANNER = "banner",
  THUMBNAIL = "thumbnail",
}

enum ComicIssueImageVariant {
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export type ComicIssue = {
  id?: number;
  uuid: UUID;
  createdAt: Date;
  updatedAt?: Date;
  hash?: string;
  storiesHash?: string;
  datePublished?: number;
  name?: string;
  creatorNote?: string;
  seriesUuid: UUID;
  bannerImage?: Record<string, string>;
  thumbnailImage?: Record<string, string>;
  isRemoved?: boolean;
  isBlocked?: boolean;
  position?: number;
  pushNotificationMessage?: string;
  scopesForExclusiveContent?: string[];
  dateExclusiveContentIsAvailable?: Date;
}

export const getBannerImageUrl = (issue: ComicIssue, variant: ComicIssueImageVariant = ComicIssueImageVariant.MEDIUM): string | undefined => {
  if (!issue.bannerImage) { return undefined; }
  
  const baseUrl = issue.bannerImage['base_url'];
  const imagePath = issue.bannerImage[ComicIssueImageType.BANNER + `_${variant}`];

  if (!baseUrl || !imagePath) { return undefined; }

  return baseUrl + imagePath;
};

export const getThumbnailImageUrl = (issue: ComicIssue): string | undefined => {
  if (!issue.thumbnailImage) { return undefined; }
  
  const baseUrl = issue.thumbnailImage['base_url'];
  const imagePath = issue.thumbnailImage[ComicIssueImageType.THUMBNAIL];

  if (!baseUrl || !imagePath) { return undefined; }

  return baseUrl + imagePath;
};