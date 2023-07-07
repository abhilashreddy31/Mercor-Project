import React from "react";
import edit from '../../asserts/edit.svg'
import link from '../../asserts/link.svg'
import add from '../../asserts/add1.svg'
import profile1 from '../../asserts/profile-1.png'
import profile2 from '../../asserts/profile-2.png'
import profile3 from '../../asserts/profile-3.png'
import profile4 from '../../asserts/profile-4.png'
import profile5 from '../../asserts/profile-5.svg'
import filter from '../../asserts/filter.svg'
import arrow2 from '../../asserts/down-arrow.svg'
import calender1 from '../../asserts/calendar1.svg'
import user from '../../asserts/profile-2user.svg'
import line from '../../asserts/line.svg'
import pause from '../../asserts/pause.svg'
import menu from '../../asserts/menu.svg'
import "../main/main.css"
function Main() {
    return (
        <div>
            <div className="maincontainer">
                <div className="main-box-1">
                    <h1>Mobile App</h1>
                    <btn className="edit"><img src={edit}></img></btn>
                    <btn className="linkbtn"><img src={link}></img></btn>
                </div>
               
                <div className="main-box-2">
                    <btn className="add"><img src={add}></img></btn>
                    <p className="invite">Invite</p>
                    <div className="profile">
                        <btn className="profile11" ><img src={profile1}></img></btn>
                        <btn className="profile1" ><img src={profile2}></img></btn>
                        <btn className="profile1"><img src={profile3}></img></btn>
                        <btn className="profile1"><img src={profile4}></img></btn>
                        <btn className="profile1"><img src={profile5}></img></btn>
                        <p className="two-1">+2</p>
                    </div>

                </div>

            </div>
            <div className="maincontaner-1">
                <div className="main-box-3">
                    <btn className="btn-1"><img src={filter}/>Filter<img src={arrow2}/></btn>
                    <btn className="btn-1"><img src={calender1}/>Today<img src={arrow2}/></btn>

                </div>
                <div className="main-box-4">
                    <btn className="btn-2"><img src={user}/>Share</btn>
                    <img className="line" src={line}></img>
                    <btn className="btn-4"><img  src={pause}/></btn>
                    <btn className="btn-3"><img src={menu}/></btn>
                </div>

            </div>
            
        </div>
    )
}

export default Main;