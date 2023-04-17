import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"

function Footer({Linkedin , Twitter ,Instagram }) {
  return (
    <>
      <Navbar bg="light" variant="light" className='footer'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">{Linkedin}</Nav.Link>
            <Nav.Link href="#features">{Twitter}</Nav.Link>
            <Nav.Link href="#pricing">{Instagram}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;