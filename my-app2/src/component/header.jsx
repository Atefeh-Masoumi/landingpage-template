import {ReactComponent as Svgbotom} from './SvgBot.svg';
import Particles from "react-tsparticles";
import './header.css';
// import'./style.css';


import { loadFull } from "tsparticles";
import img1 from '../assets/img/home-home-top.png';
import img2 from '../assets/img/contact-us-home-top.png';
import img3 from "../assets/img/article-singlepage-home-top.png";
import img4 from "../assets/img/about-us-home-top.png";
import img5 from "../assets/img/dashboard-home-top.png";

const Header = ()=>{
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    return(
        <div className="" style={{backgoungColor:'#484848'}}>
           <a class="goclick smooth" href="#">
        <button type="button" class="btn bubbly-button wow fadeIn ripple-surface-dark" id="btn-back-top" data-ripple-color="dark"><i class="fas fa-chevron-up"></i></button>
    </a>
        <div className="container">
          <div className="row justify-content-center ">
          <div className="col-md-4 text-center" style={{marginTop: '279px'}}> 
              <h1 className="mb-3 title-tophome">Aban Template</h1>
            </div>
          </div>

        </div>
        <div classNmae="top-slide">
                <p className="title-top-slide">
                  Aban
                  <br/>
                  Template
                </p>
                <div className="body-slide">
                  <div className="circle-1 "></div>
                  <div className="circle-2"></div>
                  <div className="circle-3"></div>
                </div>
        </div>


        <div id='particles-js'className="bg-image particle relative cover-contact">
              <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#4f4f4f",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffd700",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>

        <ul class="main-nav">
          <li class="item">   
            <img class="bg" data-flip-id="img1" src={img1}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img2" src={img2}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img3" src={img3}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img4" src={img4}/>
          </li>
          <li class="item">
            <img class="bg" data-flip-id="img5" src={img5}/>
          </li>
        </ul>
        
          
        </div>
    )
}

export default Header;
