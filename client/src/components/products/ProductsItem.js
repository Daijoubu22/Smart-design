import React from 'react';

const ProductsItem = ({product}) => {
    return (
        <div className='mt-10 p-10 bg-gradient-to-br from-white to-slate-100 rounded-3xl max-w-[800px] mx-auto drop-shadow-xl'>
            <p className='font-bold text-center text-2xl'>{product.name}</p>
            <p className='text-center'>{product.description}</p>
            <p className='font-bold'>Parameters:</p>
            <p>Price: {product.parameters.price}</p>
            <p>Weight: {product.parameters.weight}</p>
            <p>Color: {product.parameters.color}</p>
        </div>
    )
}

export default ProductsItem;