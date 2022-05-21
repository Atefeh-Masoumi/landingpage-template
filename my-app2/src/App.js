import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Navbar from './component/Navbar';
import Header from './component/header';

function App() {
  return (
    <MDBContainer fluid>
      <Navbar/>
      <Header/>
    </MDBContainer>
  );
}

export default App;
