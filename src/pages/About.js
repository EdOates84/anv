import React, { useState } from 'react';
import { Container, Section } from '../style';
import styled from "styled-components"
import img from "../images/nakul.JPG";
import Navbar from './Navbar';
import "../Wave.css"
import "../Divider.css"
const About= () =>  {
  return (
    <>
    <Navbar/>
    <Section style={{paddingTop:'0px'}}>
        <Grid>
<Img>
<img src={img}/>
</Img>
<Text>
  <h5>
Hello! I'm Nakul Chouhan, a wedding cinematographer based in Kota, Rajasthan. I approach my work with a relaxed and empathetic attitude, ensuring couples feel at ease in front of the camera. I focus on capturing authenticity and the unique moments that make each wedding special. My goal is to be your friend and professional, telling your story in a way that reflects your style. Thanks for considering me as your wedding cinematographer – excited to capture your special day!

  </h5>
  <h3>- Nakul Chouhan <br/>
  Founder
  </h3>
</Text>
        </Grid>
         

    </Section>
    <Section style={{position:'relative'}}>
    <svg className="editorial" viewBox="0 24 150 28" preserveAspectRatio="none">
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
    />
  </defs>
  <g className="parallax1">
    <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f461c1" />
  </g>
  <g className="parallax2">
    <use xlinkHref="#gentle-wave" x="50" y="0" fill="#4579e2" />
  </g>
  <g className="parallax3">
    <use xlinkHref="#gentle-wave" x="50" y="9" fill="#3461c1" />
  </g>
  <g className="parallax4">
    <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" />
  </g>
</svg>;


    </Section>
    </>
  );
}

export default About;
const Grid = styled.div`
display:grid;
grid-template-columns:1.5fr 1fr;
background:#000;
min-height:100vh;
@media (max-width: 500px) {
  grid-template-columns:1fr;

}
`
const Img = styled.div`
width:100%;
img{
  width: 100%;
    object-fit: cover;
    height: 100%;
}
`
const Text = styled.div`
padding:40px 24px;
display: flex;
flex-direction:column;
    justify-content: center;
    align-items:center;
h5{
  color:#fff;
font-size:24px;
font-weight:400;
max-width:300px;

}
h3{
  color:#fff;
  font-size:29px;
  font-weight:600;
}
`