type PetProject = {
  description: string;
  name: string;
  repo: string;
  url: string;
};

const petProjects: PetProject[] = [
  {
    description:
      "The Social Education and Development Society (SEDS) is a NGO that has been actively involved in socially transforming initiatives and rural development for over 38 years near the town of Penukonda in Andhra Pradesh, India. I created and maintain their homepage.",
    name: "🌱 SEDS",
    repo: "https://github.com/mauricekleine/seds",
    url: "https://sedsngo.org",
  },
  {
    description:
      "Beer tracking, but better. Mainly a playground for me to mess around with cool new technologies.",
    name: "🍺 Tinnies",
    repo: "https://github.com/mauricekleine/tinnies",
    url: "https://tinnies.xyx",
  },
  {
    description: "A curated list of remote work resources. Archived.",
    name: "📚 The Remote Work Library",
    repo: "https://github.com/mauricekleine/the-remote-work-library",
    url: "https://the-remote-work-library.now.sh",
  },
  {
    description: "Yep, the website you're looking at right now.",
    name: "🤙 This website",
    repo: "https://github.com/mauricekleine/personal-website",
    url: "https://mauricekleine.com/",
  },
];

export default petProjects;
