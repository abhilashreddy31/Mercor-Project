import React from "react";
import { Link } from "react-router-dom";
import './content.css'
import point5 from '../../asserts/point-5.svg'
import point6 from '../../asserts/point-6.svg'
import point7 from '../../asserts/point-7.svg'
import add2 from '../../asserts/add1.svg'
import dots from '../../asserts/dots.svg'
import profile6 from '../../asserts/profile-1.png'
import profile7 from '../../asserts/profile-2.png'
import profile8 from '../../asserts/profile-3.png'
import comments from '../../asserts/comments.svg'
import files from '../../asserts/files.svg'
import image1 from '../../asserts/image-1.png'
import image2 from '../../asserts/image-2.png'
import image3 from '../../asserts/image-3.png'
import image4 from '../../asserts/image-4.png'
function Content() {
    return (
        <div>
            <div className="c-container">
                <div className="content-box">
                    <div className="inner-box-11">
                        <Link className="link-1 " to=""><img src={point5} alt="" /><p>To Do</p></Link>
                        <btn className='add-btn'><img src={add2}></img></btn>
                    </div>
                    <div className="inner-box-12">
                        <div className="c-box-1">
                            <p>Low</p>
                            <btn className='dots'><img src={dots}></img></btn>
                        </div>
                        <h6>Brainstorming</h6>
                        <p className="para-1">Brainstorming brings team members' diverse experience into play. </p>
                        <div className="c-box-2">
                            <div className="c-profile">
                                <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile3" src={profile7} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile4" src={profile8} alt="" /></Link>
                            </div>
                            <div className="c-profile-1">
                                <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="inner-box-12">
                        <div className="c-box-1">
                            <p>Low</p>
                            <btn className='dots'><img src={dots}></img></btn>
                        </div>
                        <h6>Research</h6>
                        <p className="para-1">User research helps you to create an optimal product for users.</p>
                        <div className="c-box-2">
                            <div className="c-profile">
                                <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile3" src={profile7} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile4" src={profile8} alt="" /></Link>
                            </div>
                            <div className="c-profile-1">
                                <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>

                            </div>
                        </div>
                    </div>
                    <div className="inner-box-12">
                        <div className="c-box-1">
                            <p>Low</p>
                            <btn className='dots'><img src={dots}></img></btn>
                        </div>
                        <h6>Wireframes</h6>
                        <p className="para-1"> Low fidelity wireframes include the most basic content and visuals. </p>
                        <div className="c-box-2">
                            <div className="c-profile">
                                <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile3" src={profile7} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile4" src={profile8} alt="" /></Link>
                            </div>
                            <div className="c-profile-1">
                                <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="content-box">
                    <div className="inner-box-21">
                        <Link className="link-1 " to=""><img src={point6} alt="" /><p>On Progress</p></Link>

                    </div>
                    <div className="inner-box-22">
                        <div className="c-box-1">
                            <p>Low</p>
                            <btn className='dots'><img src={dots}></img></btn>
                        </div>
                        <h6>Onboarding Illustrations </h6>
                        <div>
                            <img className="image-1" src={image1}></img>

                        </div>

                        <div className="c-box-12">
                            <div className="c-profile">
                                <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile3" src={profile7} alt="" /></Link>
                                <Link className="link-1 " to=""><img className="profile4" src={profile8} alt="" /></Link>
                            </div>
                            <div className="c-profile-1">
                                <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>

                            </div>
                        </div>

                    </div>
                    <div className="inner-box-23">
                        <div className="c-box-1">
                            <p>Low</p>
                            <btn className='dots'><img src={dots}></img></btn>
                        </div>
                        <h6>Moodboard</h6>

                        <div className="box-images">
                            <img className="image-2" src={image2}></img>
                            <img className="image-2" src={image3}></img>
                        </div>
                        <div className="c-box-12">
                            <div className="c-profile">
                                <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>


                            </div>
                            <div className="c-profile-3">
                                <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="content-box">
                    <div className="inner-box-31">
                        <Link className="link-1 " to=""><img src={point7} alt="" /><p>Done</p></Link>

                    </div>
                    <div className="inner-box-32">
                        <div className="c-box-11">
                            <p>Completed</p>
                            <btn className='dots1'><img src={dots}></img></btn>
                        </div>
                        <h6>Mobile App Design </h6>
                        <div>
                            <img className="image-4" src={image4}></img>
                            <div className="c-box-12">
                                <div className="c-profile">
                                    <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>
                                    <Link className="link-1 " to=""><img className="profile3" src={profile7} alt="" /></Link>
                                    <Link className="link-1 " to=""><img className="profile4" src={profile8} alt="" /></Link>
                                </div>
                                <div className="c-profile-1">
                                    <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                    <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>

                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="inner-box-33">
                        <div className="c-box-11">
                            <p>Completed</p>
                            <btn className='dots1'><img src={dots}></img></btn>
                        </div>
                        <h6>Design System </h6>
                        <div>
                        <p className="para-1">It just needs to adapt the UI from what you did before.</p>
                            <div className="c-box-12">
                                <div className="c-profile">
                                    <Link className="link-1 " to=""><img className="profile2" src={profile6} alt="" /></Link>
                                    <Link className="link-1 " to=""><img className="profile3" src={profile7} alt="" /></Link>
                                    <Link className="link-1 " to=""><img className="profile4" src={profile8} alt="" /></Link>
                                </div>
                                <div className="c-profile-1">
                                    <Link className="link-2 " to=""><img className="profile2" src={comments} alt="" /><p className="c-para">Comments</p></Link>
                                    <Link className="link-2 " to=""><img className="profile2" src={files} alt="" /><p className="c-para"> Files</p></Link>

                                </div>
                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Content;