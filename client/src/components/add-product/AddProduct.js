import React, { useRef, useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const empty = {
    name: '',
    description: '',
    parameters: {
      price: '',
      weight: '',
      color: ''
    }
  };

  const [product, setProduct] = useState(empty);
  const paramsRef = useRef(null);

  const changeHandler = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const changeParamsHandler = (e) => {
    const prevParameters = product.parameters;
    setProduct({...product, parameters: {...prevParameters, [e.target.name]: e.target.value}});
  }

  const addProduct = async () => {
    for (let key in product) {
      if (product[key] == '') return alert('Please complete all fields!');
    }
    for (let key in product.parameters) {
      if (product.parameters[key] == '') return alert('Please complete all fields!');
    }
    try {
      const response = await axios.post('http://localhost:5000/api/product/add', {...product});
      setProduct(empty);
      for (const el of paramsRef.current.children) el.children[1].value = '';
      alert('Your product has been added to the database')
      console.log(response.data.message);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <div className='mt-20 p-10 bg-gradient-to-br from-white to-slate-100 rounded-3xl max-w-[800px] mx-auto drop-shadow-xl'>
      <h2 className='font-bold text-center text-2xl mb-8'>Add new product</h2>
      <form action='#' onSubmit={e => e.preventDefault()}>
        <div className='mb-4 flex items-center'>
          <label className='mr-2' htmlFor='name'>Name: </label>
          <input type='text' name='name' value={product.name} onChange={changeHandler} className=' w-96 border rounded-xl px-3 py-1'/>
        </div>
        <div>
          <label className='block mb-2' htmlFor='description'>Description: </label>
          <textarea name='description' value={product.description} onChange={changeHandler} rows='5' className='border w-full rounded-xl px-3 py-1 mb-8 resize-none'></textarea>
        </div>

        <p className='font-bold text-xl mb-4'>Parameters:</p>
        <div ref={paramsRef} className='w-[360px]'>
          <div className='mb-4 flex justify-between'>
            <label className='mr-2' htmlFor='price'>Price ($): </label>
            <input type='number' name='price' value={product.price} onChange={changeParamsHandler} className='border rounded-xl px-3 py-1'/>
          </div>
          <div className='mb-4 flex justify-between'>
            <label className='mr-2' htmlFor='weight'>Weight (g): </label>
            <input type='number' name='weight' value={product.weight} onChange={changeParamsHandler} className='border rounded-xl px-3 py-1'/>
          </div>
          <div className='mb-12 flex justify-between'>
            <label className='mr-2' htmlFor='color'>Color: </label>
            <input type='text' name='color' value={product.color} onChange={changeParamsHandler} className='border rounded-xl px-3 py-1'/>
          </div>
        </div>
        
        <button onClick={addProduct} className='block mx-auto px-10 py-2 border rounded-full'>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;