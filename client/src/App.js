import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/products/Products";
import AddProduct from "./components/add-product/AddProduct";


function App() {
  return (
    <>
      <div className='fixed -z-10 w-full h-full bg-slate-200'></div>
      <header className='bg-white py-3 text-center shadow-lg'>
        <Link to='/products'>Products</Link> / <Link to='/add-product'>Add product</Link>
      </header>
      <main className='container mx-auto'>
        <Routes>
          <Route path='/products' element={<Products/>}/>
          <Route path='/add-product' element={<AddProduct/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
