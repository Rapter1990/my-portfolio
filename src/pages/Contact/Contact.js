import { Grid, TextField } from '@material-ui/core';
import React, { useState, useRef  } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import "../../components/CustomButton/CustomButton.css";


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(name === "" || email === "" || message === "") {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 5000,
      });
    }


    emailjs.sendForm('service_00j4h06', 
                     'template_oa0tbio', 
                     form.current, 
                     'L4koAJxrWykLtEaCt')
      .then((result) => {
         toast.success('Your Message Successfully sent', {
                      position: toast.POSITION.BOTTOM_RIGHT, autoClose:3000})

      }, (error) => {
          toast.error('Error', {
                      position: toast.POSITION.BOTTOM_RIGHT, autoClose:3000})
    });
  }


  return (
    <div className='main_content'>
       <Grid container spacing={1} className="section position-center">
          {/** Title */}
          <Grid item className="section_title top_20">
            <span></span>
            <h2>Contact</h2>
          </Grid>

          {/** Contact */}
          <Grid item xs={12} className="p_30">
            <form ref={form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth name="name" label="Name" onChange={handleName}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth name="email" label="E-mail" onChange={handleEmail}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth name="message" label="Message" multiline minRows={4} onChange={handleMessage}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        className="site_btn"
                        type="submit"
                      >
                        <span className="button_text">Submit</span>
                      </Button>
                      <ToastContainer />    
                    </Grid>
                  </Grid>
            </form>      
          </Grid>
       </Grid>
    </div>
  )
}

export default Contact;