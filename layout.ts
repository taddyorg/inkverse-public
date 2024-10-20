import { ComicSeriesType } from '../shared/graphql/types.js';

export function getPrettyLayoutType(layoutType: ComicSeriesType): string {
  return layoutType.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).join(" ")
}