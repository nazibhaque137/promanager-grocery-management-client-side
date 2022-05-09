import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase.init';
import { Container, Nav, Navbar } from 'react-bootstrap';

const auth = getAuth(app);

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="header">
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="blogs">Blogs</Nav.Link>
                                <Nav.Link href="about">About</Nav.Link>
                                {
                                    user && <>
                                        <Nav.Link href="manage-inventory">Manage Inventory</Nav.Link>
                                        <Nav.Link href="add-item">Add Items</Nav.Link>
                                        <Nav.Link href="my-items">My Items</Nav.Link>
                                    </>
                                }

                                {
                                    user ?
                                        <button className='btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Sign Out</button>
                                        :
                                        <Nav.Link href="login">
                                            Login
                                        </Nav.Link>}
                                        
                            </Nav>
       
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;