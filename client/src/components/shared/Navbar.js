import { Link, Outlet } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavbarComp  = () => {
  return (

<div>
<Navbar sticky="top" bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">My Starter Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


</div>







    // <div>
    //   <Link className='Nav-link' to='/'>Home</Link>
    //   <Link className='Nav-link' to='/login'>Login</Link>
    //   <Link className='Nav-link' to='/register'>Register</Link>
    // </div>
  )
}





  export default NavbarComp