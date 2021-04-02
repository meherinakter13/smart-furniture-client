import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const [furnitures ,setFurnitures] = useState([])
    useEffect(()=>{
        fetch('https://gentle-woodland-19462.herokuapp.com/furnitures')
        .then(res =>res.json())
        .then(data => setFurnitures(data))
    },[])
    const deleteProduct  = () =>{
        fetch(`https://gentle-woodland-19462.herokuapp.com/furnitures`)
        .then(res =>res.json())
        .then(data => setFurnitures(data))
       }
        
        const handleDelete = (id) => {
          fetch(`https://gentle-woodland-19462.herokuapp.com/deleteProduct/${id}`, {
              method : "DELETE"
          })
          .then(res => res.json())
          .then(data=>{
              if(data){
                  alert('Product Deleted')
                  deleteProduct();
                  // location.reload(false);
              }
              // history.push(0);
              
              // furniture.target.node.style.display = 'none';
          })
      }
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
                furnitures.map(furniture=><div className="col-md-12 col-sm-12">
                    <table class="table table-primary">
                        <tbody>
                            <tr>
                            <td className="w-25">{furniture.name}</td>
                            <td className="w-25">{furniture.description}</td>
                            <td className="w-25">{furniture.price}</td>
                            <td className="w-25"> <img src={furniture.imageURL} style={{width: "100px",height:"100px"}} alt=""/></td>
                            <td className="w-25"><button className ="btn btn-danger mt-3" onClick = {()=>handleDelete(furniture._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <ManageFurniture furniture={furniture}> </ManageFurniture> */}
                    </div>)
            }
        </div>
        </div>
    );
};


export default ManageProduct;