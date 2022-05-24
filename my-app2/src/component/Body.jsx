import {ReactComponent as Svgbotom} from './SvgBot.svg';
import {ReactComponent as Svgsec} from './svgsecond.svg';
import'./body.css'

const Body =()=>{
    return(
    <div class="" style={{marginTop: "100px", backgroundColor: "#484848"}}>
        <div className="absolute">
            <Svgbotom className="relative"/>
        </div>
      <div class="container" style={{marginTop: "100px"}}>
                <div className="row mb-3">
                  <div className="col-md-12 text-center">
                        <h2 className="text-title text-white">
                            Template Features
                        </h2>
                        <span className="border_title "></span>
                  </div>
                </div>
                <div className="row gx-5 justify-content-center mb-5-5">
                  <div className="col-lg-3 col-md-6 mb-5-5">
                    <div className="card box-shadow2 hover-shadow">
                        <div className="card-body text-center box-features">
                            <i className="fas fa-spell-check"></i>
                          <h5 className="card-title">Easily Customizable</h5>
                          <p className="card-text">Build and customize stunning pages in minutes.</p>
                          
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5-5">
                    <div className="card box-shadow2 hover-shadow">
                        <div className="card-body text-center box-features">
                            <i className="fas fa-headset"></i>
                          <h5 className="card-title">24/7 Support</h5>
                          <p className="card-text">We commit to keep your site up-to-date.</p>
                          
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5-5">
                    <div className="card box-shadow2 hover-shadow">
                        <div className="card-body text-center box-features">
                            <i className="fas fa-palette"></i>
                          <h5 className="card-title">UI/UX Design</h5>
                          <p className="card-text">the best design by following the latest trends.</p>
                          
                        </div>
                      </div>
                  </div>
               
                
                    <div className="col-lg-3 col-md-6 mb-5-5">
                        <div className="card box-shadow2 hover-shadow">
                            <div className="card-body text-center box-features">
                                <i className="fas fa-chart-line"></i>
                              <h5 className="card-title">SEO Optimized</h5>
                              <p className="card-text">The best SEO practices to achieve higher rankings.</p>
                              
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5-5">
                        <div className="card box-shadow2 hover-shadow">
                            <div className="card-body text-center box-features">
                                <i className="far fa-images"></i>
                              <h5 className="card-title">Adaptive Images</h5>
                              <p className="card-text">Detects screen size and provides optimal images.</p>
                              
                            </div>
                          </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5-5">
                        <div className="card box-shadow2 hover-shadow">
                            <div className="card-body text-center box-features">
                                <i className="fas fa-server"></i>
                              <h5 className="card-title">Huge Collection</h5>
                              <p className="card-text">collection of elements and flexible layouts.</p>
                             
                            </div>
                          </div>
                    </div>
                
                
                    <div class="col-lg-3 col-md-6 mb-5-5">
                        <div class="card box-shadow2 hover-shadow">
                            <div class="card-body text-center box-features">
                                <i class="fab fa-bootstrap"></i>
                              <h5 class="card-title">Bootstrap 5</h5>
                              <p class="card-text">Designed with the latest method of the day.</p>
                              
                            </div>
                          </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5-5">
                        <div class="card box-shadow2 hover-shadow">
                            <div class="card-body text-center box-features">
                                <i class="fab fa-html5"></i>
                              <h5 class="card-title">Html 5</h5>
                              <p class="card-text">Designed with the latest html code.</p>
                              
                            </div>
                          </div>
                    </div>
                  </div>
        </div>
        <div>
            <Svgsec/>
        </div>
 </div>
       
    )
}

export default Body;