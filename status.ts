export enum ComicSeriesStatus {
  ONGOING = "ONGOING",
  HIATUS = "HIATUS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  ANNOUNCED = "ANNOUNCED",
  UNDER_REVISION = "UNDER_REVISION",
}

export function getPrettySeriesStatus(seriesStatus: ComicSeriesStatus): string {
  return seriesStatus.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).join(" ")
}