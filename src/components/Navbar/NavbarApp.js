import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavbarApp = () => {

  return (
    <div className='shadow-sm'>
      <Navbar bg="white" variant="white" expand="lg">
        <Container className="py-3">
            <Nav >
              <Navbar.Brand href="#home" className="fw-bolder">
                <span className='text-primary'>Pinter </span>| Home
              </Navbar.Brand>  
            </Nav>
            <Nav>
              <Nav.Link href="#home" className='text-primary'>Home</Nav.Link>
              <Nav.Link href="#features">Living Room</Nav.Link>
              <Nav.Link href="#pricing">Bedroom</Nav.Link>
              <Nav.Link href="#pricing">Kitchen</Nav.Link>
            </Nav>
            <Nav>
              <Button className='fw-bold px-4' variant="outline-primary">Login</Button>{' '}
            </Nav>
        </Container>
      </Navbar>
    </div>
  );

}

export default NavbarApp;