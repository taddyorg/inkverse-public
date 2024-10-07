export enum ComicSeriesRole{
  ARTIST = "ARTIST",
  ARTIST_PENCILER = "ARTIST_PENCILER",
  ARTIST_INKER = "ARTIST_INKER",
  ARTIST_COLORIST = "ARTIST_COLORIST",
  ARTIST_LETTERER = "ARTIST_LETTERER",
  WRITER = "WRITER",
  PRODUCER = "PRODUCER",
  EDITOR = "EDITOR",
  TRANSLATOR = "TRANSLATOR",
}

export function getPrettyRoleName(role: ComicSeriesRole): string {
  switch(role){
    case ComicSeriesRole.ARTIST_PENCILER:
      return "Penciler (Artist)"
    case ComicSeriesRole.ARTIST_INKER:
      return "Inker (Artist)"
    case ComicSeriesRole.ARTIST_COLORIST:
      return "Colorist (Artist)"
    case ComicSeriesRole.ARTIST_LETTERER:
      return "Letterer (Artist)"
    default:
      return role.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).slice(1).join(" ")
  }
}

export function getRoleDescription(role: ComicSeriesRole): string {
  switch(role){
    case ComicSeriesRole.ARTIST:
      return "An individual who creates artwork for the comic."
    case ComicSeriesRole.ARTIST_PENCILER:
      return "An individual who draws the primary narrative artwork."
    case ComicSeriesRole.ARTIST_INKER:
      return "An individual who traces over pencil drawings to provide a final line."  
    case ComicSeriesRole.ARTIST_COLORIST:
      return "An individual who adds color to inked drawings."
    case ComicSeriesRole.ARTIST_LETTERER:
      return "An individual who adds lettering, including speech balloons and sound effects"
    case ComicSeriesRole.WRITER:
      return "An individual who writes the story or dialogue for the comic."
    case ComicSeriesRole.PRODUCER:
      return "An individual who is responsible for helping craft the creative direction and overall final production."
    case ComicSeriesRole.EDITOR:
      return "An individual who is responsible for reviewing and editing the comic to ensure the story and artwork are consistent, creative & engaging."
    case ComicSeriesRole.TRANSLATOR:
      return "An individual who converts dialog from one language to another"
  }
}