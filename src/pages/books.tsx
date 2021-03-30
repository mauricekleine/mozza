import classNames from "classnames";

import Heading from "../components/heading";
import Section from "../components/section";
import Tag from "../components/tag";
import Theme from "../components/theme";

const books = [
  {
    authors: ["Matt Heigg"],
    tags: ["fiction", "mental health"],
    title: "The Midnight Library",
  },
  {
    authors: ["Kerry Patterson and 3 others"],
    tags: ["non-fiction", "communication"],
    title: "Crucial Conversation",
  },
  {
    authors: ["Philip Pullman"],
    tags: ["fiction"],
    title: "The Secret Commonwealth",
  },
];

const Art = () => {
  return (
    <Theme>
      {({ bg, text }) => (
        <div className="mt-8">
          <Section odd>
            <Heading>Books [WIP 🚧]</Heading>
            <p className="mb-8">My recommended books</p>

            <div className="grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2">
              {books.map((book) => (
                <div
                  className={classNames(
                    bg.white,
                    "cursor-pointer px-6 py-4 rounded-md shadow-sm hover:shadow-none hover:bg-gray-50"
                  )}
                  key={book.title}
                >
                  <p className={classNames(text.dark, "font-bold")}>
                    {book.title}
                  </p>

                  <p className="text-sm">{book.authors.join(", ")}</p>

                  <p className="space-x-1">
                    {book.tags.map((tag) => (
                      <Tag key={`${book.title}-${tag}`}>{tag}</Tag>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}
    </Theme>
  );
};

export default Art;
