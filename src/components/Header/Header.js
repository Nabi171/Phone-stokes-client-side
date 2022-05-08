import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import img from '../Header/phone.png';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav>
                <Navbar className='nav-color' expand="lg"  >
                    <Container>
                        <Navbar.Brand href="#home" className='fw-bold'><span>
                            <img src={img} className='w-25' alt="" />
                        </span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/home">Home</NavLink >
                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/blogs">Blogs</NavLink >

                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/allphones">AllPhones</NavLink >
                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/managePhones">ManagePhones</NavLink >
                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/additems">Additem</NavLink >

                                {user ?
                                    <NavLink onClick={() => signOut(auth)}
                                        className={({ isActive }) => isActive ? "active-link" : "link"}
                                        to="/signup">logOut</NavLink > :
                                    <NavLink
                                        className={({ isActive }) => isActive ? "active-link" : "link"}
                                        to="/login">Login</NavLink >}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;