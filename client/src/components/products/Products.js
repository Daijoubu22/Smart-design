import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [property, setProperty] = useState('name');

  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:5000/api/product');
    setProducts(response.data);
    setLoading(false);
  }

  const search = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:5000/api/product', {
      params: {input, property}
    });
    setProducts(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <form onSubmit={e => e.preventDefault()} className='my-20 max-w-[800px] flex justify-center mx-auto'>
        <button className='group relative bg-gradient-to-br from-white to-slate-100 py-1 w-28 rounded-l-xl'>
          <div className='absolute py-1 rounded-xl border hidden w-full top-full bg-gradient-to-br from-white to-slate-100 opacity-0 group-hover:block group-hover:opacity-100 z-10'>
            <div onClick={() => setProperty('name')} className='hover:underline py-1'>name</div>
            <div onClick={() => setProperty('description')} className='hover:underline py-1'>description</div>
            <div onClick={() => setProperty('price')} className='hover:underline py-1'>price</div>
            <div onClick={() => setProperty('weight')} className='hover:underline py-1'>weight</div>
            <div onClick={() => setProperty('color')} className='hover:underline py-1'>color</div>
          </div>
          {property}
        </button>
        <input type='text' name='input' value={input} onChange={(e) => setInput(e.target.value)} className='w-80 mr-2 border rounded-r-xl px-3 py-1'/>
        <button onClick={search} className='bg-gradient-to-br from-white to-slate-100 px-10 py-2 rounded-full'>Search</button>
      </form>
      <ProductsList products={products} loading={loading}/>
    </>
  );
};

export default Products;