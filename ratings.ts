import { ContentRating } from '../shared/graphql/types.js';

export const allowedRatingsForType = new Set([
  ContentRating.ComicseriesBaby,
  ContentRating.ComicseriesKids,
  ContentRating.ComicseriesTeens,
  ContentRating.ComicseriesMatureTeens,
  ContentRating.ComicseriesAdults,
])

const allRatingsSet: Set<ContentRating> = new Set(Object.values(ContentRating))

export function safeContentRating(rating: ContentRating | null): ContentRating | null {
  if (!rating) return null;
  else if (!allRatingsSet.has(rating)) return null;
  return rating;
}

export function getPrettyRating(rating: ContentRating): string {
  switch(rating){
    case ContentRating.ComicseriesBaby:
      return "Baby (Ages 0-5)"
    case ContentRating.ComicseriesKids:
      return "Kids (Ages 6+)"
    case ContentRating.ComicseriesTeens:
      return "Teens (Ages 13+)"
    case ContentRating.ComicseriesMatureTeens:
      return "Mature Teens (Ages 15+)"
    case ContentRating.ComicseriesAdults:
      return "Adults (Ages 18+)"
    default:
      return rating.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).slice(1).join(" ")
  }
}