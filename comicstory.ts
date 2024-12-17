import type { ComicStory } from '../shared/graphql/types.js';

enum ComicStoryImageType {
  STORY = "story",
}

export const getStoryImageUrl = (storyImageAsString: string | undefined, token?: string): string | null => {
  try {
    if (!storyImageAsString) { throw new Error('getStoryImageUrl - storyImageAsString is null'); }
  
    const storyImage = JSON.parse(storyImageAsString) as Record<string, string>;
    const baseUrl = storyImage['base_url'];
    const imagePath = storyImage[ComicStoryImageType.STORY];

    if (!baseUrl || !imagePath) { throw new Error('getStoryImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath + (token ? `?token=${token}` : '');
  } catch (error) {
    console.error('Error parsing storyImageAsString', error);
    return null;
  }
};