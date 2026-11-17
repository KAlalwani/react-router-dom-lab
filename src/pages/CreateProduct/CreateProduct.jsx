import { useState } from "react";
import axios from "axios";

function CreateProduct() {
  const [formData, setFormData] = useState({
    "title": "",
    "description": "",
    "category": "",
    "price": 0,
    "quantity": 0,
  });

  
  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value })
  }


  
  async function handleSubmit(event){
    event.preventDefault() 
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products`, formData)
    setFormData({
    title: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
  }) 
  }

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title:</label>
        <input 
        type="text" 
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        />
<br />
<br />
        <label htmlFor="description">Description:</label>
        <textarea 
        type="text" 
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
        />
<br />
<br />

        <label htmlFor="category">Category:</label>
        <input 
        type="text" 
        name="category"
        id="category"
        value={formData.category}
        onChange={handleChange}
        />
<br />
<br />

        <label htmlFor="price">price:</label>
        <input 
        type="number" 
        name="price"
        id="price"
        value={formData.price}
        onChange={handleChange}
        />
<br />
<br />

        <label htmlFor="quantity">quantity:</label>
        <input 
        type="number" 
        name="quantity"
        id="quantity"
        value={formData.quantity}
        onChange={handleChange}
        />
<br />
<br />

        <button>Create Product</button>

      </form>
    </div>
  );
}

export default CreateProduct;