import React, { useState, useEffect } from 'react' 
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/HomePage/Home'
import Donate from './components/Pages/Donate/Donate'
import Team from './components/Pages/Our Team/Team'
import Footer from './components/Footer/Footer'
import { commerce } from './lib/commerce'
import Cart from './components/Cart/Cart'

function App() {


  const [products, setProducts] = useState([]) ; 

  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list() ; 

    setProducts(data);
  }


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve() ) ; 
  }


  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity); 

    setCart(response.cart) ; 
  }


  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity }) ; 

    setCart(response.cart);
  }


  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId) ; 

    setCart(cart) ; 
  }


  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty() ; 

    setCart(cart) ; 
  }


  useEffect(() => {
    fetchProducts();
    fetchCart() ; 
  }, []);

  // console.log(cart) ; 

  return (
    <Router>
      <Sidebar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route 
            path='/donate'
            render={(props) => (
              <Donate {...props} products={products} onAddToCart={handleAddToCart} />
            )}
          />
          <Route path='/team' exact component={Team} />
          <Route path='/cart'>
            <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>
          </Route>
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
