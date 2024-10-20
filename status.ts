import { SeriesStatus } from "../shared/graphql/types.js";

export function getPrettySeriesStatus(seriesStatus: SeriesStatus): string {
  return seriesStatus.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).join(" ")
}