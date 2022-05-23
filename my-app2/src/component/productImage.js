import home from '../assets/img/home.png';
import {ReactComponent as slider} from './slider.svg';
import './product.css';

import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTooltip,
} from 'mdb-react-ui-kit';

const ProductImage=()=>{
    const[collaps, Setcollaps] = useState(false);
    const [scrollableModal, setScrollableModal] = useState(false);
    return(
        <>
          <section id="product_images">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12 text-center">
                        <h2 className="text-title">
                            Product Images
                        </h2>
                        <span className="border_title "></span>
                    </div>
                </div>
                <div className="row gx-3">
                    <div id="screen2" className="col-lg-3 col-md-6 mb-3 hover-item-box screen2">
                        <div className="card hover-item screen  box-shadow1">
                           <a className="ripple" onClick={() => setScrollableModal(!scrollableModal)} href="#!" data-mdb-ripple-color="gold" data-mdb-toggle="modal" data-mdb-target="#product_images1">
                             
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Home Page</h5>
                                </div>
                                <img src={home}/>
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
        <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'className="modal fade">
        <MDBModalDialog scrollable className=" modal-lg">
          <MDBModalContent className=" modal-custom">
            <MDBModalHeader className=" modal-header-custom">
              <MDBModalTitle>Home Page</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody  className="modal-body body-modal1 ">
            
            <div id="change_iconarrow" className="body-modal modal1">
                <div id="change_iconarrow21" className="card-body text-center text-title-box2">
                  <MDBTooltip tag='svg' wrapperProps={{ href: "#" }} title="click down to view" >
                    <svg className="arrows"  >
                    <path stroke= "#f7f2d3" className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path stroke= "#f7f2d3" className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path stroke= "#f7f2d3" className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                    </MDBTooltip>
                </div>
               
                
                <a target="_blank" href={home} >
                    
                    <img src={home}/>
                </a>
            </div>
            </MDBModalBody>
            <MDBModalFooter className="modal-footer-custom">
              <MDBBtn className="btn btn-gold text-black btn-custom" onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    {/* <!-- Modal --> */}
            
            
                
                 </div>       
                </div>
                </div>
                
            </section>
        </>
    )
}
export default ProductImage;