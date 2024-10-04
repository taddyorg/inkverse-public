const allRolesForType = {
  "COMICSERIES": [
    "COMICSERIES_ARTIST",
    "COMICSERIES_ARTIST_PENCILER",
    "COMICSERIES_ARTIST_INKER",
    "COMICSERIES_ARTIST_COLORIST",
    "COMICSERIES_ARTIST_LETTERER",
    "COMICSERIES_WRITER",
    "COMICSERIES_PRODUCER",
    "COMICSERIES_EDITOR",
    "COMICSERIES_TRANSLATOR",
  ]
}

function getPrettyRoleName(role){
  if (!role) return

  switch(role){
    case "COMICSERIES_ARTIST_PENCILER":
      return "Penciler (Artist)"
    case "COMICSERIES_ARTIST_INKER":
      return "Inker (Artist)"
    case "COMICSERIES_ARTIST_COLORIST":
      return "Colorist (Artist)"
    case "COMICSERIES_ARTIST_LETTERER":
      return "Letterer (Artist)"
    default:
      return role.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase()} ).slice(1).join(" ")
  }
}

function getRoleDescription(role){
  if (!role) return

  switch(role){
    case "COMICSERIES_ARTIST":
      return "An individual who creates artwork for the comic."
    case "COMICSERIES_ARTIST_PENCILER":
      return "An individual who draws the primary narrative artwork."
    case "COMICSERIES_ARTIST_INKER":
      return "An individual who traces over pencil drawings to provide a final line."  
    case "COMICSERIES_ARTIST_COLORIST":
      return "An individual who adds color to inked drawings."
    case "COMICSERIES_ARTIST_LETTERER":
      return "An individual who adds lettering, including speech balloons and sound effects"
    case "COMICSERIES_WRITER":
      return "An individual who writes the story or dialogue for the comic."
    case "COMICSERIES_PRODUCER":
      return "An individual who is responsible for helping craft the creative direction and overall final production."
    case "COMICSERIES_EDITOR":
      return "An individual who is responsible for reviewing and editing the comic to ensure the story and artwork are consistent, creative & engaging."
    case "COMICSERIES_TRANSLATOR":
      return "An individual who converts dialog from one language to another"
    default:
      return
  }
}

const allRolesSetForType = (type) => {
  return new Set(allRolesForType[type])
}

module.exports = {
  allRolesForType,
  getPrettyRoleName,
  getRoleDescription,
  allRolesSetForType,
};