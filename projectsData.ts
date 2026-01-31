export type Asset = {
  type: "image" | "video";
  src: string | string[];
  info?: boolean;
  description?: {
    title: string;
    paragraph: string;
  };
};

export type Info = {
  course?: string;
  instructor?: string;
  partner?: string;
  skills?: string;
  role?: string;
};

export type Project = {
  name: string;
  info?: Info;
  assets: Asset[];
  title: string;
};

const example: Project = {
  title: "aaaaaaaaaaaaaaaaa",
  name: "hello",
  info: {
    course: "Illustration and Innovation in the Industry",
    instructor: "Ori Hizkiya",
    partner: "Menachem begin",
    skills: "Craftsmanship",
  },
  assets: [
    {
      type: "image",
      info: true,
      src: "/5-forest guardian/1.webp",
      description: {
        title: "Forest guardian",
        paragraph:
          "Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.",
      },
    },
    {
      type: "image",
      src: "/5-forest guardian/5.webp",
      description: {
        title: "Forest guardian",
        paragraph:
          "Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.",
      },
    },

    {
      type: "image",
      src: ["/5-forest guardian/3.webp", "/5-forest guardian/4.webp"],
      description: {
        title: "Forest guardian",
        paragraph:
          "Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.",
      },
    },
    {
      type: "video",
      src: "/4.-wanderlust/8.mp4",
      description: {
        title: "Forest guardian",
        paragraph:
          "Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.",
      },
    },

    {
      type: "image",
      src: ["/5-forest guardian/3.webp", "/5-forest guardian/4.webp"],
    },
  ],
};

const projectsData: Project[] = [
  {
    ...example,
    name: "Cactus UX",
    title: "01 / Cactus UX  / Startup course  / 2024-2025",
  },
  {
    ...example,

    name: "Cactus Brand",
    title: "02 / Cactus Brand  /Startup course  / 2024-2025",
  },
  {
    ...example,
    title: "03 / Open House Festival  / Branding course  / 2024-2025",

    name: "Open House Festival",
  },
  {
    ...example,
    title: "04 / Wanderlust / Branding course  / 2024",

    name: "Wanderlust",
  },
  {
    ...example,
    title: "05 / Forest Guardian  / Illustration course  / 2025",

    name: "Forest Guardian",
  },
  {
    ...example,
    title: "06 / The Eternal Israeli / Typography course  / 2024",

    name: "The Eternal Israeli",
  },
  {
    ...example,
    title: "07 / Illustration Gallery/ Illustration  / 2022- 2025",

    name: "Illustration Gallery",
  },
  {
    ...example,
    title: "08 / Animation Gallery / Animation  / 2022- 2025",

    name: "Animation Gallery",
  },
];

export default projectsData;
