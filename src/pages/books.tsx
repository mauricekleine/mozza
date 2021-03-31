import Card from "../components/card";
import CardContent from "../components/card-content";
import CardTitle from "../components/card-title";
import Page from "../components/page";
import Tag from "../components/tag";
import bookRecommendations from "../data/book-recommendations";

const Books = () => (
  <Page subtitle="Books I recommend (WIP 🚧)" title="Books">
    <div className="grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2">
      {bookRecommendations.map((book) => (
        <Card key={book.title}>
          <CardContent>
            <CardTitle>{book.title}</CardTitle>

            <p className="text-sm">{book.authors.join(", ")}</p>

            <p>
              {book.tags.map((tag) => (
                <Tag key={`${book.title}-${tag}`}>{tag}</Tag>
              ))}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Page>
);

export default Books;
