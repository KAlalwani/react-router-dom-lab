import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router"
import '../../App.css'
function AllProducts(){
    const [ products, setProducts ] = useState([])

    async function getAllProducts(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
        setProducts(response.data)
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    return(
        <div>
            <h1>All Products</h1>

            <div className='productsContainer'>
                {products.map((oneProduct)=>
                <div key={oneProduct._id} className='productsCard'>
                    <p>title:{oneProduct.title}</p>
                    <p>description:{oneProduct.description}</p>
                    <p>category:{oneProduct.category}</p>
                    <p>price:{oneProduct.price}</p>
                    <p>quantity:{oneProduct.quantity}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default AllProducts