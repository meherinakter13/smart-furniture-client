import React, { useEffect, useState } from 'react';
import ManageFurniture from '../ManageFurniture/ManageFurniture';

const ManageProduct = () => {
    const [furnitures ,setFurnitures] = useState([])
    useEffect(()=>{
        fetch('https://gentle-woodland-19462.herokuapp.com/furnitures')
        .then(res =>res.json())
        .then(data => setFurnitures(data))
    },[])
    return (
        <div className=" container">
            <table class="table table-primary col-md-12 col-sm-12">
                <thead>
                    <tr>
                    <th className="w-25" scope="col">Product Name</th>
                    <th className="w-25" scope="col">Description</th>
                    <th className="w-25" scope="col">Price</th>
                    <th className="w-25" scope="col">Image</th>
                    <th className="w-25" scope="col">Action</th>
                    </tr>
                </thead>
            </table>
         <div className="row">
            {
                furnitures.map(furniture=><div className="col-md-12 col-sm-12"><ManageFurniture furniture={furniture}> </ManageFurniture></div>)
            }
        </div>
        </div>
    );
};


export default ManageProduct;