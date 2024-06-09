import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface AlbumParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchUserAlbums = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/albums`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const albums: AlbumParams[] = await response.json();
  return albums;
};

const UserAlbums = () => {
  const [userAlbums, setUserAlbums] = useState<AlbumParams[]>([]);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const getUserAlbums = async () => {
      if (!userId) return;
      const albumsData = await fetchUserAlbums(userId);
      setUserAlbums(albumsData);
    };

    getUserAlbums();
  }, [userId]);

  return (
    <>
      <ListGroup>
        {userAlbums?.map((album) => (
          <ListGroup.Item key={album.id}>
            <h3>{album.title}</h3>
            <p>{album.body}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default UserAlbums;
