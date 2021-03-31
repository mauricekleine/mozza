type BookRecommendation = {
  authors: string[];
  tags: string[];
  title: string;
};

const bookRecommendations: BookRecommendation[] = [
  {
    authors: ["Matt Heigg"],
    tags: ["fiction", "mental health"],
    title: "The Midnight Library",
  },
  {
    authors: ["Kerry Patterson and 3 others"],
    tags: ["non-fiction", "communication"],
    title: "Crucial Conversations",
  },
  {
    authors: ["Philip Pullman"],
    tags: ["fiction"],
    title: "The Secret Commonwealth",
  },
];

export default bookRecommendations;
