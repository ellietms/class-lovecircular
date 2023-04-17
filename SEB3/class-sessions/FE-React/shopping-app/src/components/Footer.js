import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Twitter</Nav.Link>
            <Nav.Link href="#features">Linkedin</Nav.Link>
            <Nav.Link href="#pricing">Instagram</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;