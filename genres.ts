import { Genre } from '../shared/graphql/types.js';

export function getPrettyGenre(genre: Genre): string {
  switch(genre){
    case Genre.ComicseriesLgbtq:
      return "LGBTQ+"
    case Genre.ComicseriesBl:
      return "BL"
    case Genre.ComicseriesGl:
      return "GL"
    case Genre.ComicseriesSciFi:
      return "Sci-Fi"
    default:
      return genre.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1).toLowerCase()} ).slice(1).join(" ")
  }
}