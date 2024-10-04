const allSeriesStatusTypes = [
  "ONGOING",
  "HIATUS",
  "COMPLETED",
  "CANCELLED",
  "ANNOUNCED",
  "UNDER_REVISION",
]

const allSeriesStatusTypesSet = new Set(allSeriesStatusTypes)

function getPrettySeriesStatus(seriesStatus){
  if (!seriesStatus) return
  return seriesStatus.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).join(" ")
}

function safeSeriesStatus(seriesStatus){
  if (!seriesStatus) return
  const item = seriesStatus.toUpperCase().trim()
  if (!allSeriesStatusTypesSet.has(item)){ throw new Error("Invalid Series Status") }
  return item
}

module.exports = {
  allSeriesStatusTypes,
  allSeriesStatusTypesSet,
  getPrettySeriesStatus,
  safeSeriesStatus,
}