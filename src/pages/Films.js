import { Container, Section } from '../style';
import React, { useRef, useEffect } from 'react';
import "../Films.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components"
import v1 from "../images/v1.mp4";
import v2 from "../images/v2.mp4";
import v3 from "../images/v3.mp4";
import v4 from "../images/v4.mp4";
import Navbar from './Navbar';

const Films= () =>  {
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
      <Section>
        <StyledContainer>
      <Grid>
 <A >
<video  autoPlay loop muted>
<source src={v1} type="video/mp4"></source>
</video>
</A>       
<B>
<video autoPlay loop muted>
<source src={v2} type="video/mp4"></source>

</video>
</B>
      </Grid>
      <Grid>
<B>
<video autoPlay loop muted>
<source src={v2} type="video/mp4"></source>

</video>
</B>
<A >
<video  autoPlay loop muted>
<source src={v1} type="video/mp4"></source>
</video>
</A>  
      </Grid>
      <Grid>
 <A >
<video  autoPlay loop muted>
<source src={v1} type="video/mp4"></source>
</video>
</A>       
<B>
<video autoPlay loop muted>
<source src={v2} type="video/mp4"></source>

</video>
</B>
      </Grid>
      </StyledContainer>
      </Section>
      </>
    );
  }
  
  export default Films;
  
  const Video = styled.div`
  margin:0px 10px;
  background:pink;
  height:30vh;
iframe{
  height: 100%;
    width: 100%;
 }
  `
  const StyledContainer = styled(Container)`
  @media (max-width: 460px){
    padding:0px 16px;
  }
  `
  const Grid = styled.div`
  display:flex;
  gap:16px;
grid-template-columns:auto;
margin:16px auto;
  `
  const A = styled.div`
  width:30%;
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
  video{
    width:100%;
    object-fill:fit-content;
  }
  @media (max-width: 460px) {
    width: 60%;
  }
  `