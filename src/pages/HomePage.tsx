import { Alert, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className=" mt-5 home-page">
      <h1 className="mb-5 text-center">Home Page</h1>

      <Row className="justify-content-center">
        <div className=" col-7">
          <Alert variant="info" >
            <h2>I’m excited to share my latest project with you! 🚀</h2>

            <h3>In this project, I used the following technologies:</h3>
            <ul>
              <li>React-Bootstrap for responsive UI components</li>
              <li>Zustand for state management</li>
              <li>React-Router-Dom for routing</li>
              <li>React-Icons for beautiful icons</li>
            </ul>

            <h3>Key Features:</h3>
            <ul>
              <li>
                User Section with Tabs: Loads content only when clicked for
                better performance.
              </li>
              <li>
                User Posts and Comments: Easily view user posts and their
                comments.
              </li>
              <li>
                User Albums: Browse user albums and view details for each album.
              </li>
              <li>
                Favorites Management: Add or remove albums from your favorites
                directly from the album details page.
              </li>
              <li>
                {" "}
                You can also manage your favorite albums from the favorites
                page.
              </li>
            </ul>
          </Alert>
          <h2 className="mt-5 text-center">Happy coding!</h2>
        </div>
      </Row>

      
    </div>
  );
};

export default HomePage;
