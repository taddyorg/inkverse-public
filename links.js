const HTTPS = "https://";

const allLinkTypes = [
  "INSTAGRAM",
  "YOUTUBE",
  "TIKTOK",
  "PATREON",
  "KO_FI",
  "EMAIL",
  "TWITTER",
  "MASTODON",
  "FACEBOOK",
  "WEBSITE",
  "MERCH_STORE",
  "TWITCH",
  "SNAPCHAT",
  "REDDIT",
  "DISCORD",
  "TELEGRAM",
  "PINTEREST",
  "TUMBLR",
  "SPOTIFY",
  "SOUNDCLOUD",
  "BANDCAMP",
  "VIMEO",
  "WECHAT",
  "WHATSAPP",
  "LINKTREE",
  "ETSY",
]

const allLinkTypesSet = new Set(allLinkTypes)

function getPrettyLinkType(linkType) {
  if (!linkType) return

  switch (linkType) {
    case "KO_FI":
      return "Ko-fi"
    default:
      return linkType.split("_").map(word => { return word[0].toUpperCase() + word.slice(1).toLowerCase() }).join(" ")
  }
}

function getLinkBase(linkType) {
  if (!linkType) return HTTPS

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

function getBaseLinkForSchema(linkType, linkValue = '') {
  const linkbase = getLinkBase(linkType);
  if (linkType === "EMAIL") return;
  else if (linkType === "MASTODON") {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return `${HTTPS}${mastodonSplitValues[1]}/@`
  } else if (linkbase === HTTPS) return linkbase
  else return `${HTTPS}${linkbase}`
}

function getLinkValueForSchema(linkType, linkValue) {
  if (linkType === "MASTODON") {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return mastodonSplitValues[0];
  } else { return linkValue; }
}

function getFullLink(linkType, linkValue) {
  const linkbase = getLinkBase(linkType)
  if (linkType === "EMAIL") return `mailto:${linkValue}`
  else if (linkType === "MASTODON") {
    const mastodonSplitValues = linkValue.split("@")
    if (mastodonSplitValues.length !== 2) { return }
    return `${HTTPS}${mastodonSplitValues[0]}/@${mastodonSplitValues[1]}`
  } else if (linkbase === HTTPS) return `${linkbase}${linkValue}`
  else return `${HTTPS}${linkbase}${linkValue}`
}

const skipLinkBaseSet = new Set(["EMAIL"])

module.exports = {
  allLinkTypes,
  allLinkTypesSet,
  getPrettyLinkType,
  getLinkBase,
  getBaseLinkForSchema,
  getLinkValueForSchema,
  getFullLink,
  skipLinkBaseSet,
}