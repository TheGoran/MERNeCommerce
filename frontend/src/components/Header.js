import {Nav, Navbar, Container, } from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png';
//here we import the bootstrap and the f-icons and create the header appearance.
//we will be importing this into the App.js


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="black" expand="lg" collapseOnSelect>
           <Container>
              <Navbar.Brand href="/">
               <img src={logo} alt="logo" width="60px" height="60px" />
                oShop
                </Navbar.Brand>
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