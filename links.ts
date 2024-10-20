import { LinkType } from '../shared/graphql/types.js';

const HTTPS: string = "https://";

export function getPrettyLinkType(linkType: LinkType): string {
  switch (linkType) {
    case "KO_FI":
      return "Ko-fi"
    default:
      return linkType.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase() }).join(" ")
  }
}

export function getLinkBase(linkType: LinkType): string | undefined {
  switch (linkType) {
    case LinkType.Instagram:
      return "instagram.com/"
    case LinkType.Youtube:
      return "youtube.com/"
    case LinkType.Tiktok:
      return "tiktok.com/@"
    case LinkType.Patreon:
      return "patreon.com/"
    case LinkType.KoFi:
      return "ko-fi.com/"
    case LinkType.Twitter:
      return "twitter.com/"
    case LinkType.Facebook:
      return "facebook.com/"
    case LinkType.Twitch:
      return "twitch.tv/"
    case LinkType.Snapchat:
      return "snapchat.com/add/"
    case LinkType.Reddit:
      return "reddit.com/r/"
    case LinkType.Discord:
      return "discord.gg/"
    case LinkType.Telegram:
      return "t.me/"
    case LinkType.Pinterest:
      return "pinterest.com/"
    case LinkType.Tumblr:
      return "tumblr.com/"
    case LinkType.Spotify:
      return "open.spotify.com/"
    case LinkType.Soundcloud:
      return "soundcloud.com/"
    case LinkType.Bandcamp:
      return "bandcamp.com/"
    case LinkType.Vimeo:
      return "vimeo.com/"
    case LinkType.Wechat:
      return "wechat.com/"
    case LinkType.Whatsapp:
      return "chat.whatsapp.com/"
    case LinkType.Website:
    case LinkType.MerchStore:
      return HTTPS
    case LinkType.Mastodon:
      return "@"
    case LinkType.Linktree:
      return "linktr.ee/"
    case LinkType.Etsy:
      return "etsy.com/shop/"
    case LinkType.Email:
    default:
      return 
  }
}

export function getBaseLinkForSchema(linkType: LinkType, linkValue = ''): string | undefined {
  const linkbase = getLinkBase(linkType);
  if (linkType === LinkType.Email) { return }
  else if (linkType === LinkType.Mastodon) {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return `${HTTPS}${mastodonSplitValues[1]}/@`
  } else if (linkbase === HTTPS) return linkbase
  else return `${HTTPS}${linkbase}`
}

export function getLinkValueForSchema(linkType: LinkType, linkValue: string): string | undefined {
  if (linkType === LinkType.Mastodon) {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return mastodonSplitValues[0];
  } else { return linkValue; }
}

export function getFullLink(linkType: LinkType, linkValue: string): string | undefined {
  const linkbase = getLinkBase(linkType)
  if (linkType === LinkType.Email) return `mailto:${linkValue}`
  else if (linkType === LinkType.Mastodon) {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return `${HTTPS}${mastodonSplitValues[0]}/@${mastodonSplitValues[1]}`
  } else if (linkbase === HTTPS) return `${linkbase}${linkValue}`
  else return `${HTTPS}${linkbase}${linkValue}`
}

export const skipLinkBaseSet = new Set([LinkType.Email])
