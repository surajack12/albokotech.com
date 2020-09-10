import React from "react";

import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";

class Project extends React.Component{
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
      <Footer/>
      
      
      </div >);
  }
}
export default  Project;