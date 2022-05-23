import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Navbar from './component/Navbar';
import Header from './component/header';
import Body from './component/Body';
import ProductImage from './component/productImage.js';
import Footer from './component/Footer';
import Newsection from './component/Newproduct';

function App() {
  return (
      <>
      <Navbar/>
      <Header/>
      <Body/>
      <ProductImage/>
      {/* <Newsection/> */}
      <Footer/>
      </>
  );
}

export default App;
