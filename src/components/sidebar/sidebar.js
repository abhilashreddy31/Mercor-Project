import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
import logo from '../../asserts/logo-1.svg'
import arrow from '../../asserts/left-arrow.svg'
import home from '../../asserts/home.svg'

import task from '../../asserts/task.svg'
import members from '../../asserts/members.svg'
import settings from '../../asserts/settings.svg'
import add from '../../asserts/add.svg'
import point1 from '../../asserts/point-1.svg'
import point2 from '../../asserts/point-2.svg'
import point3 from '../../asserts/point-3.svg'
import point4 from '../../asserts/point-4.svg'
import dots from '../../asserts/dots.svg'
import union from '../../asserts/Union.svg'
import lamp from '../../asserts/lamp.svg'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);
  const [arrowPosition, setArrowPosition] = useState("absolute");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >600) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
    setArrowRotation(arrowRotation + 180);
    setArrowPosition(isOpen ? "absolute" : "50px");
  };

  return (
    <div style={{width: isOpen ? "0px" : "248px", height: isOpen ? "0" : "auto", }} className="container-1" >
      <div style={{borderBottom: isOpen ? "0px solid #DBDBDB " : "1px solid #DBDBDB",}} className="box-1" >
        
        <img
          style={{ display: isOpen ? "none" : "block" }}
          className="logo"
          src={logo}
        />
        <p style={{ display: isOpen ? "none" : "block" }}>Project M. </p>
        <div style={{ marginLeft: isOpen ? "20%" : "10px" }}>
        <btn onClick={toggle} to="/Meninavbar">
            <img
              style={{
                marginLeft: isOpen ? "0%" : "20px",
                
                position: arrowPosition,
                transform: `rotate(${arrowRotation}deg)`, 
              }}
              className="arrow"
              src={arrow}
            />
          </btn>
        </div>
      </div>
      <div style={{ display: isOpen ? "none" : "block" }} className="box-2">
        <div className="inner-box-2">
          <div className="inner-2">
            <Link className="link " to=""><img src={home} alt="" /><p>Home</p></Link>
          </div>
          <div className="inner-2">
            <Link className="link " to=""><img src={members} alt="" /><p>Messages</p></Link>
          </div>
          <div className="inner-2">
            <Link className="link " to=""><img src={task} alt="" /><p>Tasks</p></Link>
          </div>
          <div className="inner-2">
            <Link className="link " to=""><img src={members} alt="" /><p>Members</p></Link>
          </div>
          <div className="inner-2">
            <Link className="link " to=""><img src={settings} alt="" /><p>Settings</p></Link>
          </div>
        </div>
      </div>
      <div style={{ display: isOpen ? "none" : "block" }} className="box-3">
       
        <p className="box-3-p"> <p>my projects</p><img className="add-1" src={add} /></p>  
      </div>
      <div style={{ display: isOpen ? "none" : "block" }} className="box-4">
        <div className="mobileapp">
          <Link className="links " to=""><img src={point1} alt="" /><p>Mobile App</p></Link>
          <btn><img className="dots-1" src={dots} /></btn>
        </div>
        <div className="mobileapp-1">
          <Link className="link-1 " to=""><img src={point2} alt="" /><p>Website Redesign</p></Link>
        </div>
        <div className="mobileapp-1">
          <Link className="link-1 " to=""><img src={point3} alt="" /><p>Design System</p></Link>
        </div>
        <div className="mobileapp-1">
          <Link className="link-1 " to=""><img src={point4} alt="" /><p>Wireframes</p></Link>
        </div>

      </div>
      <div style={{ display: isOpen ? "none" : "block" }} className="box-5">
         <img className="union"  src={union}></img>
         <img className="lamp" src={lamp}></img>
         <img className="lamp-1" src={lamp}></img>
         <img className="lamp-2" src={lamp}></img>
         <p className="box-5-p">Thoughts Time</p>
         <p className="box-5-p1">We don’t have any notice for  you, till then you can share your thoughts with your peers.</p>
         <input className="input-text" placeholder="Write a message" type="text"/>
        
      </div>
      
    </div>
  )
}

export default Sidebar; 
