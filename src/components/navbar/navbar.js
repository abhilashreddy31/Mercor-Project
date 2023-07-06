import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import search1 from '../../asserts/search.svg'
import calender from '../../asserts/calendar.svg'
import message1 from '../../asserts/message1.svg'
import notification from '../../asserts/notification.svg'
import arrow1 from '../../asserts/down-arrow.svg'
import profile from '../../asserts/dhoni.png'

import "../main/main.css"
function Navbar() {
  return (
    <div>

            <div className="navcontainer">
                
                     <div className="searchbar">
                         <btn><input type="text" placeholder="Search for anything..." className="searchbar1" /></btn>
                     </div>
                    <div className="nav-box-1">
                       <Link className="nav-link " to=""><img src={calender} alt="" /></Link>
                       <Link className="nav-link " to=""><img src={message1} alt="" /></Link>
                       <Link className="nav-link " to=""><img src={notification} alt="" /></Link>

                    </div>
                    <div className="nav-box-2">                   
                            <p className="name-1">K Abhilash Reddy</p>
                            <p className="name-2">A.P, India</p>
                    </div> 
                    <div  className="nav-box-3">
                          <btn><img className="main-profile" src={profile} /></btn>
                          <btn><img className="arrow1" src={arrow1} /></btn>

                    </div>
                </div>
                <div></div>
                
            </div>


   


  )
}

export default Navbar;