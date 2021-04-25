import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class header extends Component {
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Sample</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to = '/home'>Home</Link></Nav.Link>
                    <Nav.Link><Link to = '/contactMe'>ContactMe</Link></Nav.Link>
                </Nav>
            </Navbar>
         );
    }
}
 
export default header ;