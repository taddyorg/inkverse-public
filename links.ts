const HTTPS: string = "https://";

export enum LinkType {
  INSTAGRAM = "INSTAGRAM",
  YOUTUBE = "YOUTUBE",
  TIKTOK = "TIKTOK",
  PATREON = "PATREON",
  KO_FI = "KO_FI", 
  EMAIL = "EMAIL",
  TWITTER = "TWITTER",
  MASTODON = "MASTODON",
  FACEBOOK = "FACEBOOK",
  WEBSITE = "WEBSITE",
  MERCH_STORE = "MERCH_STORE",
  TWITCH = "TWITCH",
  SNAPCHAT = "SNAPCHAT",
  REDDIT = "REDDIT",
  DISCORD = "DISCORD",
  TELEGRAM = "TELEGRAM",
  PINTEREST = "PINTEREST",
  TUMBLR = "TUMBLR",
  SPOTIFY = "SPOTIFY",
  SOUNDCLOUD = "SOUNDCLOUD",
  BANDCAMP = "BANDCAMP",
  VIMEO = "VIMEO",
  WECHAT = "WECHAT",
  WHATSAPP = "WHATSAPP",
  LINKTREE = "LINKTREE",
  ETSY = "ETSY",
}

export function getPrettyLinkType(linkType: LinkType): string {
  switch (linkType) {
    case "KO_FI":
      return "Ko-fi"
    default:
      return linkType.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase() }).join(" ")
  }
}

export function getLinkBase(linkType: LinkType): string | undefined {
  switch (linkType) {
    case "INSTAGRAM":
      return "instagram.com/"
    case "YOUTUBE":
      return "youtube.com/"
    case "TIKTOK":
      return "tiktok.com/@"
    case "PATREON":
      return "patreon.com/"
    case "KO_FI":
      return "ko-fi.com/"
    case "TWITTER":
      return "twitter.com/"
    case "FACEBOOK":
      return "facebook.com/"
    case "TWITCH":
      return "twitch.tv/"
    case "SNAPCHAT":
      return "snapchat.com/add/"
    case "REDDIT":
      return "reddit.com/r/"
    case "DISCORD":
      return "discord.gg/"
    case "TELEGRAM":
      return "t.me/"
    case "PINTEREST":
      return "pinterest.com/"
    case "TUMBLR":
      return "tumblr.com/"
    case "SPOTIFY":
      return "open.spotify.com/"
    case "SOUNDCLOUD":
      return "soundcloud.com/"
    case "BANDCAMP":
      return "bandcamp.com/"
    case "VIMEO":
      return "vimeo.com/"
    case "WECHAT":
      return "wechat.com/"
    case "WHATSAPP":
      return "chat.whatsapp.com/"
    case "WEBSITE":
    case "MERCH_STORE":
      return HTTPS
    case "MASTODON":
      return "@"
    case "LINKTREE":
      return "linktr.ee/"
    case "ETSY":
      return "etsy.com/shop/"
    case "EMAIL":
    default:
      return 
  }
}

export function getBaseLinkForSchema(linkType: LinkType, linkValue = ''): string | undefined {
  const linkbase = getLinkBase(linkType);
  if (linkType === LinkType.EMAIL) { return }
  else if (linkType === LinkType.MASTODON) {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return `${HTTPS}${mastodonSplitValues[1]}/@`
  } else if (linkbase === HTTPS) return linkbase
  else return `${HTTPS}${linkbase}`
}

export function getLinkValueForSchema(linkType: LinkType, linkValue: string): string | undefined {
  if (linkType === LinkType.MASTODON) {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return mastodonSplitValues[0];
  } else { return linkValue; }
}

export function getFullLink(linkType: LinkType, linkValue: string): string | undefined {
  const linkbase = getLinkBase(linkType)
  if (linkType === LinkType.EMAIL) return `mailto:${linkValue}`
  else if (linkType === LinkType.MASTODON) {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return `${HTTPS}${mastodonSplitValues[0]}/@${mastodonSplitValues[1]}`
  } else if (linkbase === HTTPS) return `${linkbase}${linkValue}`
  else return `${HTTPS}${linkbase}${linkValue}`
}

export const skipLinkBaseSet = new Set(["EMAIL"])