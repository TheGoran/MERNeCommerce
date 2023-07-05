import {Nav, Navbar, Container, NavbarBrand} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
//here we import the bootstrap and the faicons and create the header appearance.
//we will be importing this into the App.js


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
           <Container>
              <Navbar.Brand href="/"> GoShop</Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ms-auto">
                    <Nav.Link href="/cart"><FaShoppingCart /> Cart </Nav.Link>
                    <Nav.Link href="/login"><FaUser /> Sign in </Nav.Link>
                 </Nav>
              </Navbar.Collapse>
            </Container> 
        </Navbar>
    </header>
  )
}

export default Header