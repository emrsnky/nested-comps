import { ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

interface UsersPageProps {
  id: number;
  name: string;
  username: string;
  email: string;
}
// eslint-disable-next-line react-refresh/only-export-components
export const usersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};
function UsersPage() {
  const users = useLoaderData() as UsersPageProps[];
  return (
    <>
      {users.map((user) => (
        <ListGroup.Item className="users-list" key={user.id}>
          <Link className="users-link" to={`/users/${user.id}`}>
            {user.name}
            <span className="text-muted d-block">Click to see details</span>
          </Link>
        </ListGroup.Item>
      ))}
    </>
  );
}

export default UsersPage;
