import React from 'react';
import { Container, Section } from "../style";
import Navbar from "./Navbar";
import styled from "styled-components"
import bg from "../bg-video.mp4"
import Footer from '../Footer';
import img from "../images/groom.png";
import i1 from "../images/i1.JPG";
import i2 from "../images/i2.JPG";
import i3 from "../images/i3.JPG";
import i4 from "../images/i4.JPG";
import i5 from "../images/i5.JPG";
import i6 from "../images/i6.JPG";
import "../Marquee.css"

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
        <Navbar/>
        <StyledSection >
          <Video>
      <video  autoPlay loop muted>
      <source src={bg} type="video/mp4"/>
      </video>
      </Video>
      <Text>
<h1>Capturing Special Moments</h1>
<p>
Moments that last forever
</p>
      </Text>
        </StyledSection>
      <Section style={{background:'#EDA5A5'}}>

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
top:-6vh;
  height:100vh;
  z-index: -100;

  `
  const Video = styled.div`
width:100%;
height:100%;
overflow:hidden;

left:0;
video{
  height:100vh;
}
  `

  const Text = styled.div`
  position:absolute;
  top:70vh;
  left:0;
  width:100vw;
  padding:0vw 20vw;
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