import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Side = props => {


    return (
        <>
            <Nav className="col-md-12 d-md-block sidebar " >
                <div className="sidebar-sticky"></div>
                <Nav.Item className="p-3">
                    <Link to="/manageProduct" className="text-white  text-decoration-none ">Manage Product</Link>
                </Nav.Item>
                <Nav.Item className="p-3">
                    <Link to="/addProduct"  className="text-white  text-decoration-none ">Add Product</Link>
                </Nav.Item>
            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar