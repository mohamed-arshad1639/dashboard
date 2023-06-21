import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Home() {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/form'>Add blog</Link></Nav.Link>
                       
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
