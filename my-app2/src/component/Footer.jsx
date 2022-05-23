import './footer.css';
import {ReactComponent as Svgb} from './svgsecond.svg';
const Footer=()=>{
    return (
        <>
        <div>
             <Svgb/>
         </div>
        <section id="buy_templates" className="py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="card box-footer">
                            <div className="card-body hoverzome-item text-white">
                              <h5 className="card-title">Buy Templates</h5>
                              <p className="card-text py-2 mb-2">The Best, Lightest And Most Powerful Html Template In Themeforest Market At Your Service!</p>
                              <br/>
                              <a href="#!" target="_blank" data-mdb-toggle="tooltip" title="" className="site-footer__bottom" data-mdb-original-title="Buy Now">
                                <i className="fas fa-cart-arrow-down"></i>
                                </a>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
        <div className="copyright text-center text-gold p-3">
            <div className="container-fluid">
              <div className="row">
                <div className=" col-md-6 mb-1 mt-2">
                    © 2022 Dana Web Design Group |
                    <a className="text-gold" target="_blank" href="https://dana-team.com"> View portfolio and purchase products</a>
                </div>
                <div className="col-md-6 socil-footer">
                    <a className="btn btn-gold text-black active ripple-surface-dark" data-mdb-ripple-color="dark" href="#!" >Buy Now</a>
                </div>
              </div>
            </div>
           </div>
    </footer>
        </>
    )
}
export default Footer;