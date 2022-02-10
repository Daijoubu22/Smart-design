import React from 'react';
import ProductsItem from './ProductsItem';

const ProductsList = ({products, loading}) => {
    if (loading) return (
        <p className='text-center'>Loading...</p>
    )

    else return (
        <>
            {!products.length ? <p className='text-center'>Nothing found</p> : <></>}
            {products.map((product, i) => <ProductsItem product={product} key={i}/>)}
        </>
    )
}

export default ProductsList;