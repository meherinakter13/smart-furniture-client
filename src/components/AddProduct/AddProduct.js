import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data, e) => {
    e.target.reset();
    const furnitureData = {
      name: data.furnitureName,
      price: data.price,
      description: data.description,
      imageURL: imageURL
    };
    console.log(furnitureData);
    fetch(`https://gentle-woodland-19462.herokuapp.com/addProduct`,{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(furnitureData)
    })
    .then(res =>console.log('server connected',res))
  }

  const handleImageUpload = furniture => {
      // console.log(event.target.files[0])
      const imageData = new FormData();
      imageData.set('key', '28186e6c3b6103cb5de3384e84ce22c7');
      imageData.append('image', furniture.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        <div>
            <h1>Add Product</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 bg-info shadow mt-5 p-5 rounded text-white">
                <div className="col-md-6">
                    <label className="form-label ">Furniture Name</label>
                    <input type="text" name="furnitureName" className="form-control"  placeholder="New Furniture" ref={register} />
                </div>
                <div className="col-md-6">
                    <label  className="form-label ">Add Price</label>
                    <input type="number" name="price" className="form-control" placeholder="Enter Price" ref={register} />
                </div>
                <div className="col-md-6">
                    <label  className="form-label ">Add Description</label>
                    <input type="text" name="description" className="form-control" placeholder="Enter Description" ref={register} />
                </div>
                <div className="col-md-6">
                    <label className="form-label ">Add Photo</label>
                    <input className="form-control" type="file" onChange={handleImageUpload} />
                </div>
                <div>
                    <input type="submit" className="mt-3 ml-3 btn btn-danger" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;