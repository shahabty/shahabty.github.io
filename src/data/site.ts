export const siteConfig = {
  name: 'Shahab Nabavi',
  title: 'Curious about intelligence. Soft on being human.',
  description:
    'Machine learning engineer in Toronto writing about AI, quiet thoughts, and life outside the screen — with humility, curiosity, and trail dust on the shoes.',
  url: 'https://shahabty.github.io',
  locale: 'en_CA',
  author: {
    name: 'Shahab Nabavi',
    shortBio:
      'I build and study intelligent systems for a living. Off the clock I chase fresh air, ask simpler questions, and try to stay a decent human.',
    longBio: [
      'I work in machine learning — the kind of work that asks big questions about perception, language, and how machines might help us. I take that work seriously. I do not take myself too seriously.',
      'My days have moved through research labs and industry teams. The thread that stayed the same is curiosity: why something works, where it fails, and what it means for the people on the other side of the model.',
      'Outside of all that, I would rather be outdoors. Trees reset me. Walking resets me. Reminding myself that life is larger than a training run resets me.',
      'This site is a small place for that mix — field notes from AI, quieter personal thoughts, and pieces about living well beyond the keyboard.',
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
