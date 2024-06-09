import {  LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import UserTab from "../components/UserTab";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
 // eslint-disable-next-line react-refresh/only-export-components
 export const userLoader = async ({params}:LoaderFunctionArgs) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
   const user = await response.json();
   return user
 }
 function UserDetailPage() {
  const user = useLoaderData() as User
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {userId} = useParams()
  return (<>
  <h1>{user.name}</h1>
  <p>Username: {user.username}</p>
  <p>e-mail: {user.email}</p>
  <UserTab {...{postLink: `/users/${userId}/posts`, albumLink: `/users/${userId}/albums`, todoLink: `/users/${userId}/todos` }} />
    
  
  </>)
}
{/* <Link to={`/users/${user.id}/posts`}>Posts</Lin>
    <Link to={`/users/${user.id}/albums`}>Albums</Link>
    <Link to={`/users/${user.id}/todos`}>Todos</Link> */}
export default UserDetailPage