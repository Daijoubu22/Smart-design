import React from 'react';

const AddProduct = () => {
  return (
    <div className='mt-20 p-10 bg-gradient-to-br from-white to-slate-100 rounded-3xl max-w-[800px] mx-auto drop-shadow-xl'>
      <h2 className='font-bold text-center text-2xl mb-8'>Add new product</h2>
      <form action='#'>
        <div className='mb-4 flex items-center'>
          <label className='mr-2' htmlFor='name'>Name: </label>
          <input type='text' name='name' className=' w-96 border rounded-xl px-3 py-1'/>
        </div>
        <div>
          <label className='block mb-2' htmlFor='description'>Description: </label>
          <textarea name='description' rows='5' className='border w-full rounded-xl px-3 py-1 mb-8 resize-none'></textarea>
        </div>
        <p className='font-bold text-xl mb-4'>Characteristics:</p>
        <div className='mb-4'>
          <label className='mr-2' htmlFor='price'>Price: </label>
          <input type='text' name='price' className='border rounded-xl px-3 py-1'/>
        </div>
        <div className='mb-4'>
          <label className='mr-2' htmlFor='weight'>Weight: </label>
          <input type='text' name='weight' className='border rounded-xl px-3 py-1'/>
        </div>
        <div className='mb-12'>
          <label className='mr-2' htmlFor='color'>Color: </label>
          <input type='text' name='color' className='border rounded-xl px-3 py-1'/>
        </div>
        <button className='block mx-auto px-10 py-2 border rounded-full'>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;