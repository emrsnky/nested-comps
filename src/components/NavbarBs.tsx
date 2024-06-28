import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";

function NavbarBs() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { favorites }: any = useStore();
  return (
    <Navbar className="sticky-top" expand="md" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link to={"/"} as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to={"/users"} as={Link}>
              Users
            </Nav.Link>
          </Nav>
          <Nav.Link className="fw-bold text-white" to={"/favorites"} as={Link}>
            Favorites ({favorites.length})
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBs;
