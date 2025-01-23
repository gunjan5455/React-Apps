import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/counter" style={{ padding: "20px" }}>
              Counter
            </Link>
            <Link to="/userform" style={{ padding: "20px" }}>
              UserForm
            </Link>
            <Link to="/form" style={{ padding: "20px" }}>
              Form
            </Link>
            <Link to="/login" style={{ padding: "20px" }}>
              Logout
            </Link>
            {/* <Nav.Link href="#pricing">Form</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
