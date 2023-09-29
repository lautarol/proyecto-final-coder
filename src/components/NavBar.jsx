import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Loader } from '.';
// import axios from 'axios';

import { useCategories } from '../hooks/useCategories';

import CartWidget from './CartWidget';


const NavBar = () => {

  const {categories, loading} = useCategories();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <Link to={'/'}>Tienda Coder</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown" key={'navVatTitle'}>
            {loading? 
              <Loader /> :
              categories.map(category => 
                <Fragment key={category}>
                  <NavDropdown.Item as={Link} to={`/category/${category}`}>{category}</NavDropdown.Item>
                  <NavDropdown.Divider />
                </Fragment>
              )
            }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;
