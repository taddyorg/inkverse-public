import type { Creator } from '../shared/graphql/types.js';

enum CreatorImageType {
  AVATAR = "avatar",
}

enum CreatorImageVariant {
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export const getAvatarImageUrl = (creator: Creator, variant: CreatorImageVariant = CreatorImageVariant.MEDIUM): string | null => {
  try {
    if (!creator.avatarImageAsString) { throw new Error('getAvatarImageUrl - avatarImageAsString is null'); }
  
    const avatarImage = JSON.parse(creator.avatarImageAsString) as Record<string, string>;
    const baseUrl = avatarImage['base_url'];
    const imagePath = avatarImage[CreatorImageType.AVATAR + `_${variant}`];

    if (!baseUrl || !imagePath) { throw new Error('getAvatarImageUrl - baseUrl or imagePath is null'); }

    return baseUrl + imagePath;
  } catch (error) {
    console.error('Error parsing avatarImageAsString', error);
    return null;
  }
};
