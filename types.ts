export enum ComicSeriesType {
  WEBTOON = "WEBTOON",
  MANGA = "MANGA",
  MANHWA = "MANHWA",
  MANHUA = "MANHUA",
  AMERICAN_STYLE_COMIC = "AMERICAN_STYLE_COMIC",
  ANTHOLOGY = "ANTHOLOGY",
  GRAPHIC_NOVEL = "GRAPHIC_NOVEL",
  ONE_SHOT = "ONE_SHOT",
}

export function getPrettySeriesType(seriesType: ComicSeriesType): string {
  return seriesType.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).join(" ")
}