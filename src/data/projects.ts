export type Project = {
  name: string;
  description: string;
  url: string;
  topics: string[];
};

export const projects: Project[] = [
  {
    name: 'Grandpa Frank',
    description:
      'A founder coaching product that asks staged questions about users, timing, risks, and go-to-market so teams can move from vague ideas to concrete decisions and next actions.',
    url: 'https://grandpafrank.com/',
    topics: ['startups', 'coaching', 'product'],
  },
  {
    name: 'SEP',
    description:
      'A repository for SEP. I use it as an active project space for building and sharing work in public on GitHub.',
    url: 'https://github.com/shahabty/SEP',
    topics: ['github', 'opensource', 'engineering'],
  },
];
