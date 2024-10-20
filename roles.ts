import { ContentRole } from "../shared/graphql/types.js";

export function getPrettyRoleName(role: ContentRole): string {
  switch(role){
    case ContentRole.ComicseriesArtistPenciler:
      return "Penciler (Artist)"
    case ContentRole.ComicseriesArtistInker:
      return "Inker (Artist)"
    case ContentRole.ComicseriesArtistColorist:
      return "Colorist (Artist)"
    case ContentRole.ComicseriesArtistLetterer:
      return "Letterer (Artist)"
    default:
      return role.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).slice(1).join(" ")
  }
}

export function getRoleDescription(role: ContentRole): string {
  switch(role){
    case ContentRole.ComicseriesArtist:
      return "An individual who creates artwork for the comic."
    case ContentRole.ComicseriesArtistPenciler:
      return "An individual who draws the primary narrative artwork."
    case ContentRole.ComicseriesArtistInker:
      return "An individual who traces over pencil drawings to provide a final line."  
    case ContentRole.ComicseriesArtistColorist:
      return "An individual who adds color to inked drawings."
    case ContentRole.ComicseriesArtistLetterer:
      return "An individual who adds lettering, including speech balloons and sound effects"
    case ContentRole.ComicseriesWriter:
      return "An individual who writes the story or dialogue for the comic."
    case ContentRole.ComicseriesProducer:
      return "An individual who is responsible for helping craft the creative direction and overall final production."
    case ContentRole.ComicseriesEditor:
      return "An individual who is responsible for reviewing and editing the comic to ensure the story and artwork are consistent, creative & engaging."
    case ContentRole.ComicseriesTranslator:
      return "An individual who converts dialog from one language to another"
  }
}