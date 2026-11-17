import { Route, Routes } from "react-router";
import HomePage from "./pages/ProductDetails/HomePage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element ={<HomePage />} />
          <Route path="/products" element ={<ProductList />} />
          <Route path="/new-product" element ={<CreateProduct />} />
          <Route path="/products/:productId" element ={<ProductDetails />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>

      </div>
    </div>
    </>
  );
};

export default App;
