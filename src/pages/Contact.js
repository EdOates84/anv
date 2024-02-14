import React, { useRef, useState } from 'react';
import { Container, Section } from "../style";
import Navbar from "./Navbar";
import styled from "styled-components"
import bg from "../images/i4.jpg"
import emailjs from '@emailjs/browser';
import "../Book.css"
import Form from '../Form';
function Contact() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneInput = form.current.querySelector('input[name="from_email"]');
    const phoneNumber = phoneInput.value.trim();
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Please enter a 10-digit numeric phone number.');
      return; // Exit the function without submitting the form
    }
    emailjs.sendForm('service_t7sw72h', 'template_dzsuutk', form.current, 'QmYOthBiFrvrrpg_T')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormSubmitted(true);
  };

  const handleSubmit = () => {
    // setFormSubmitted(true);
  };

  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=7976068586&text=Hello, more information!','_blank');
  };
    return (
      <>
     <StyledSection>
      <Navbar/>

     </StyledSection>
     <Section >
      <Container>
        {/* <Text>
          <h2>
      Get in Touch
          </h2>
        </Text>
        <Button onClick={handleClick}>
      Chat with us
      </Button> */}
        {/* <Form> */}
{/*      
      <StyledForm isHidden={formSubmitted} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Phone no.</label>
      <input type="tel" pattern="[0-9]{10}" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <Submit type="submit" value="Send" onClick={handleSubmit} />
    </StyledForm> */}
   
    {/* {formSubmitted && <Animation class="canvas"><div class="notepad">
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
  </div></Animation>} */}
<Form/>
        {/* </Form> */}
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
const Animation = styled.div`
// display: ${(props) => (props.isHidden ? 'block' : 'none')};
position:absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 40px;
`