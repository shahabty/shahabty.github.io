export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
};

export type Patent = {
  title: string;
  number: string;
  year: number;
  url: string;
};

export const publications: Publication[] = [
  {
    title: 'Video Action Recognition with Adaptive Zooming Using Motion Residuals',
    authors:
      'Mostafa Shahabinejad, Irina Kezele, Seyed Shahabeddin Nabavi, Wentao Liu, Seel Patel, Yuanhao Yu, Yang Wang, Jin Tang',
    venue: 'ICCV Workshops',
    year: 2023,
    url: 'https://openaccess.thecvf.com/content/ICCV2023W/RCV/html/Shahabinejad_Video_Action_Recognition_with_Adaptive_Zooming_Using_Motion_Residuals_ICCVW_2023_paper.html',
  },
  {
    title: 'Unsupervised Learning of Camera Pose with Compositional Re-estimation',
    authors: 'Seyed Shahabeddin Nabavi, Mehrdad Hosseinzadeh, Ramin Fahimi, Yang Wang',
    venue: 'arXiv',
    year: 2020,
    url: 'https://arxiv.org/abs/2001.06479',
  },
  {
    title: 'Future Frame Prediction Using Convolutional VRNN for Anomaly Detection',
    authors: 'Yiwei Lu, Mahesh Kumar Krishna Reddy, Seyed Shahabeddin Nabavi, Yang Wang',
    venue: 'arXiv',
    year: 2019,
    url: 'https://arxiv.org/abs/1909.02168',
  },
  {
    title: 'Recurrent Neural Network for Learning Spatial and Temporal Information from Videos',
    authors: 'Seyed Shahabeddin Nabavi',
    venue: 'MSc thesis, University of Manitoba',
    year: 2019,
    url: 'https://hdl.handle.net/1993/34039',
  },
  {
    title: 'Future Semantic Segmentation with Convolutional LSTM',
    authors: 'Seyed Shahabeddin Nabavi, Mrigank Rochan, Yang Wang',
    venue: 'British Machine Vision Conference (BMVC)',
    year: 2018,
    url: 'https://arxiv.org/abs/1807.07946',
  },
];

export const patents: Patent[] = [
  {
    title: 'Audio visual sound source separation with cross-modal meta consistency learning',
    number: 'US12542140B2',
    year: 2026,
    url: 'https://patents.google.com/patent/US12542140B2/en',
  },
  {
    title: 'Method, device, and medium for adaptive inference in compressed video domain',
    number: 'US12062252B2',
    year: 2024,
    url: 'https://patents.google.com/patent/US12062252B2/en',
  },
];
