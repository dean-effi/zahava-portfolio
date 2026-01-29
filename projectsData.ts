type Project = {
  name: string;
  assets: { type: "image" | "video"; src: string | string[] }[];
};

const example: Project = {
  name: "hello",
  assets: [
    { type: "image", src: "6-forest guardian/1.webp" },
    { type: "image", src: "6-forest guardian/2.webp" },
  ],
};

console.log(example);

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
