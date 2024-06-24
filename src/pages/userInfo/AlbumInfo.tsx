import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { useStore } from "../../store/store";

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
  const { addFavorite, removeFavorite, favorites } = useStore();
  const { userId } = useParams();
  const handleFavoriteClick = (photo: AlbumProps) => {
    if (favorites.some((fav) => fav.id === photo.id)) {
      removeFavorite(photo.id);
    } else {
      addFavorite({ ...photo, userId: Number(userId) });
    }
  };

  return (
    <>
      <h2>Albums Details</h2>
      <ul>
        {photos?.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
            <button onClick={() => handleFavoriteClick(photo)}>
              {favorites?.some((fav) => fav.id === photo.id)
                ? "Remove Favorite" 
                : "Add to Favorites"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlbumInfo;
