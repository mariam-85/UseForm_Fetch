import { useState, useEffect } from 'react';
import ProductsContainer from './components/ProductsContainer';
import { getProducts } from './requests/products'
import { Context } from './context'
import AddProductForm from './components/AddProductForm';

export default function App() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const createNewProduct = product => setProducts(prev_state => [...prev_state, { 
    ...product,
    id: Date.now()
  }]);

  return (
    <div>
      <Context.Provider value={{ products, createNewProduct }}>
        <AddProductForm />
        <ProductsContainer />
      </Context.Provider>
    </div>
  );
}

