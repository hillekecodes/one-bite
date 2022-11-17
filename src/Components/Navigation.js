
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './Login';
import { useContext } from 'react';
import { CurrentUserContext } from '../Context/UserContext';


function Navigation() {
  const user = useContext(CurrentUserContext)

//probably need useEffect here for monitoring user??

{/* <Nav.Link as={Link} to="/">
  Home
</Nav.Link> */}

  return (
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/"><strong>One Bite</strong></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">David Hilleke</a>
              <Login />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navigation;