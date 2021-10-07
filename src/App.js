import React, { useState, useEffect } from "react";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { commerce } from "./lib/commerce";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./pages/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    try{
      const { data } = await commerce.products.list();
      setProducts(data);
      setIsLoading(false);
    }catch(error){
      return <h1 className='text-4xl text-red-700'>{error}</h1>
    }
    
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
     
    toast.success('Added to cart', {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
   
  };

  const handleUpdateCartQty = async (productId, quantity) => {

    toast.success('Updated quantity..', {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });

    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
    
  };
  const handleRemoveFromCart = async (productId) => {
    toast.success('Removed from cart.', {
      position: "top-right",
      autoClose: 2200,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
    
  };
  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
 
  }, []);


  return (
    <BrowserRouter>
      <Navbar totalItems={cart.total_items} />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          {!isLoading ? (
            <Products products={products} onAddToCart={handleAddToCart} />
          ) : <Loading/>
          }
        </Route>

        <Route path="/cart" exact> 
         <Cart 
         cart={cart}
         handleUpdateCartQty={handleUpdateCartQty}
         handleRemoveFromCart={handleRemoveFromCart}
         handleEmptyCart={handleEmptyCart}
         ></Cart>
        </Route>


        <Route path="/checkout" exact> 
        <Checkout cart={cart}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
