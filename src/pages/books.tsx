import BookGrid from "../components/book-grid";
import Page from "../components/page";
import SpaceContainer from "../components/space-container";
import bookRecommendations from "../data/book-recommendations";

const fictionRecommendations = bookRecommendations.filter(
  ({ type }) => type === "fiction"
);

const nonFictionRecommendations = bookRecommendations.filter(
  ({ type }) => type === "non-fiction"
);

const Books = () => (
  <Page title="Books I recommend">
    <SpaceContainer size="md">
      <BookGrid books={nonFictionRecommendations} title="Non-fiction" />
      <BookGrid books={fictionRecommendations} title="Fiction" />
    </SpaceContainer>
  </Page>
);

export default Books;
