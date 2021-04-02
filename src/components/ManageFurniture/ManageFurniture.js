import React from 'react';
// import { useHistory } from 'react-router';

const ManageFurniture = ({furniture}) => {
  // const history = useHistory();
  
  const handleDelete = (id) => {
    
    fetch(`https://gentle-woodland-19462.herokuapp.com/deleteProduct/${id}`, {
        method : "DELETE"
    })
    .then(res => res.json())
    .then(data=>{
        if(data){
            alert('Product Deleted')
            // location.reload(false);
        }
        // history.push(0);
        
        // furniture.target.node.style.display = 'none';
    })
}
    return (
       <div>  
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
      </div> 
        
    );
};

export default ManageFurniture;