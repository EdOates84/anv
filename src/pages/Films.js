import { Container, Section } from '../style';
import React, { useRef, useEffect } from 'react';
import "../Films.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components"
// import v1 from "../images/v1.mp4";
// import v2 from "../images/v2.mp4";
// import v3 from "../images/v3.mp4";
import play from "../images/play.svg";
import Navbar from './Navbar';
import ReactPlayer from 'react-player'
import "../Confetti.css"
import Footer from '../Footer';
import Form from '../Form';
const Films= () =>  {
  // let redPlayButton = document.getElementById('youtube-iframe').contentWindow.document.getElemenClassName('ytp-large-play-button')[0];
  // redPlayButton.style.background = play;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
    <>
      <Navbar/>
      <Section style={{background:'rgb(244, 220, 220)'}}>
        <StyledContainer>

<div class="confetti-container">
  <div class="confetti">
    <i style={{top:'50vh'}} class="square"></i>
    <i style={{top:'20vh'}}  class="pentagram"></i>
    <i  style={{top:'50vh'}} class="rectangle"></i>
    <i style={{top:'80vh'}} class="hexagram"></i>
    <i style={{top:'20vh'}}  class="pentagram"></i>
    <i  class="dodecagram"></i>
    <i style={{top:'50vh'}} class="wavy-line"> </i>
    <i class="wavy-line"></i>
    <i style={{top:'-10vh'}} class="square"></i>
    <i style={{top:'50vh'}} class="rectangle"></i>
    <i style={{top:'80vh'}} class="square"></i>
    <i class="rectangle"></i>
    <i style={{top:'50vh'}}  class="wavy-line"> </i>
    <i class="pentagram"></i>
    <i style={{top:'80vh'}} class="square"></i>
    <i style={{top:'50vh'}}  class="rectangle"></i>
    <i style={{top:'-10vh'}} class="dodecagram"></i>
    <i style={{top:'80vh'}} class="wavy-line"></i>
    <i style={{top:'20vh'}}  class="dodecagram"></i>
    <i style={{top:'50vh'}} class="wavy-line"></i>
    <i class="hexagram"></i>
    <i style={{top:'-10vh'}} class="wavy-line"></i>
    <i style={{top:'50vh'}} class="pentagram"></i>
    <i class="square"></i>
    <i style={{top:'80vh'}} class="rectangle"></i>
    <i class="dodecagram"></i>
    <i style={{top:'-10vh'}} class="wavy-line"> </i>
    <i class="rectangle"></i>
    <i style={{top:'-10vh'}} class="square"></i>
    <i style={{top:'50vh'}} class="pentagram"></i>
    <i style={{top:'-10vh'}} class="rectangle"></i>
    <i style={{top:'50vh'}}  class="hexagram"></i>
    <i style={{top:'50vh'}} class="pentagram"></i>
    <i class="dodecagram"></i>
    <i style={{top:'-10vh'}} class="wavy-line"></i>
    <i class="square"></i>
    <i style={{top:'80vh'}} class="rectangle"></i>
    <i style={{top:'-10vh'}} class="square"></i>
    <i class="rectangle"></i>
    <i class="dodecagram"></i>
    <i style={{top:'20vh'}}  class="wavy-line"> </i>
    <i class="hexagram"></i>
    <i style={{top:'80vh'}} class="wavy-line"></i>
    <i class="pentagram"></i>
    <i style={{top:'50vh'}} class="square"></i>
    <i class="rectangle"></i>
    <i style={{top:'50vh'}} class="dodecagram"></i>
    <i style={{top:'80vh'}} class="wavy-line"> </i>
    <i style={{top:'50vh'}} class="rectangle"></i>
    <i class="pentagram"></i>
    <i style={{top:'20vh'}}  class="dodecagram"></i>
    <i class="wavy-line"></i>
    <i class="square"></i>
    <i style={{top:'20vh'}}  class="square"></i>
    <i class="pentagram"></i>
    <i class="rectangle"></i>
    <i style={{top:'80vh'}} class="hexagram"></i>
    <i style={{top:'50vh'}} class="pentagram"></i>
    <i class="dodecagram"></i>
    <i class="wavy-line"> </i>
    <i style={{top:'50vh'}} class="wavy-line"></i>
    <i class="square"></i>
    <i style={{top:'80vh'}} class="rectangle"></i>
    <i class="square"></i>
    <i class="rectangle"></i>
    <i style={{top:'20vh'}}  class="wavy-line"> </i>
    <i class="pentagram"></i>
    <i class="square"></i>
    <i style={{top:'50vh'}} class="rectangle"></i>
    <i class="dodecagram"></i>
    <i class="wavy-line"> </i>
    <i style={{top:'50vh'}} class="dodecagram"></i>
    <i style={{top:'80vh'}} class="wavy-line"> </i>
    <i class="hexagram"></i>
    <i style={{top:'80vh'}} class="wavy-line"></i>
    <i class="pentagram"></i>
    <i style={{top:'80vh'}} class="square"></i>
    <i class="rectangle"></i>
    <i class="dodecagram"></i>
    <i class="wavy-line"> </i>
    <i class="wavy-line"> </i>
    <i class="dodecagram"></i>
    <i style={{top:'80vh'}} class="wavy-line"></i>
    <i class="square"></i>
    <i class="rectangle"></i>
     <i class="square"></i>
     {/* <i class="rectangle"></i>
     <i class="dodecagram"></i>
     <i class="wavy-line"> </i>
    <i class="hexagram"></i>
    <i class="wavy-line"></i>
    <i class="pentagram"></i>
    <i class="square"></i>
    <i class="rectangle"></i>
    <i class="dodecagram"></i>
    <i class="wavy-line"> </i>
    <i class="rectangle"></i>
    <i class="pentagram"></i> */}
    <i class="dodecagram"></i>
    <i class="wavy-line"></i>
    <i class="square"></i> 
  </div>
</div>

<Text>
  <h2>
  Your Love story in a unique wedding video
  </h2>
</Text>
      <Grid>
      
 <A >
{/* <video  autoPlay loop muted>
</video> */}

<ReactPlayer
  url="https://youtu.be/vzB4SCWco7k?si=DrT8TOQUPL6t-ci2"
  width="100%"
  // height="100%"
  playing
  controls={true}

  playIcon={<Button>

<svg fill="#f4dcdc" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 300 300" xmlSpace="preserve">
<g>
	<g>
		<path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
			 M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
			c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
			c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>
	</g>
</g>
</svg>

  </Button>}
  light="http://img.youtube.com/vi/vzB4SCWco7k/maxresdefault.jpg"
  // light="https://i.stack.imgur.com/zw9Iz.png"
/>  
</A>  
   
<B>
<ReactPlayer
  url="https://youtu.be/3OUzn2Ejrpw?si=hMV2AjQhyy-Xdd1T"
  width="100%"
  // height="100%"
  playing
  controls={true}

  playIcon={<Button>
<svg fill="#f4dcdc" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 300 300" xmlSpace="preserve">
<g>
	<g>
		<path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
			 M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
			c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
			c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>
	</g>
</g>
</svg>

  </Button>}
  light="http://img.youtube.com/vi/3OUzn2Ejrpw/maxresdefault.jpg"
  // light="https://i.stack.imgur.com/zw9Iz.png"
/>  
</B>
      </Grid>
      <Grid>
<B>
<ReactPlayer
  url="https://youtu.be/HiS0xUjeZSU?si=COYK07AvGNK1uBME"
  width="100%"
  // height="100%"
  playing
  controls={true}

  playIcon={<Button>
<svg fill="#f4dcdc" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 300 300" xmlSpace="preserve">
<g>
	<g>
		<path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
			 M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
			c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
			c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>
	</g>
</g>
</svg>

  </Button>}
  light="http://img.youtube.com/vi/HiS0xUjeZSU/maxresdefault.jpg"
  // light="https://i.stack.imgur.com/zw9Iz.png"
/>  
</B>
<A >
<ReactPlayer
  url="https://youtu.be/XKSzi73LGLo?si=C2wOJGbPCiIjvfh-"
  width="100%"
  // height="100%"
  playing
  controls={true}
  playIcon={<Button>
<svg fill="#f4dcdc" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 300 300" xmlSpace="preserve">
<g>
	<g>
		<path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
			 M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
			c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
			c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>
	</g>
</g>
</svg>

  </Button>}
  light="http://img.youtube.com/vi/XKSzi73LGLo/maxresdefault.jpg"
  // light="https://i.stack.imgur.com/zw9Iz.png"
/>  
</A>  
      </Grid>
      <Grid>
 <A >

 <ReactPlayer
  url=" https://youtu.be/evbY1HRFPb0?si=3yF-P85yKtzCXt7g"
  width="100%"
  // height="100%"
  playing
  controls={true}

  playIcon={<Button>
<svg fill="#f4dcdc" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 300 300" xmlSpace="preserve">
<g>
	<g>
		<path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
			 M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
			c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
			c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>
	</g>
</g>
</svg>

  </Button>}
  light="http://img.youtube.com/vi/evbY1HRFPb0/maxresdefault.jpg"
  // light="https://i.stack.imgur.com/zw9Iz.png"
/>  
</A>       
<B>
<ReactPlayer
  url="https://youtu.be/0UGeSJ0Wz4M?si=yJDJaCX7g19bVzY_"
  width="100%"
  // height="100%"
  playing
  controls={true}

  playIcon={<Button>
<svg fill="#f4dcdc" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 300 300" xmlSpace="preserve">
<g>
	<g>
		<path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
			 M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
			c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
			c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>
	</g>
</g>
</svg>

  </Button>}
  light="http://img.youtube.com/vi/0UGeSJ0Wz4M/maxresdefault.jpg"
  // light="https://i.stack.imgur.com/zw9Iz.png"
/> 
</B>
      </Grid>
      </StyledContainer>
      </Section>
      <div id="contactus">
      <Form />
      </div>
      <Footer/>
      </>
    );
  }
  
  export default Films;
  
  const Text = styled.div`
  text-align:center;
 h2{
  font-size:32px;
  font-family: fantasy;

  font-weight:500;
  color:brown;
 }
 @media(max-width:400px){
  h2{
    font-size:27px;
  }
}
  `
  const StyledContainer = styled(Container)`
  @media (max-width: 460px){
    padding:0px 16px;
  }
  backgrond:rgb(245, 223, 229);
  `
  const Grid = styled.div`
  display:flex;
  gap:16px;
grid-template-columns:auto;
margin:16px auto;
  `
  const A = styled.div`
  width:30%;
  position:relative;

video{
  object-fit: cover;
    height: 100%;
    width: 100%;
}
@media (max-width: 460px) {
  width: 40%;
}
  `
  const B = styled.div`
  width:70%;
  position:relative;
  video{
    width:100%;
    object-fill:fit-content;
  }
  @media (max-width: 460px) {
    width: 60%;
  }
  `
  const Button =styled.div`
  cursor:pointer;
  // border-radius:50%;
  // height:40px;
  // width:40px;
  // background:pink;
  `