const allLayoutTypes = {
  COMICSERIES: [
    "VERTICAL_SCROLL_TOP_TO_BOTTOM",
    "RIGHT_TO_LEFT",
    "LEFT_TO_RIGHT",
    "PAGE",
  ]
}

const allLayoutTypesSetForType = (type) => {
  return new Set(allLayoutTypes[type])
}

function getPrettyLayoutType(layoutType){
  if (!layoutType) return
  return layoutType.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).join(" ")
}

function safeLayoutType(layoutType, taddyType){
  if (!layoutType) return
  const item = layoutType.toUpperCase().trim()
  if (!allLayoutTypesSetForType(taddyType).has(item)){ throw new Error("Invalid layoutType") }
  return item
}

module.exports = {
  allLayoutTypesSetForType,
  getPrettyLayoutType,
  safeLayoutType,
}
