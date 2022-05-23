import home from '../assets/img/home.png';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import'./product.css'
import React, { useState } from 'react';
const Newsection =()=>{
     
    const [scrollableModal, setScrollableModal] = useState(false);
    return (
        <div>
    <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image '>
        <MDBCardImage src='' fluid alt='...' />
        
        <a   href="#!"  data-mdb-toggle="modal" data-mdb-target="#product_images1">
                         
        </a>
       
      </MDBRipple>
      <MDBCardBody className="card-body text-center text-title-box" onClick={() => setScrollableModal(!scrollableModal)} >
        <MDBCardTitle className="card-title title-boximage">Home Page</MDBCardTitle>
        
        <img src={home}/>
     
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  

        </div>
    )
}
export default Newsection;