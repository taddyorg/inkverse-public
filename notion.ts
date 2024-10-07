export const NotionPage = {
  HOME: { id: "ef477dc32ff041c8a7313cd57351c3f7", path: "/" },
  SUPPORT: { id: "dd3f50c0a2f94216bca3d35f71ccd3e8", path: "/support" },
  ADD_YOUR_COMIC_TO_INKVERSE: { id: "33d6efdfef2849ca95784f9953506643", path: "/support/add-your-comic-to-inkverse" },
  ROADMAP: { id: "5c29ee8546e142b1b72de04eae36960d", path: "/roadmap" },
  BLOG: { id: "fc0e58aacbb04e74b7172977be60e72e", path: "/blog" },
  BEST_VAMPIRE_WEBTOONS: { id: "8cbd0fd824bd4dafbc93a2741c61e0b3", path: "/blog/best-vampire-webtoons" },
  BEST_ROMANCE_WEBTOONS: { id: "59ad2f983ac1454f832db7756da4a5ef", path: "/blog/best-romance-webtoons-to-read" },
  BEST_SUPERNATURAL_WEBTOONS: { id: "ce18c8b2fa3c4af98744adbbf878ce03", path: "/blog/best-supernatural-webtoons-to-read" },
  BEST_BOYSLOVE_WEBTOONS: { id: "5bd0c6f188084f738307aeec964aa02e", path: "/blog/best-boyslove-webtoons-recommend" },
  BRAND_KIT: { id: "a900cc4737e045c7aec5312df1ce741a", path: "/brand-kit" },
  ABOUT_US: { id: "334d2f916f2948d5b9e470dc0473527b", path: "/about-us" },
  TERMS_OF_SERVICE: { id: "ce1fc05e5ae3477284ebda8cbe8f506e", path: "/terms-of-service" },
  PRIVACY_POLICY: { id: "5ad172e9fc834d1bb5a61b030ef5cd82", path: "/terms-of-service/privacy-policy" },
  CONTENT_POLICY: { id: "2705be9449fa410480224a7d2b23d61c", path: "/terms-of-service/content-policy" },
  CODE_OF_CONDUCT: { id: "b4ba94c1f40349a1912450df246dbb79", path: "/terms-of-service/code-of-conduct" },
} as const;

type BlogPost = {
  priority: string,
  title?: string,
  description?: string,
  url?: string,
  imageURL?: string,
  author?: { name: string, url: string }
}

export const additionalInfoForNotionId: { [key: string]: BlogPost } = {
  [NotionPage.HOME.path]: {
    priority: '1.0',
  },
  [NotionPage.SUPPORT.path]: {
    priority: '0.8',
  },
  [NotionPage.ADD_YOUR_COMIC_TO_INKVERSE.path]: {
    priority: '0.8',
  },
  [NotionPage.ABOUT_US.path]: {
    priority: '0.9',
  },
  [NotionPage.ROADMAP.path]: {
    priority: '0.8',
  },
  [NotionPage.BRAND_KIT.path]: {
    priority: '0.8',
  },
  [NotionPage.BLOG.path]: {
    priority: '0.9',
  },
  [NotionPage.BEST_VAMPIRE_WEBTOONS.path]: {
    priority: '0.9',
    title: "The 10 Best Vampire Webtoons To Fit Everyone's Taste",
    description: "Have you ever hungered for an amazing vampire webtoon but don't know where to start? Here are 10 amazing vampire comics to read, no matter what your personal taste.",
    url: 'https://taddy.org/blog/best-vampire-webtoons',
    imageURL: 'https://ink0.inkverse.co/blog/best-vampire-comics/best-vampire-webtoons-banner.webp',
    author: {
      name: 'Eleanor Tremeer',
      url: 'https://twitter.com/extratremeerial',
    }
  },
  [NotionPage.BEST_ROMANCE_WEBTOONS.path]: {
    priority: '0.9',
    title: 'The 10 Best Romance Webtoons You Need To Read',
    description: 'From love triangles to polyamory, fake dating and enemies to lovers, this list of the best romance webtoons will have you swooning!',
    url: 'https://taddy.org/blog/best-romance-webtoons',
    imageURL: 'https://ink0.inkverse.co/blog/best-romance-webtoons/best-romance-webtoons.webp',
    author: {
      name: 'Eleanor Tremeer',
      url: 'https://twitter.com/extratremeerial',
    }
  },
  [NotionPage.BEST_SUPERNATURAL_WEBTOONS.path]: {
    priority: '0.9',
    title: 'The 10 Best Supernatural Webtoons That We Recommend',
    description: 'Spooky toons and gothic romances! The supernatural webtoon genre truly has everything — and these are the best comics that we recommend.',
    url: 'https://taddy.org/blog/best-supernatural-webtoons-to-read',
    imageURL: 'https://ink0.inkverse.co/blog/best-supernatural-webtoons/supernatural-webtoons-banner.png',
    author: {
      name: 'Eleanor Tremeer',
      url: 'https://twitter.com/extratremeerial',
    }
  },
  [NotionPage.BEST_BOYSLOVE_WEBTOONS.path]: {
    priority: '0.9',
    title: "The 10 Best Boys Love Webtoons We Can't Stop Reading",
    description: "Boys love webtoons can be hard to find, but whether you want wholesome high school romances, or spicy mature affairs, we've got you covered!",
    url: 'https://taddy.org/blog/best-boyslove-webtoons-recommend',
    imageURL: 'https://ink0.inkverse.co/blog/best-boyslove-webtoons-images/boyslove-webtoons-banner.png',
    author: {
      name: 'Eleanor Tremeer',
      url: 'https://twitter.com/extratremeerial',
    }
  },
  [NotionPage.TERMS_OF_SERVICE.path]: {
    priority: '0.8',
  },
  [NotionPage.PRIVACY_POLICY.path]: {
    priority: '0.7',
  },
  [NotionPage.CONTENT_POLICY.path]: {
    priority: '0.7',
  },
  [NotionPage.CODE_OF_CONDUCT.path]: {
    priority: '0.7',
  },
}