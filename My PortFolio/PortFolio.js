import React from 'react';
import "./PortFolio.css";
import f from "./facebook.png";
import I from "./gram.png";
import i from "./in.png";
import m from "./mail.png";
import h from "./hhhh.jpg";
import H from "./html.jpg";
import c from "./css.png";
import j from "./javascript.png";
import r from "./react.png";
import call from "./call.png"
import pic from "./pic.png";
import uiux from "./uiux.png";
import code from "./code.png";
import person from "./people.jpg";
import crud from "./crudapp.png";
import food from "./foodorderingapp.png";
import shopping from "./shoppingapp.jpg";
import profile from "./profilecard.jpg";
import portfolio from "./portfolio.jpg";
import row from "./row.jpg";

import resume from "./gajas resume.pdf"

function PortFolio() {
    return (
        <div>
            <div className='name'>
                <div style={{ paddingLeft: "22px" }}>
                    <nav>
                        <input type="checkbox" id="check" />
                        <label for="check" className="checkbtn">
                            <img src={row} className='row' />
                        </label>
                        <label class="logo">Welcome my PortFolio</label>
                        <ul>
                            <li><a className="active" href="#home"> Home</a></li>
                            <li><a href="#about" className="activee">About</a></li>
                            <li><a href="#skills" className="activee">Skill</a></li>
                            <li><a href="#service" className="activee">Service</a></li>
                            <li><a href="#work" className="activee">My Work</a></li>
                            <li><a href="#contact" className="activee">Contact</a></li>
                        </ul>
                    </nav>
                    <br /><br />
                    <div className='first'>
                        <div className='first-1'>
                            <span style={{ color: "lime", fontSize: "22px" }}>Hellow, My name is</span><br />
                            <h1 style={{ color: "white", fontSize: "77px", fontFamily: "serif", fontWeight: "111" }}>Gajanan Jena</h1>
                            <hr style={{ border: "2px solid white", width: "90px", margin: "20px 0px" }} /><br />
                            <h3 style={{ color: "white", fontSize: "27px", fontFamily: "serif", fontWeight: "111" }}>I design and develop Web based Component and System.</h3><br />
                            <p style={{ color: "white", fontSize: "20px" }}>I'm Frontend developer With basic Knowledge in designing great user interface and develop real life interaction.</p><br />
                            <a href={resume} download="resume" className='btn'>Download CV</a>
                            <a href='https://github.com/Gajanan255/react_website.git' className='btn'>Visit Github</a><br />
                        </div>
                        <div className='first-2'>
                            <a href='https://www.facebook.com/gajanan.jenadinesh' >
                                <img src={f} className='first-1-1' />
                            </a>
                            <a href='mailto:gajananjena123@gmail.com'>
                                <img src={m} className='first-1-1' />
                            </a>
                            <a href='https://www.instagram.com/gajanan_jena_007'>
                                <img src={I} className='first-1-1' />
                            </a>
                            <a href='https://www.linkedin.com/in/gajanan-jena-9b650721b'>
                                <img src={i} className='first-1-1' />
                            </a>
                        </div>
                    </div>{/*complite first*/}
                </div>
            </div>
            <div className='second'>
                <div className='second-1'>
                    <img src={h} />
                </div>
                <div className='second-2'>
                    <a name="about"><h1>About Me</h1></a>
                    <hr style={{ border: "2px solid black", width: "90px", margin: "20px 0px" }} />

                    <h3 style={{ color: "black" }}> Web Developer and Designer..</h3><br />
                    <p style={{ color: "black", marginLeft: "20px", fontSize: "20px" }}>I'm a Frontend Developer and a self-motivated IT professional with huge knowledge and proficiency in web development, as well as strong skills and ability in writing clean and efficient code with proper Indentation.</p>
                    <br />
                    <p style={{ color: "black", marginLeft: "20px", fontSize: "20px" }}>I am Completed my Matriculation on 2017 from Saraswati sishu vidya Mandir School. Completed my +2 on 2019 from Kabisurya Baladev Vigyan Mahavidyalaya. Completed my Under graduation(BCA) On 2022 from Disha College of Management and Technology.</p>
                    <br />
                    <div style={{ display: "flex", width: "230px", marginLeft: "42px" }}>
                        <img src={call} className='pngsizeeeee' /><h3 style={{ color: "black", width: "160px", marginTop: "11px" }}>+918118099250</h3>
                    </div>
                </div>
            </div>{/* complite second */}

            <div className='third'>
                <a name="skills"><h1 style={{ color: "black", fontSize: "45px", marginTop: "21px" }}>Skills</h1></a><br />
                <div className='third-1'>

                    <img src={H} className='one' /> HTML <h3 className='per'>95%</h3>
                    <meter low="22" high="78" min="0" max="100" value="95" style={{ width: "410px" }}>95</meter><br />

                    <img src={c} className='one' /> CSS<h3 className='per'>77%</h3>
                    <meter low="22" high="78" min="0" max="100" value="77" style={{ width: "410px" }}>77</meter><br />

                    <img src={j} className='one' /> JavaScript<h3 className='per'>75%</h3>
                    <meter low="22" high="78" min="0" max="100" value="95" style={{ width: "410px" }}>75</meter><br />

                    <img src={r} className='one' /> React JS<h3 className='per'>85%</h3>
                    <meter low="22" high="78" min="0" max="100" value="85" style={{ width: "410px" }}>95</meter><br />
                </div>
                <div className='third-2'>
                    <h3 style={{ color: "black", fontFamily: "serif", fontSize: "25px" }}>My creative skills and experience..</h3><br />
                    <p style={{ color: "black", fontFamily: "serif", fontSize: "20px", paddingLeft: "22px", wordSpacing: "8px" }}>The answer to "what is a web developer?" is complex , and is easier to answer by looking at their daily responsibilities. They need to work with different departments and even different clients to create a blueprint and execute a website through completion. Once the website is built, they need to continue maintaining it with the addition of new content and continue fixing bugs, errors, and other problems as they arise.</p>
                    <br /><a href='mailto:gajananjena123@gmail.com' className='b'>Hire Me</a>
                </div>
            </div>{/* complite third */}
            <br />
            <a name="service">
                <h1 style={{ paddingLeft: "72px", backgroundColor: "black", color: "white", paddingTop: "10px" }}>My Service</h1><br /><br />
            </a>
            <div className='four'>
                <div className='four-1'>
                    <h3>Web Design</h3>
                    <img src={code} className='fourpng' />
                    <br />
                    <p style={{ paddingLeft: "20px", fontSize: "20px", fontFamily: "serif" }}>Designing a website involves the process of deeplyplanning, ideating and executing a plan to create an user friendly platform. and we do it professionally</p>
                </div>
                <div className='four-2'>
                    <h3>UI / UX</h3><img src={uiux} className='fourpng' /><br />
                    <p style={{ paddingLeft: "20px", fontSize: "20px", fontFamily: "serif" }}>A UI/UX designer is someone who has expertise in crafting the user interface (UI) and user experience (UX) of products, like websites, mobile apps and software.</p>
                </div>
                <div className='four-3'>
                    <h3 >Different Layout</h3><img src={pic} className='fourpng' /><br />
                    <p style={{ paddingLeft: "20px", fontSize: "20px", fontFamily: "serif" }}>Designing a website or application to be responsive across various devices like laptops, mobile phones, and tablets is a crucial aspect of modern web development. Here's an overview of how different layouts </p>
                </div>
            </div>
            {/* complite fourr */}
            <br />
            <a name="work">
                <h1 style={{ color: "white", paddingTop: "10px", paddingLeft: "72px", backgroundColor: "black", marginTop: "-15px", borderRadius: "5px" }}>My Work</h1>
            </a>
            <div className='five'>
                <div className='five-1'>
                    <a href='https://gajascurdapp.netlify.app/'>
                        <img src={crud} className='pimg' />
                    </a>
                    <h3 style={{ color: "white", textAlign: "center", fontSize: "20px", fontWeight: "111" }}>Crud App</h3>
                </div>
                <div className='five-2'>
                    <a href='https://gajasshoppingapp.netlify.app/'>
                        <img src={shopping} className='pimg' />
                    </a>
                    <h3 style={{ color: "white", textAlign: "center", fontSize: "20px", fontWeight: "111" }}>Shopping App Using React Redux-toolkit</h3>
                </div>
                <div className='five-3'>
                    <a href='https://gajasrestaurantapp.netlify.app/'>
                        <img src={food} className='pimg' />
                    </a>
                    <h3 style={{ color: "white", textAlign: "center", fontSize: "20px", fontWeight: "111" }}>Restaurant Food Ordering App</h3>
                </div>
                <div className='five-4'>
                    <a href='https://gajasprofilecard.netlify.app/'>
                        <img src={profile} className='pimg' />
                    </a>
                    <h3 style={{ color: "white", textAlign: "center", fontSize: "20px", fontWeight: "111" }}>Profile Card</h3>
                </div>
                <div className='five-5'>
                    <a href='PortFolio.js'>
                        <img src={portfolio} className='pimg' />
                    </a>
                    <h3 style={{ color: "white", textAlign: "center", fontSize: "20px", fontWeight: "111" }}>My Portfolio</h3>
                </div>
            </div>
            <br /><br />
            <a name="contact">
                <h1 className='con'>Contact Me</h1><br />
            </a>
            <div className='six'>
                <div className='six-1'>
                    <img src={person} className='pngsize' /> <a href="#" style={{ color: "white" }}>Gajanan Jena</a><br />
                    <img src={call} className='pngsize' /> <a href="tel:+918118099259" style={{ color: "white" }}>+918118099250</a><br />
                    <img src={m} className='pngsize' /> <a href='mailto:gajananjena123@gmail.com' style={{ color: "white" }}>gajananjena123@gmail.com</a><br /><br />

                    <a href='https://www.facebook.com/gajanan.jenadinesh' >
                        <img src={f} className='six-1-1' />
                    </a>
                    <a href='mailto:gajananjena123@gmail.com'>
                        <img src={m} className='six-1-1' />
                    </a>
                    <a href='https://www.instagram.com/gajanan_jena_007'>
                        <img src={I} className='six-1-1' />
                    </a>
                    <a href='https://www.linkedin.com/in/gajanan-jena-9b650721b'>
                        <img src={i} className='six-1-1' />
                    </a><br />
                    <br /> <a href={resume} className='button' download="resume"><h2>Download CV</h2></a>
                </div>
                <div className='six-2'>
                    <label>Name: </label><br />
                    <input type="text" placeholder='Enter your Name' style={{ width: "320px", height: "28px", fontSize: "20px", fontFamily: "serif" }} /><br /><br />
                    <label>Email: </label><br />
                    <input type="text" placeholder='Enter your Mail' style={{ width: "320px", height: "28px", fontSize: "20px", fontFamily: "serif" }} /><br /><br />
                    <label>Message: </label><br />
                    <input type="text" placeholder='Enter your Message' style={{ width: "320px", height: "78px", fontSize: "20px", fontFamily: "serif" }} /><br /><br />
                    <button type='submit' className='button' style={{ width: "140px", border: "none", padding: "2px" }} onClick={() => { alert("Your Message Has Submited") }}><h2>Submit</h2></button>
                </div>
            </div><br /><br />

            <div className='footerr'>

                <div className='footerr-2'>
                    <a href='https://www.facebook.com/gajanan.jenadinesh' >
                        <img src={f} className='fotterr' />
                    </a>
                    <a href='mailto:gajananjena123@gmail.com'>
                        <img src={m} className='fotterr' />
                    </a>
                    <a href='https://www.instagram.com/gajanan_jena_007'>
                        <img src={I} className='fotterr' />
                    </a>
                    <a href='https://www.linkedin.com/in/gajanan-jena-9b650721b'>
                        <img src={i} className='fotterr' />
                    </a>
                </div>
                <div className='footerr-1'>
                    <p>Created By | <a href='#' className='copy'>Gajanan</a></p><br />
                </div>
            </div>{/*complite footer*/}

        </div >
    )
}

export default PortFolio;