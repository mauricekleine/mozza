export type BookRecommendation = {
  authors: string[];
  href: string;
  series?: {
    book: number;
    href: string;
    title: string;
  };
  tags: string[];
  title: string;
  type: string;
};

const bookRecommendations: BookRecommendation[] = [
  {
    authors: ["Matt Heigg"],
    href: "https://www.goodreads.com/book/show/48693877-the-midnight-library",
    tags: ["wholesome"],
    title: "The Midnight Library",
    type: "fiction",
  },
  {
    authors: [
      "Kerry Patterson",
      "Joseph Grenny",
      "Ron McMillan",
      "Al Switzler",
    ],
    href: "https://www.goodreads.com/book/show/15014.Crucial_Conversations",
    tags: ["communication"],
    title: "Crucial Conversations",
    type: "non-fiction",
  },
  {
    authors: ["Philip Pullman"],
    href:
      "https://www.goodreads.com/book/show/19034943-the-secret-commonwealth",
    series: {
      book: 1,
      href: "https://www.goodreads.com/series/199547-the-book-of-dust",
      title: "The Book of Dust",
    },
    tags: ["fantasy"],
    title: "The Secret Commonwealth",
    type: "fiction",
  },
  {
    authors: ["Mitch Albom"],
    href: "https://www.goodreads.com/book/show/6900.Tuesdays_with_Morrie",
    tags: ["wholesome"],
    title: "Tuesdays with Morrie",
    type: "fiction",
  },
  {
    authors: ["Ben Oliver"],
    href: "https://www.goodreads.com/book/show/52376237-the-loop",
    series: {
      book: 1,
      href: "https://www.goodreads.com/series/299336-the-loop-trilogy",
      title: "The Loop Trilogy",
    },
    tags: ["dystopian"],
    title: "The Loop",
    type: "fiction",
  },
  {
    authors: ["Charlie Mackesy"],
    href:
      "https://www.goodreads.com/book/show/43708884-the-boy-the-mole-the-fox-and-the-horse",
    tags: ["wholesome"],
    title: "The Boy, the Mole, the Fox and the Horse",
    type: "fiction",
  },
  {
    authors: ["Fredrik Backman"],
    href: "https://www.goodreads.com/book/show/49127718-anxious-people",
    tags: ["wholesome"],
    title: "Anxious People",
    type: "fiction",
  },
  {
    authors: ["Gene Kim", "Kevin Behr", "George Spafford"],
    href: "https://www.goodreads.com/book/show/17255186-the-phoenix-project",
    tags: ["dev-ops"],
    title:
      "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    type: "non-fiction",
  },
];

export default bookRecommendations;
