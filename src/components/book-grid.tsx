import { BookRecommendation } from "../data/book-recommendations";

import Card from "./card";
import CardTitle from "./card-title";
import Heading from "./heading";
import Tag from "./tag";

type Props = {
  books: BookRecommendation[];
  title: string;
};

const BookGrid = ({ books, title }: Props) => (
  <div>
    <Heading hasDivider>{title}</Heading>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {books.map((book) => (
        <Card key={book.title}>
          <CardTitle href={book.href}>{book.title}</CardTitle>

          <div>
            {book.series && (
              <p className="text-sm">
                {book.series.title} #{book.series.book}
              </p>
            )}

            <p className="text-sm">{book.authors.join(", ")}</p>
          </div>

          <p>
            {book.tags.map((tag) => (
              <Tag key={`${book.title}-${tag}`}>{tag}</Tag>
            ))}
          </p>
        </Card>
      ))}
    </div>
  </div>
);

export default BookGrid;
