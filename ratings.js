const allRatingsForType = {
  COMICSERIES: [
    "COMICSERIES_BABY",
    "COMICSERIES_KIDS",
    "COMICSERIES_TEENS",
    "COMICSERIES_MATURE_TEENS",
    "COMICSERIES_ADULTS",
    "COMICSERIES_EROTICA"
  ]
}

const allowedRatingsForType = new Set([
  "COMICSERIES_BABY",
  "COMICSERIES_KIDS",
  "COMICSERIES_TEENS",
  "COMICSERIES_MATURE_TEENS",
  "COMICSERIES_ADULTS",
])

const allRatingsSetForType = (type) => {
  return new Set(allRatingsForType[type])
}

function getPrettyRating(rating){
  if (!rating) return

  switch(rating){
    case "COMICSERIES_BABY":
      return "Baby (Ages 0-5)"
    case "COMICSERIES_KIDS":
      return "Kids (Ages 6+)"
    case "COMICSERIES_TEENS":
      return "Teens (Ages 13+)"
    case "COMICSERIES_MATURE_TEENS":
      return "Mature Teens (Ages 15+)"
    case "COMICSERIES_ADULTS":
      return "Adults (Ages 18+)"
    default:
      return rating.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).slice(1).join(" ")
  }
}

function safeContentRating(rating, taddyType){
  if (!rating) return
  const item = rating.toUpperCase().trim()
  if (!allRatingsSetForType(taddyType).has(item)){ throw new Error("Invalid Content Rating") }
  return item
}

module.exports = {
  allRatingsForType,
  allRatingsSetForType,
  allowedRatingsForType,
  getPrettyRating,
  safeContentRating,
};