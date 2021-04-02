import React, { useEffect, useState } from 'react';
import Furnitures from '../Furnitures/Furnitures';

const Home = () => {
    const [furnitures ,setFurnitures] = useState([])
    useEffect(()=>{
        fetch('https://gentle-woodland-19462.herokuapp.com/furnitures')
        .then(res =>res.json())
        .then(data => setFurnitures(data))
    },[])
    return (
        <div className="row mx-auto container mt-5 text-white">
            {
                furnitures.length ? "" : <img className="mx-auto" src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-23.jpg" alt=""/>
            }
            {
                furnitures.map(furniture=><div className=" col-md-4 col-sm-12"><Furnitures furniture={furniture}> </Furnitures></div>)
            }
        </div>
    );
};

export default Home;