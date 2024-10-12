export enum Rating {
  COMICSERIES_BABY = "COMICSERIES_BABY",
  COMICSERIES_KIDS = "COMICSERIES_KIDS",
  COMICSERIES_TEENS = "COMICSERIES_TEENS",
  COMICSERIES_MATURE_TEENS = "COMICSERIES_MATURE_TEENS",
  COMICSERIES_ADULTS = "COMICSERIES_ADULTS",
  COMICSERIES_EROTICA = "COMICSERIES_EROTICA",
}

export const allowedRatingsForType = new Set([
  Rating.COMICSERIES_BABY,
  Rating.COMICSERIES_KIDS,
  Rating.COMICSERIES_TEENS,
  Rating.COMICSERIES_MATURE_TEENS,
  Rating.COMICSERIES_ADULTS,
])

export function getPrettyRating(rating: Rating): string {
  switch(rating){
    case Rating.COMICSERIES_BABY:
      return "Baby (Ages 0-5)"
    case Rating.COMICSERIES_KIDS:
      return "Kids (Ages 6+)"
    case Rating.COMICSERIES_TEENS:
      return "Teens (Ages 13+)"
    case Rating.COMICSERIES_MATURE_TEENS:
      return "Mature Teens (Ages 15+)"
    case Rating.COMICSERIES_ADULTS:
      return "Adults (Ages 18+)"
    default:
      return rating.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).slice(1).join(" ")
  }
}