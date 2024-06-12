import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navLogo from '../../../assets/img/logo_black_laIndustria_noBackground.png';

export function NavbarApp(){
    return (
        <Navbar expand="lg" className="navbarApp">
      <Container>
        <Navbar.Brand href="#home"><img className="navbarApp-img" src={navLogo} alt='navLogo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbarApp-menu'>
          <Nav className="me-auto0">
          <NavDropdown title="Profesores" id="basic-nav-dropdown">
              <NavDropdown.Item href="/teacherList" className='dropdown-link'>
              Listado</NavDropdown.Item>
              <NavDropdown.Item href="/newTeacher" className='dropdown-link'>
                Nuevo
              </NavDropdown.Item>
              <NavDropdown.Item href="/editTeacher" className='dropdown-link'>
              Editar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Alumnos</Nav.Link>
            <NavDropdown title="Gestión" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='dropdown-link'>
              Calendario</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='dropdown-link'>
                Facturación
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='dropdown-link'>
              Contabilidad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='dropdown-link'>
                Proveedores
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}