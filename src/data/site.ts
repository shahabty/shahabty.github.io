export const siteConfig = {
  name: 'Shahab Nabavi',
  title: 'I work in machine learning. I try not to make that my whole personality.',
  description:
    'Personal site of Shahab Nabavi, a machine learning engineer in Toronto writing about AI, personal thoughts, film, and theatre.',
  url: 'https://shahabty.github.io',
  locale: 'en_CA',
  author: {
    name: 'Shahab Nabavi',
    longBio: [
      "I've loved computers since I was a kid. It started with installing software, fixing small hardware problems, then learning C++ and getting into RoboCup 2D soccer simulation. At university I chose computer science because I wanted to get really good at it. The further I went, the clearer it became that becoming an expert is a lot harder than it sounds.",
      'I did my master\'s at the University of Manitoba under Prof. Yang Wang. I also spent a year in a PhD program at York University before leaving to go into industry.',
      'I started at Huawei Canada in 2020 as an R&D engineer, working on machine learning products that hadn\'t really existed before. Then the LLM boom hit and everything turned into a race. I didn\'t feel especially distinct in that landscape, so I dug in and studied it more seriously. In 2024 I joined Cerebras Systems to focus more closely on LLMs, including model bring-up, evaluation, and related work.',
      'Around the same time I started building AI tools for internal use, especially for repetitive work people were still doing by hand. That effort went somewhere: we launched an internal product that the company still uses today.',
      'I wasn\'t alone in any of this. Great colleagues have always been a big part of the work, whether through mentorship, research, code, or day-to-day collaboration.',
      'Somewhere along the way I realized I\'ve always had a taste for film, and a lot of dreams that might still come true someday. I\'ve also always liked thinking philosophically. So I explored film and theatre a bit to see where I might fit. Writing turned out to be the best match. I do screenwriting part time, and I watch movies both to enjoy them and to learn how they work from another angle.',
    ],
    advisor: {
      name: 'Prof. Yang Wang',
      url: 'https://kywang.github.io/',
    },
    location: 'Toronto, Canada',
    interests: ['Machine Learning', 'Film'],
    role: 'Machine Learning MTS',
    company: 'Cerebras Systems',
    avatar: '/images/avatar-logo.png',
  },
  links: {
    github: 'https://github.com/shahabty',
    linkedin: 'https://www.linkedin.com/in/shahab-nabavi/',
    scholar: 'https://scholar.google.com/citations?user=9jxhbU56FTEC&hl=en',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/projects/', label: 'Projects' },
    { href: '/publications/', label: 'Publications' },
    { href: '/blog/', label: 'Blog' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
