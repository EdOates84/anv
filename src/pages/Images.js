import React, { useState } from 'react';
import Navbar from "./Navbar";
import Modal from "react-modal";
import "../Gallery.css"
import styled from "styled-components"
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.jpg";
import i6 from "../images/i6.jpg";
import i7 from "../images/i7.jpg";
import i8 from "../images/i8.jpg";
import i9 from "../images/i9.jpg";
import i10 from "../images/i10.jpg";
import i11 from "../images/i11.jpg";
import i12 from "../images/i12.jpg";
import i13 from "../images/i13.jpg";
import i14 from "../images/i14.jpg";
import i15 from "../images/i15.jpg";
import i16 from "../images/i16.jpg";
import Footer from '../Footer';
import Form from '../Form';

const Images= () =>  {
  
    return (
      <div >
        <Navbar/>
<StyledSection style={{background:'rgb(244, 220, 220)'}}>
 <h1>Timeless images for you to remember how it all felt. </h1>
<div id="gallery" class="container-fluid">  
  <img src={i1} class="img-responsive" />
  <img src={i2} class="img-responsive" />
   <img src={i3} class="img-responsive"/>
  {/* <video class="vid" controls>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </source>
  </video> */}
  <img src={i4} class="img-responsive"/>
  <img src={i5} class="img-responsive"/>
<img src={i6} class="img-responsive"/>
  <img src={i7} class="card img-responsive"/>
  <img src={i8} class="img-responsive"/>
  <img src={i9} class="img-responsive"/>
  <img src={i10} class="img-responsive"/>
  <img src={i11} class="img-responsive"/>
<img src={i12} class="img-responsive"/>
<img src={i13} class="img-responsive"/>
<img src={i14} class="img-responsive"/>
<img src={i15} class="img-responsive"/>
<img src={i16} class="img-responsive"/>

</div>

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-body">
      </div>
    </div>

  </div>
</div>
</StyledSection>
<div id="contactus">
      <Form />
      </div>
<Footer/>
      </div>
    );
  }
  
export default Images;

const StyledSection = styled.section`
padding: 40px 0 60px;
overflow: hidden;
h1{
  font-size:32px;
  font-family: fantasy;

  font-weight:500;
  color:brown;
}
`