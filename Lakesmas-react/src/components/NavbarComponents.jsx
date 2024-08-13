import {Navbar, Container, Nav, Image, Button} from "react-bootstrap"

import logo from '../assets/img/log.png'
import profil from '../assets/img/profil.png'
import {useNavigate} from "react-router-dom"

const NavbarComponents = () => {
    let navigate = useNavigate();

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="home">
                <img className="logo" src={logo} alt='Logo lakesmas'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link className="nav-link" href="home">Home</Nav.Link>
                <Nav.Link className="nav-link" href="prediction">Prediction</Nav.Link>
                </Nav>
                {/* <div>
                <img className="profil" src={profil} alt='Logo lakesmas' onClick={()=>navigate('/profile')}/>
                </div> */}
                </Navbar.Collapse>
                </Container>
    </Navbar>
        </div>
)
}

export default NavbarComponents
