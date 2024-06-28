import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { UserAlbums, UserPosts, UserTodos } from "../pages/userInfo";

interface UserTabProps {
  postLink: string;
  albumLink: string;
  todoLink: string;
}

function UserTab({ postLink, albumLink, todoLink }: UserTabProps) {
  return (
    <Tabs
      defaultActiveKey={postLink}
      id="uncontrolled-tab-example"
      className="mb-3 tabs-link"
    >
      <Tab eventKey={postLink} title="post">
        <UserPosts />
      </Tab>
      <Tab eventKey={albumLink} title="album">
        <UserAlbums />
      </Tab>
      <Tab eventKey={todoLink} title="todo">
        <UserTodos />
      </Tab>
    </Tabs>
  );
}

export default UserTab;
