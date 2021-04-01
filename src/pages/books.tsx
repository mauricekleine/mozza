import BookGrid from "../components/book-grid";
import Page from "../components/page";
import bookRecommendations from "../data/book-recommendations";

const fictionRecommendations = bookRecommendations.filter(
  ({ type }) => type === "fiction"
);

const nonFictionRecommendations = bookRecommendations.filter(
  ({ type }) => type === "non-fiction"
);

const Books = () => (
  <Page title="Books I recommend">
    <div className="space-y-8">
      <BookGrid books={nonFictionRecommendations} title="Non-fiction" />
      <BookGrid books={fictionRecommendations} title="Fiction" />
    </div>
  </Page>
);

export default Books;
