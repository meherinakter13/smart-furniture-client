import React from 'react';
import { Navbar } from 'react-bootstrap';
import{Link} from 'react-router-dom';
// import'./Header.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home"><h2 className="text-info"><Link to="/home" className="nav-link">Smart Furniture</Link></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end ">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/order" className="nav-link">Orders</Link>
                <Link to="/admin" className="nav-link">Admin</Link>
                <Link to="#" className="nav-link">Deals</Link>
                <Link to="/login" className="nav-link"onClick={handleSignOut} >{loggedInUser.email?'Logout':'Login'}</Link>
                {/* <Link to="#" className="nav-link active text-dark">{loggedInUser.displayName||loggedInUser.email}</Link> */}
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;