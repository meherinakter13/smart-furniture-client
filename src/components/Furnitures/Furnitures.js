import React from 'react';

import { Link ,useHistory} from 'react-router-dom';



const Furnitures = ({furniture}) => {
    const history = useHistory()
    const handleCheckOut =(_id)=>{
      history.push(`/checkOut/${_id}`)
    }
 
    return (
        <div>
            <div className="card mb-4" style={{width: "20rem",height:"30rem",backgroundColor:"rgb(68, 68, 187)"}}>
              <img src={furniture.imageURL} className="card-img-top" style={{width: "19.9rem",height:"18rem"}} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{furniture.name}</h5>
              <p className="card-text">{furniture.description}</p>
            <div className="card-footer d-flex justify-content-between ">
              <h3>${furniture.price}</h3>
              <button onClick={() =>handleCheckOut(furniture._id)} className="btn btn-danger">Buy Now</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Furnitures;