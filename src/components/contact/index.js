import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FormControl,InputLabel,Input,FormHelperText  } from "@material-ui/core";
import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div
          className="back-img"
          style={{
            backgroundImage:
              "url('https://static.dribbble.com/users/192276/screenshots/2500960/attachments/491748/midnightinthevalley-2560x1440.png')"
          }}
        >
          <Navbar />
          <div className="p-2 text-light float-left heading">Albokotech</div>
          <div
            style={{ "padding-top": "14rem" }}
            className="text-center text-white"
          >
            <h2>Complete digital solution</h2>
          </div>
        </div>
        <div />

        <div className="pt-5 pb-5 pl-2 pr-2">
          <div className="row ">
            <div className="col-lg-6 col-md-6">
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                
              </FormControl>
            </div>
            <div className="col-lg-6 col-md-6 p-" />
          </div>
        </div>
        <div className="pt-5 pb-5 pl-2 pr-2">
          <div className="row ">
            <div className="col-lg-6 col-md-6" />
            <div className="col-lg-6 col-md-6 p-" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;
