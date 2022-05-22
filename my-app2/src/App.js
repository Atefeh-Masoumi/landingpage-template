import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Navbar from './component/Navbar';
import Header from './component/header';
import Body from './component/Body';

function App() {
  return (
    <MDBContainer fluid>
      <Navbar/>
      <Header/>
      <Body/>
    </MDBContainer>
  );
}

export default App;
