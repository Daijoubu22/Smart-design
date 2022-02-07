import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/products/Products";
import AddProduct from "./components/add-product/AddProduct";


function App() {
  return (
    <>
      <div className='fixed -z-10 w-full h-full bg-slate-200'></div>
      <header className='bg-white py-3 text-center shadow-lg'>
        <Link to='/products'>Products</Link> / <Link to='/add'>Add product</Link>
      </header>
      <main className='container mx-auto'>
        <Routes>
          <Route path='/products' exact element={<Products/>}/>
          <Route path='/add' exact element={<AddProduct/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
