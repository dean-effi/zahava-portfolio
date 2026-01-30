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
};

const example: Project = {
  name: "hello",
  info: {
    course: "Mugging",
    instructor: "Ori Hizkiya",
    partner: "Menachem begin",
    skills: "Craftsmanship",
    role: "Architecture",
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
    { type: "image", src: "/5-forest guardian/5.webp" },

    {
      type: "image",
      src: ["/5-forest guardian/3.webp", "/5-forest guardian/4.webp"],
    },
    { type: "video", src: "/4.-wanderlust/8.mp4" },
  ],
};

const projectsData: Project[] = [
  { ...example },
  {
    ...example,
    name: "Cactus UX",
  },
  {
    ...example,

    name: "Cactus Brand",
  },
  {
    ...example,

    name: "Open House Festival",
  },
  {
    ...example,

    name: "Wanderlust",
  },
  {
    ...example,

    name: "Forest Guardian",
  },
  {
    ...example,

    name: "The Eternal Israeli",
  },
  {
    ...example,

    name: "Illustration Gallery",
  },
  {
    ...example,

    name: "Animation Gallery",
  },
];

export default projectsData;
