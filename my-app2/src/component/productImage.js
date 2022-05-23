import home from '../assets/img/home.png';
import {ReactComponent as slider} from './slider.svg';
// import './product.css';
import './style.css';
import $ from 'jquery';

import React, { useEffect, useState } from 'react';
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


const jQuery = ()=>{
  $('.modal1 ').on("click", function () {
  $('#change_iconarrow21').addClass("active");
  $('#change_iconarrow').addClass("icon-botton-arrow");
  $('#screen2').addClass("screen2");
      setTimeout(RemoveClass, 10000);
  });
}

function RemoveClass() {
  $('#change_iconarrow21').removeClass("active");
  $('#change_iconarrow').removeClass("icon-botton-arrow");
  $('#screen2').addClass("screen2");
}


const ProductImage=()=>{
  useEffect(()=>{
    jQuery();
    RemoveClass();
  },[]);
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
                           <a  onClick={() => setScrollableModal(!scrollableModal)}   >
                          
                           <div className="card-body text-center text-title-box">
                                <h5 className="card-title title-boximage" >Home Page</h5>
                                </div>
                                <img src={home}/>
                            
                           </a>
                        </div>
                        {/* <!-- Modal --> */}
        <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'className="modal fade" id="product_images1" staticBackdrop>
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
                  <MDBTooltip tag='svg'  title="click down to view" >
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

                     <div id="screen10" className="col-lg-3 col-md-6 content mb-3 hover-item-box screen2">
                        <div className="card hover-item screen box-shadow1">
                                <div className="card-body text-center text-title-box">
                                    <svg style={{marginTop: "-69px"}} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" height="60px">
                                        <path style={{fill: "#f7f2d3" }}d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z"></path>
                                    </svg>
                                    <h5 className="card-title ">More demos coming soon...</h5>
                                </div>
                                
                        </div>
                    </div>      
       </div>
      </div>
                
            </section>
        </>
    )
}
export default ProductImage;