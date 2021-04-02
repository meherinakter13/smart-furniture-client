import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://gentle-woodland-19462.herokuapp.com/allOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
            <div className="mt-3 container" >
                <div className="row mx-auto">
                <div className="col-md-12 col-sm-12">
                <h3 className="m-5">Thank You, {loggedInUser.email} You have ordered total {orders.length} product.</h3>
                </div>
                {
                    orders.map(order =>
                        <table className="table table-primary">
                            <tbody>
                                <tr>
                                <td style={{width:"20%"}}>{order.name}</td>
                                <td style={{width:"20%"}}>{order.description}</td>
                                <td style={{width:"20%"}}>{order.price}</td>
                                <td style={{width:"20%"}}><img src={order.imageURL} style={{width: "100px",height:"100px"}} alt=""/></td>
                                <td style={{width:"20%"}}>{(new Date(order.date).toDateString("dd/MM/yyyy"))}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
                </div>
            </div>
    );
};

export default Orders;