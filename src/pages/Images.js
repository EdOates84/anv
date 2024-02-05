import React, { useState } from 'react';
import { Container, Section } from '../style';
import Navbar from "./Navbar";
import Modal from "react-modal";
import "../Gallery.css"

const Images= () =>  {
  
    return (
      <div >
        <Navbar/>
<Section>
 <h1>Responsive Image Gallery</h1>
<div id="gallery" class="container-fluid">  
  <img src="https://source.unsplash.com/1600x1200?female,portrait" class="img-responsive" />
  <img src="https://source.unsplash.com/1024x768?female,portrait" class="img-responsive" />
   <img src="https://source.unsplash.com/1366x768?female,portrait" class="img-responsive"/>
  <video class="vid" controls>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </source>
  </video>
  <img src="https://source.unsplash.com/1920x1080?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/640x360?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/320x640?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1200x1600?female,portrait" class="card img-responsive"/>
  <img src="https://source.unsplash.com/800x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x800?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/400x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x400?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1100x1600?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1600x1100?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/992x768?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/768x992?female,portrait" class="img-responsive"/>

</div>

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-body">
      </div>
    </div>

  </div>
</div>
</Section>
      </div>
    );
  }
  
export default Images;
  