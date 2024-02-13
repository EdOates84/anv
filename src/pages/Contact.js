import React, { useRef, useState } from 'react';
import { Container, Section } from "../style";
import Navbar from "./Navbar";
import styled from "styled-components"
import bg from "../images/i4.jpg"
import emailjs from '@emailjs/browser';
import "../Book.css"
function Contact() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t7sw72h', 'template_dzsuutk', form.current, 'QmYOthBiFrvrrpg_T')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=7976068586&text=Hello, more information!','_blank');
  };
    return (
      <>
     <StyledSection>
      <Navbar/>

     </StyledSection>
     <Section style={{height:'100vh'}}>
      <Container>
        <Text>
          <h2>
      Get in Touch
          </h2>
        </Text>
        <Form>
      <Button onClick={handleClick}>
      Chat with us
      </Button>
      <StyledForm isHidden={formSubmitted} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <Submit type="submit" value="Send" onClick={handleSubmit} />
    </StyledForm>
    <Animation isHidden={formSubmitted} class="canvas">
  <div class="notepad">
    <div class="cover">
    </div>
    <div class="page one">
      <p>Thank<br />you!</p>
    </div>
    <div class="page two"></div>
    <div class="page three"></div>
    <div class="page four"></div>
  </div>
  <div class="pencil">
    <div class="edge"></div>
  </div>
</Animation>
    {formSubmitted && <ThankYouMessage>Thank you for submitting!</ThankYouMessage>}

        </Form>
      </Container>
     </Section>
     </>
    );
}
  
export default Contact;
  const StyledSection = styled(Section)`
  background-image:url(${bg});
background-repeat:no-repeat;
background-size:cover;
background-position:top;
height:80vh;
  `

const Form = styled.div`
color:#000;
position:relative;
`
const Text = styled.div`
h2{
  font-size:32px;
}
`
const Button = styled.button`
background:black;
color:#fff;
padding:8px;
font-size:19px;
font-weight:500;
cursor:pointer;
border-radius:24px;
`
const StyledForm = styled.form`
// display:flex;
flex-direction:column;
gap:16px;
max-width:400px;
margin:0px auto;
display: ${(props) => (props.isHidden ? 'none' : 'flex')};
label{
  margin-bottom:-8px;
}
input, textarea{
  border-radius: 16px;
    min-height: 40px;
    border:1.5px solid black;
}
`
const Submit = styled.input`
border-radius:24px;
padding:16px;
background:black;
color:#fff;
width:fit-content;
min-width:150px;
cursor:pointer;
`
const ThankYouMessage = styled.div`
color: #47d147;
margin-top: 10px;
text-align:center;
font-size:19px;
font-weight:500;
`
const Animation = styled.div`
display: ${(props) => (props.isHidden ? 'block' : 'none')};
position:absolute;
left:20%;
`