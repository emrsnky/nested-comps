
import { useState } from "react";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { useStore } from "../../store/store";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ToastNotification from "../../components/ToastNotification";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface AlbumProps {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const fetchAlbumInfo = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
  );
  const photos = await response.json();
  return photos;
};

const AlbumInfo = () => {
  const photos = useLoaderData() as AlbumProps[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { addFavorite, removeFavorite, favorites }: any = useStore();
  const { userId } = useParams();

  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleFavoriteClick = (photo: AlbumProps) => {
    if (favorites.some((fav: AlbumProps) => fav.id === photo.id)) {
      removeFavorite(photo.id);
      setToastMessage("Removed from Favorites");
    } else {
      addFavorite({ ...photo, userId: Number(userId) });
      setToastMessage("Added to Favorites");
    }
    setToastShow(true);
  };

  return (
    <>
      <Col sm={12} className="text-center ">
        <h2 className="fw-bold text-center display-3 d-block">
          Albums Details
        </h2>
      </Col>
      <Container>
        <Row>
          {photos?.map((photo) => (
            <Col
              sm={6}
              md={6}
              lg={3}
              className="mb-4 d-flex justify-content-center align-items-center"
              key={photo.id}
            >
              <Card className="h-100 shadow-lg " style={{ width: "17rem" }}>
                <Card.Img variant="top" src={photo.thumbnailUrl} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{photo.title}</Card.Title>
                  <Card.Link>
                    <div className="mt-auto">
                      <Button
                        variant={"light"}
                        onClick={() => handleFavoriteClick(photo)}
                      >
                        {favorites.some(
                          (fav: AlbumProps) => fav.id === photo.id
                        ) ? (
                          <>
                            {" "}
                            <FaHeart className="text-danger me-2 fs-4" /> Remove
                            Favorite{" "}
                          </>
                        ) : (
                          <>
                            <CiHeart className="fs-4 me-2" /> Add to Favorites
                          </>
                        )}
                      </Button>
                    </div>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div>
          <Link to={`/favorites`} className="favorites-button">
            <Button variant="outline-secondary">
              Favorites({favorites.length})
            </Button>
          </Link>
        </div>
      </Container>

      <ToastNotification
        message={toastMessage}
        show={toastShow}
        onClose={() => setToastShow(false)}
      />
    </>
  );
};

export default AlbumInfo;
