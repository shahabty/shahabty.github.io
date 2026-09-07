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
      'A place to sit with hard product and company questions until you can make the call with more confidence and less fog.',
    url: 'https://grandpafrank.com/',
    topics: ['startups', 'coaching', 'product'],
  },
];
