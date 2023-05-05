import {
  siChakraui,
  siCss3,
  siEslint,
  siGit,
  siHtml5,
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
  {
    icon: siGit,
    title: "git",
  },
  {
    icon: siCss3,
    title: "CSS",
  },
  {
    icon: siHtml5,
    title: "HTML",
  },
];

const sortedHardSkills = hardSkills.sort((a, b) =>
  a.title.localeCompare(b.title)
);

export { sortedHardSkills as hardSkills };
