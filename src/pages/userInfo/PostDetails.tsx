import { ListGroup } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentParams {
  id: number;
  name: string;
  body: string;
}

export const postLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();

  const commentResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
  );
  const comments = await commentResponse.json();

  return { post, comments };
};
const PostDetails = () => {
  const { post, comments } = useLoaderData() as {
    post: PostParams;
    comments: CommentParams[];
  };
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default PostDetails;
