const allGenresForType = {
  COMICSERIES: [
    "COMICSERIES_ACTION",
    "COMICSERIES_COMEDY",
    "COMICSERIES_CRIME",
    "COMICSERIES_DRAMA",
    "COMICSERIES_DYSTOPIA",
    "COMICSERIES_EDUCATIONAL",
    "COMICSERIES_FANTASY",
    "COMICSERIES_HIGH_SCHOOL",
    "COMICSERIES_HISTORICAL",
    "COMICSERIES_HORROR",
    "COMICSERIES_HAREM",
    "COMICSERIES_ISEKAI",
    "COMICSERIES_MYSTERY",
    "COMICSERIES_ROMANCE",
    "COMICSERIES_SCI_FI",
    "COMICSERIES_SLICE_OF_LIFE",
    "COMICSERIES_SUPERHERO",
    "COMICSERIES_SUPERNATURAL",
    "COMICSERIES_BL",
    "COMICSERIES_GL",
    "COMICSERIES_LGBTQ",
    "COMICSERIES_THRILLER",
    "COMICSERIES_ZOMBIES",
    "COMICSERIES_POST_APOCALYPTIC",
    "COMICSERIES_SPORTS",
    "COMICSERIES_ANIMALS",
    "COMICSERIES_GAMING",
  ]
}

const allGenresSetForType = (type) => {
  return new Set(allGenresForType[type])
}

function getPrettyGenre(genre){
  if (!genre) return

  switch(genre){
    case 'COMICSERIES_LGBTQ':
      return "LGBTQ+"
    case 'COMICSERIES_BL':
      return "BL"
    case 'COMICSERIES_GL':
      return "GL"
    case 'COMICSERIES_SCI_FI':
      return "Sci-Fi"
    default:
      return genre.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).slice(1).join(" ")
  }
}

function safeGenresArray(array, taddyType){
  if (!array) return
  const uppercaseArray = array.map(item => item.toUpperCase().trim())
  const isValid = uppercaseArray.every(item => allGenresSetForType(taddyType).has(item))
  if (!isValid){ throw new Error("Contains an Invalid Genre") }
  return uppercaseArray
}

module.exports = {
  allGenresForType,
  allGenresSetForType,
  getPrettyGenre,
  safeGenresArray,
}