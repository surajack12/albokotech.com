import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";

class Contact extends React.Component {
  render() {
    return (
      <div >
      <div className="back-img">
          <Navbar />
          <div className="p-2 text-light float-left heading">Albokotech</div>
          <div
            style={{ "padding-top": "14rem" }}
            className="text-center text-white"
          >
            <h2>Complete digital solution</h2>
          </div>
        </div>
       <div>
       
       </div>
     
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
      <Footer/>
      
      
      </div >);
  }
}
export default Contact;
