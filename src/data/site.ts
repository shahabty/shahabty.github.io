export const siteConfig = {
  name: 'Shahab Nabavi',
  title: 'I work in machine learning. I try not to make that my whole personality.',
  description:
    'Personal site of Shahab Nabavi, a machine learning engineer in Toronto writing about AI, ordinary thoughts, and time spent outdoors.',
  url: 'https://shahabty.github.io',
  locale: 'en_CA',
  author: {
    name: 'Shahab Nabavi',
    shortBio:
      'I’m a machine learning engineer in Toronto. I like hard problems, long walks, and conversations that don’t need a slide deck.',
    longBio: [
      'Most of my work has been in machine learning — computer vision for a long time, and more recently larger models and the systems around them. I still get excited when something finally clicks. I also get tired, stuck, and wrong a lot, which feels important to say out loud.',
      'I’ve been lucky to learn in research labs and in industry. What I keep coming back to is pretty simple: stay curious, check your assumptions, and remember that the point of all this is people, not just better numbers on a chart.',
      'When work gets loud, I go outside. Walking helps. Trees help. Being somewhere without a notification panel helps. I don’t treat that like a productivity hack. It’s just how I come back to myself.',
      'This site is a place to write things down — notes from AI work, personal thoughts I’m still figuring out, and pieces about living a life that isn’t only screens.',
    ],
    location: 'Toronto, Canada',
    role: 'Machine Learning MTS',
    company: 'Cerebras Systems',
    avatar: 'https://avatars.githubusercontent.com/u/13404548?v=4',
  },
  links: {
    github: 'https://github.com/shahabty',
    linkedin: 'https://www.linkedin.com/in/shahab-nabavi/',
    scholar: 'https://scholar.google.com/citations?user=9jxhbU56FTEC&hl=en',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
