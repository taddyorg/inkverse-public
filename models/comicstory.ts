import type { UUID } from "crypto";

enum ComicStoryImageType {
  STORY = "story",
}

export type ComicStory = {
  id?: number;
  uuid: UUID;
  createdAt?: Date;
  updatedAt?: Date;
  hash?: string;
  seriesUuid: UUID;
  issueUuid: UUID;
  position?: number;
  width?: number;
  height?: number;
  storyImage?: Record<string, string>;
  isRemoved?: boolean;
}

export const getStoryImageUrl = (story: ComicStory, token?: string): string | undefined => {
  if (!story.storyImage) { return undefined; }
  
  const baseUrl = story.storyImage['base_url'];
  const imagePath = story.storyImage[ComicStoryImageType.STORY];

  if (!baseUrl || !imagePath) { return undefined; }

  return baseUrl + imagePath + (token ? `?token=${token}` : '');
};