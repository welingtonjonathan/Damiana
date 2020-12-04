import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import './Menu.css';

 function BaseMenu(props){
   const {location} = props;
  return(
    <Navbar className="navbar-dark" id="menu" fixed="top">
      <Navbar.Brand>
        <Nav.Link as={Link} href="/" to="/">
          <img id="logo" src={require(`./img/Logo.png`).default} />
        </Nav.Link>        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="item-menu" />
      <Navbar.Collapse id="item-menu" >
        <Nav activeKey={location.pathname} className="ml-auto mr-3">
          <Nav.Item>
            <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/contatos" to="/contatos">Contatos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/lojas" to="/lojas">Lojas</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
  )
}

const Menu = withRouter(BaseMenu);

export default Menu