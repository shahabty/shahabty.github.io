export type Project = {
  name: string;
  description: string;
  url: string;
  topics: string[];
  stars?: number;
};

export const projects: Project[] = [
  {
    name: 'PSPNet-Pytorch',
    description:
      'Pyramid Scene Parsing Network implemented in PyTorch — semantic segmentation that taught me how carefully models see a scene.',
    url: 'https://github.com/shahabty/PSPNet-Pytorch',
    topics: ['pytorch', 'semantic-segmentation', 'computer-vision'],
    stars: 34,
  },
  {
    name: '3D-RCNN',
    description:
      'An implementation exploring 3D understanding from visual input — where depth, shape, and recognition meet.',
    url: 'https://github.com/shahabty/3D-RCNN',
    topics: ['3d-vision', 'deep-learning'],
    stars: 12,
  },
  {
    name: 'depth-estimation',
    description:
      'Edge-aware monocular depth estimation — teaching a single image to hint at the space behind the pixels.',
    url: 'https://github.com/shahabty/depth-estimation',
    topics: ['depth-estimation', 'computer-vision'],
    stars: 2,
  },
  {
    name: 'Action-Conditional-Semantic-Segmentation',
    description:
      'Predicting the next scene from the previous one and a driver’s action — vision conditioned on what we choose to do.',
    url: 'https://github.com/shahabty/Action-Conditional-Semantic-Segmentation',
    topics: ['video', 'semantic-segmentation', 'autonomous-driving'],
  },
  {
    name: '3DSNetwork',
    description:
      'Single-view 3D reconstruction that leans on object symmetry — a quieter inductive bias with a big payoff.',
    url: 'https://github.com/shahabty/3DSNetwork',
    topics: ['3d-reconstruction', 'symmetry'],
  },
  {
    name: 'EDL-stereo',
    description:
      'Unofficial take on efficient deep learning for stereo matching — stereo as a craft of matching left and right.',
    url: 'https://github.com/shahabty/EDL-stereo',
    topics: ['stereo-matching', 'deep-learning'],
  },
  {
    name: 'hit_song_prediction',
    description:
      'An earlier experiment at the edge of data and taste — can signals hint at what might catch on?',
    url: 'https://github.com/shahabty/hit_song_prediction',
    topics: ['machine-learning', 'music'],
    stars: 1,
  },
];
