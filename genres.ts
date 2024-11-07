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

export const GenreSet = new Set(Object.values(Genre));

export function safeGenresArray(genres?: string[]): Genre[] | null {
  if (!genres || !Array.isArray(genres)) return null;
  return genres.filter(genre => GenreSet.has(genre as Genre)).map(genre => genre as Genre);
}