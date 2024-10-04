const notionIdToId = {
  'ef477dc32ff041c8a7313cd57351c3f7': '/',
  'dd3f50c0a2f94216bca3d35f71ccd3e8': '/support',
  '33d6efdfef2849ca95784f9953506643': '/support/add-your-comic-to-bam',
  '5c29ee8546e142b1b72de04eae36960d': '/roadmap',
  'fc0e58aacbb04e74b7172977be60e72e': '/blog',
  '8cbd0fd824bd4dafbc93a2741c61e0b3': '/blog/best-vampire-webtoons',
  '59ad2f983ac1454f832db7756da4a5ef': '/blog/best-romance-webtoons-to-read',
  'ce18c8b2fa3c4af98744adbbf878ce03': '/blog/best-supernatural-webtoons-to-read',
  '5bd0c6f188084f738307aeec964aa02e': '/blog/best-boyslove-webtoons-recommend',
  'a900cc4737e045c7aec5312df1ce741a': '/brand-kit',
  '334d2f916f2948d5b9e470dc0473527b': '/about-us',
  'ce1fc05e5ae3477284ebda8cbe8f506e': '/terms-of-service',
  '5ad172e9fc834d1bb5a61b030ef5cd82': '/terms-of-service/privacy-policy',
  '2705be9449fa410480224a7d2b23d61c': '/terms-of-service/content-policy',
  'b4ba94c1f40349a1912450df246dbb79': '/terms-of-service/code-of-conduct',
};

const additionalInfoForNotionId = {
  '/': {
    lastmod: 1669070774,
    priority: '1.0',
  },
  '/support': {
    lastmod: 1669070774,
    priority: '0.8',
  },
  '/support/add-your-comic-to-bam': {
    lastmod: 1680968967,
    priority: '0.8',
  },
  '/about-us': {
    lastmod: 1712169633,
    priority: '0.9',
  },
  '/roadmap': {
    lastmod: 1679627755,
    priority: '0.8',
  },
  '/brand-kit': {
    lastmod: 1710436672,
    priority: '0.8',
  },
  '/blog': {
    lastmod: 1718749731,
    priority: '0.9',
  },
  '/blog/best-vampire-webtoons': {
    lastmod: 1718749731,
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
  '/blog/best-romance-webtoons-to-read': {
    lastmod: 1719016705,
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
  '/blog/best-supernatural-webtoons-to-read': {
    lastmod: 1719016705,
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
  '/blog/best-boyslove-webtoons-recommend': {
    lastmod: 1721004784,
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
  '/terms-of-service': {
    lastmod: 1669070774,
    priority: '0.8',
  },
  '/terms-of-service/privacy-policy': {
    lastmod: 1669070774,
    priority: '0.7',
  },
  '/terms-of-service/content-policy': {
    lastmod: 1669070774,
    priority: '0.7',
  },
  '/terms-of-service/distribution-policy': {
    lastmod: 1669070774,
    priority: '0.7',
  },
  '/terms-of-service/developer-policy': {
    lastmod: 1669070774,
    priority: '0.7',
  },
  '/terms-of-service/code-of-conduct': {
    lastmod: 1669070774,
    priority: '0.7',
  },
}

module.exports = {
  notionIdToId,
  additionalInfoForNotionId,
}