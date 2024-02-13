import React from 'react';
import { Container, Section } from "../style";
import Navbar from "./Navbar";
import styled from "styled-components"
// import bg from "../bg-video.mp4"
import Footer from '../Footer';
import img from "../images/groom.png";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.jpg";
import i6 from "../images/i6.jpg";
import bg from "../images/bg-home-video.mp4";
import "../Marquee.css"
import "../Bubble.css"
import ReactPlayer from 'react-player';

const Home= () =>  {
  const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

    return (
      <div >
        <StyledSection >
        <Navbar/>

          <Video>
      <video  autoPlay loop muted>
      <source src={bg} type="video/mp4"/>
      </video>
      {/* <ReactPlayer
  url="https://youtu.be/XKSzi73LGLo?si=C2wOJGbPCiIjvfh-"
  width="100%"
  playing={true}
  muted={true}
  controls={false} // Hide default controls
  config={{
    youtube: {
      playerVars: {
        modestbranding: 1, // Hide YouTube logo
        controls: 0, // Hide video controls
        showinfo: 0, // Hide video title and uploader info
        loop: 1, // Enable loop
        share:0,
      },
    },
  }}
/>  */}
      </Video>
      <Text>
<h1>Capturing Special Moments</h1>
<p>
Moments that last forever
</p>
      </Text>
      {/* <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#f5dfe5"  d="M0,96L30,128C60,160,120,224,180,218.7C240,213,300,139,360,133.3C420,128,480,192,540,229.3C600,267,660,277,720,250.7C780,224,840,160,900,122.7C960,85,1020,75,1080,96C1140,117,1200,171,1260,176C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg> */}


<svg class="wave" width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
  <defs>
   <path id="wavepath" d="M 0 2000 0 500 Q 140.5 398 281 500 t 281 0 281 0 281 0 281 0 281 0  v1000 z" /> 
  </defs>
  <g >
   <use xlinkHref="#wavepath" y="413" fill="#f5dfe5">
   </use>
  </g>
</svg>
        </StyledSection>
      <Section style={{background:'#f5dfe5'}}>
      
        <Review>
<h4>
Ever After Weddings perfectly captured the joy and magic of our special day. Their professionalism and attention to detail were unmatched - we will treasure our wedding photos and videos forever.
</h4>
<div style={{display:'flex', gap:'16px', justifyContent:'center', alignItems:'center'}}>
  <img src={img}/>
  <p>
  Shubham, Groom
</p>
</div>


        </Review>
      </Section>
      <Section>
        <div className="containerm">
          <h2 >
            Our Latest Work
            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4212 19.8243C13.2533 20.0431 13.0855 20.2619 12.9971 20.5239C12.5862 21.6743 11.9532 22.8049 13.4986 24.0939C15.129 25.4624 16.1383 24.5272 16.8893 23.6949C18.6852 21.6789 20.3111 19.5037 21.9952 17.3517C22.5879 16.5593 23.175 15.7303 23.5661 14.812C23.973 13.877 24.2893 12.8261 22.9463 11.7889C21.6882 10.8313 20.7383 11.0703 19.9605 11.8463C19.141 12.7085 14.7531 18.0006 13.4212 19.8243Z" fill="#FF6767"/>
<path d="M2.82382 19.3252C3.43326 19.6134 4.40446 19.3942 4.80395 19.0162C5.34528 18.4889 5.76313 17.6269 5.76355 16.7816C5.80413 12.8103 5.70693 8.77273 5.61521 4.77162C5.61709 4.17825 5.44964 3.55178 5.2822 2.92531C4.88833 1.52322 4.1551 -0.0710203 2.55942 0.00244762C1.63479 0.0458543 0.319771 1.1336 0.372121 1.96563C0.634175 7.09707 1.2191 12.3113 1.78276 17.5056C1.81169 17.9398 1.94833 18.7254 2.82382 19.3252Z" fill="#FF6767"/>
<path d="M37.0289 31.5774C35.3548 31.7006 34.081 31.7264 32.8455 31.8742C29.2617 32.2912 25.6741 32.7307 22.1113 33.1974C21.1134 33.3373 20.0579 33.4679 19.2017 33.8161C18.5983 34.0661 17.8493 34.8257 17.9968 35.174C18.2534 35.7485 18.6594 36.4862 19.8489 36.609C20.3412 36.6655 20.9771 36.7451 21.5422 36.7206C25.5301 36.5312 29.5104 36.387 33.485 36.1027C34.8277 36.0186 36.2509 35.8084 37.3964 35.3216C38.2239 34.9687 39.0936 34.0201 38.9998 33.3561C38.927 32.7418 38.4367 31.805 37.0289 31.5774Z" fill="#FF6767"/>
</svg>

          </h2>
        <div class="marquee">
  <div class="marquee__group">
    <img src={i1} alt=''/>
    <img src={i2} alt=''/>
    <img src={i3} alt=''/>
    <img src={i4} alt=''/>
    <img src={i5} alt=''/>
  </div>

  <div aria-hidden="true" class="marquee__group">
  <img src={i6} alt=''/>
  <img src={i1} alt=''/>
    <img src={i2} alt=''/>
    <img src={i3} alt=''/>
    <img src={i4} alt=''/>
  </div>
</div>
<div class="marquee marquee--reverse">
  <div class="marquee__group">
    <img src={i6} alt=''/>
    <img src={i5} alt=''/>
    <img src={i1} alt=''/>
    <img src={i2} alt=''/>
    <img src={i3} alt=''/>
  </div>

  <div aria-hidden="true" class="marquee__group">
  <img src={i4} alt=''/>
  <img src={i5} alt=''/>
    <img src={i6} alt=''/>
    <img src={i3} alt=''/>
    <img src={i4} alt=''/>
  </div>
</div>

        </div>
      </Section>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  
const StyledSection = styled(Section)`
padding-top:0px;
padding-bottom:0px;
  background:transparent;
  position:relative;
top:0vh;
  height:100vh;

  `
  const Video = styled.div`
width:100%;
height:100%;
overflow:hidden;
position:absolute;
top:0;
left:0;
iframe{
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
video{
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
  `

  const Text = styled.div`
  position:absolute;
  top:65vh;
  left:0;
  width:100vw;
  // padding:0vw 20vw;
  text-align: left;
  padding-left: 24px;
  h1{
    color:#fff;
    font-size:46px;
    margin-bottom:0px !important;
  text-align: left !important;

    padding:0px !important;
  }
  p{
    color:#fff;
    font-size:20px;
    font-weight:400;
    margin-top:0px !important;

  }
  @media(max-width:500px){
    top:70vh;
    h1{
      font-size:29px;
    }
    p{
      font-size:17px;

    }
  }
  `
  const Review = styled.div`
  padding:24px 40px;
  text-align:center;
  h4{
    color:#000;
    font-size:24px;
    font-weight:500;
  } 
  p{
    color:#000;
    font-size:19px;
    font-weight:400;
  }
  img{
    width:50px;
    height:50px;
  }
  `