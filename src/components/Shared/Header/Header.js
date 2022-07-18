import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const{users, logOut} = useAuth()
    return (
        <>
            <Navbar
                sticky="top"
                collapseOnSelect
                expand="lg"
                bg="primary"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link> 

                            {!users.email ? (
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            ) : (
                                <button onClick={logOut}>SignOut</button>
                            )}
                        </Nav>
                        {
                            users.email? <Navbar.Text>
                            Signed in as:{" "}
                            <a href="#login">{users.displayName}</a>
                        </Navbar.Text> : ''
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;