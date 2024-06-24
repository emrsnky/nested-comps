import { Col, Container, Row } from "react-bootstrap";
import { useStore } from "../store/store";
import BsCard from "../components/BsCard";
const FavoritesPage = () => {
  const { favorites, removeFavorite } = useStore();
  return (
    <Container>
      <h2 className="fw-bold text-center display-3 my-3">Favorites</h2>
      <Row>
        {favorites.map((photo) => (
          <Col md={4} lg={3} className="mb-5" key={photo.id}>
            <BsCard
              imgUrl={photo.thumbnailUrl}
              title={photo.title}
              userLink={`/users/${photo.userId}`}
              userId={photo.userId}
              onClickHandler={() => removeFavorite(photo.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
