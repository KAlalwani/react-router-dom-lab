import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"
function ProductDetails() {
    const [ product, setProduct ] = useState(null)

    const { productId } = useParams()
    console.log(productId)

    async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(()=>{
        getProduct()
    },[])

    

  return (
    <div>
        <h1>Product Details</h1>
        {product ? 
        <>
            <p>Name: {product.name}</p>
            <p>Course: {product.course}</p>
            <p>City: {product.city}</p>
        </>
         : null}
        
    </div>
  )
}

export default ProductDetails