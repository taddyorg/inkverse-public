enum LayoutType {
  VERTICAL_SCROLL_TOP_TO_BOTTOM = "VERTICAL_SCROLL_TOP_TO_BOTTOM",
  RIGHT_TO_LEFT = "RIGHT_TO_LEFT",
  LEFT_TO_RIGHT = "LEFT_TO_RIGHT",
  PAGE = "PAGE",
}

export function getPrettyLayoutType(layoutType: LayoutType): string {
  return layoutType.split("_").map(word => { return word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()} ).join(" ")
}