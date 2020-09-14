import React from "react";

import { IconButton } from "@material-ui/core";
import {
  Telegram,
  Instagram,
  Facebook,
  GitHub,
  LinkedIn,
  YouTube,
  Location,
  Map,
  Phone,
  Email
} from "@material-ui/icons";

import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";

class About extends React.Component {
  render() {
    return (
      <div>
        <div
          className="back-img-flat"
          style={{ backgroundColor: "deepskyblue" }}
        >
          <Navbar />
          <div className="p-2 text-light float-left heading">Albokotech</div>
          <div className="">
            <div
              style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
              className="text-center"
            >
              <h2 className="text-white ">Complete digital solution</h2>
            </div>
          </div>
        </div>
        <div className="row p-2" style={{ backgroundColor: "#f3f3f3" }}>
         <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="container text-center ">
              <h2 className="heading"> Map hear</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="container p-5 ">
              <p>
                <IconButton className="bg-danger text-black">
                  <Map />
                </IconButton>{" "}
                Bus Depo,Bharatmata squre, Bhopal
              </p>
              <p>
                <IconButton className="bg-info text-black">
                  <Phone />
                </IconButton>{" "}
              </p>
              <p>
                <IconButton className="bg-info text-black">
                  <Email />
                </IconButton>{" "}
              </p>
            </div>
          </div>
         
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
