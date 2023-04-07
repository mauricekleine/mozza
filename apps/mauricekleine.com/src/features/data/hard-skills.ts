import {
  siChakraui,
  siEslint,
  siJavascript,
  siMui,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPrettier,
  siReact,
  siRedis,
  siTailwindcss,
  siTurborepo,
  siTypescript,
} from "simple-icons";

const hardSkills = [
  {
    icon: siJavascript,
    title: "JavaScript",
  },
  {
    icon: siTypescript,
    title: "TypeScript",
  },
  {
    icon: siReact,
    title: "React",
  },
  {
    icon: siNextdotjs,
    title: "Next.js",
  },
  {
    icon: siTurborepo,
    title: "Turborepo",
  },
  {
    icon: siTailwindcss,
    title: "TailwindCSS",
  },
  {
    icon: siChakraui,
    title: "Chakra UI",
  },
  {
    icon: siMui,
    title: "MUI",
  },
  {
    icon: siEslint,
    title: "ESLint",
  },
  {
    icon: siPrettier,
    title: "Prettier",
  },
  {
    icon: siNodedotjs,
    title: "Node.js",
  },
  {
    icon: siPhp,
    title: "PHP",
  },
  {
    icon: siRedis,
    title: "Redis",
  },
  {
    icon: siMysql,
    title: "MySQL",
  },
  {
    icon: siPostgresql,
    title: "PostgressQL",
  },
];

const sortedHardSkills = hardSkills.sort((a, b) =>
  a.title.localeCompare(b.title)
);

export { sortedHardSkills as hardSkills };
