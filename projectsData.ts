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
      src: "/5-forest guardian/5.webp",
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
      src: "/5-forest guardian/5.webp",
      description: {
        title: "Ostrich Attack Survival Guide",
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
    name: "Forest Guardian",
    title: "05 / Forest Guardian  / Illustration course  / 2025",
    info: {
      course: "Illustration and Innovation in the Industry",
      instructor: "Limor Snochemer",
      skills: "Design, illustration, concept.",
    },
    assets: [
      {
        src: "/5-forest guardian/1.webp",
        type: "image",
        info: true,
        description: {
          title: "Forest Guardian",
          paragraph:
            "Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.",
        },
      },
      {
        src: "/5-forest guardian/2.webp",
        type: "image",
        description: {
          title: "Concept",
          paragraph:
            "The Forest Cleanup campaign features “Grandpa Yochanan,” a wise mushroom who shares friendly messages about the effects of trash on nature. Placed in key forest spots, his warm illustrations spark curiosity and inspire visitors to protect the environment.",
        },
      },
      {
        src: "/5-forest guardian/3.webp",
        type: "image",
        description: {
          title: "Saba Yochanan",
          paragraph:
            "Saba Yochanan is the guardian of the forest, a wise old mushroom who shares his knowledge of the woods with kindness and patience, teaching visitors to care for nature through simple, thoughtful messages. His friendly and approachable personality makes learning about the forest and about the negative impact of garbage feel educational rather than an attack.",
        },
      },
      {
        src: "/5-forest guardian/4.webp",
        type: "image",
        description: {
          title: "Assets",
          paragraph:
            "The campaign’s assets consist of hand-drawn watercolor illustrations of mushrooms, plants, and forest litter. These elements create a visual language that is both warm and approachable, while highlighting the impact of trash on nature. The illustrations can be used across posters, signs, and information stands.",
        },
      },
      {
        src: "/5-forest guardian/5.webp",
        type: "image",
        description: {
          title: "Posters",
          paragraph:
            "The posters bring “Grandpa Yochanan’s” messages into large public spaces, making the campaign visible even from a distance. Their simple layouts combine hand-drawn illustrations with short, memorable phrases that highlight the impact of trash on the forest. ",
        },
      },
      {
        src: "/5-forest guardian/6a.webp",
        type: "image",
        description: {
          title: "The Campaign",
          paragraph:
            "Each stand presents a clear timeline of how long different types of waste remain in the forest, illustrated with familiar items like bottles, bags, and fruit peels. “Grandpa Yochanan” guides visitors through the facts, making the message fun and easy to remember. ",
        },
      },
      {
        src: "/5-forest guardian/7.webp",
        type: "image",
      },
    ],
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
