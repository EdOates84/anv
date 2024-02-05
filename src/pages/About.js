import React, { useState } from 'react';
import { Container, Section } from '../style';
import styled from "styled-components"
import img from "../images/nakul.jpg";
import Navbar from './Navbar';

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