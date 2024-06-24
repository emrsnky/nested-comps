import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchUserPosts = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const posts: PostParams[] = await response.json();
  return posts;
};

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState<PostParams[]>([]);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const getUserPosts = async () => {
      if (!userId) return;
      const postsData = await fetchUserPosts(userId);
      setUserPosts(postsData);
    };

    getUserPosts();
  }, [userId]);

  return (
    <>
      <ListGroup>
        {userPosts?.map((post) => (
          <ListGroup.Item key={post.id}>
            <Link
              className="posts-link"
              to={`/users/${userId}/posts/${post.id}`}
            >
              <h3>{post.title}</h3>
              <span className="text-muted d-block">Click to see details</span>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default UserPosts;
