const allSeriesTypes = {
  "COMICSERIES": [
    "WEBTOON",
    "MANGA",
    "MANHWA",
    "MANHUA",
    "AMERICAN_STYLE_COMIC",
    "ANTHOLOGY",
    "GRAPHIC_NOVEL",
    "ONE_SHOT",
  ]
}

const allSeriesTypesSetForType = (type) => {
  return new Set(allSeriesTypes[type])
}

function getPrettySeriesType(seriesType){
  if (!seriesType) return
  return seriesType.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).join(" ")
}

function safeSeriesType(seriesType, taddyType){
  if (!seriesType) return
  const item = seriesType.toUpperCase().trim()
  if (!allSeriesTypesSetForType(taddyType).has(item)){ throw new Error("Invalid SeriesType") }
  return item
}

module.exports = {
  allSeriesTypesSetForType,
  getPrettySeriesType,
  safeSeriesType,
}