import Card from "../components/card";
import CardContent from "../components/card-content";
import CardTitle from "../components/card-title";
import Page from "../components/page";
import Tag from "../components/tag";
import bookRecommendations from "../data/book-recommendations";

const Art = () => {
  return (
    <Page subtitle="My recommended books" title="Books [WIP 🚧]">
      <div className="grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2">
        {bookRecommendations.map((book) => (
          <Card key={book.title}>
            <CardContent>
              <CardTitle>{book.title}</CardTitle>

              <p className="text-sm">{book.authors.join(", ")}</p>

              <p className="space-x-1">
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
};

export default Art;
