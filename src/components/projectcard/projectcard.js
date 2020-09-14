import React from 'react'
import './projectcard.css'
export default function projectcard(props)
{
    return(
    <div className=" p-2 ">
        
        <div className="procard" style={{backgroundImage:`url(${props.imglink})`}}>
            <div className="content">
            <h2 className="title">{props.title}</h2>
           <p className="copy">{props.about}</p>
           <a href={props.link}><button className="btn">View Project</button></a>
            </div>
        </div>
        
        

    </div>
    )
}