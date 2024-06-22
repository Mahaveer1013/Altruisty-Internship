import React, { useState } from 'react'
import view_poster from '../images/altruisty-logo.jpeg'
import { Link } from 'react-router-dom';

export default function IpssView() {
    
    const [viewPage,setViewPage] = useState(1);

    const handleClick = (n) => {
        console.log(n);
        setViewPage(n);
    }

    function about_Ipss(){
        return (
            <>
                <div className="part">
                    <h3>Industry Problem solving by students</h3>
                    <p>"Industry Problem Solving by Students" is a platform where students collaborate to tackle real-world challenges, applying their innovative thinking and academic knowledge to propose effective solutions, fostering experiential learning and practical skill development.</p>
                </div>
                <div className="part">
                    <h3>Who can apply?</h3>
                    <p>Industry Problem Solving by Students welcomes applications from undergraduate and graduate students across various academic disciplines, passionate about solving real-world problems and eager to contribute their skills and creativity to meaningful projects.</p>
                </div>
                <div className="part">
                    <h3>Uses</h3>
                    <p>This platform offers students invaluable opportunities to gain practical experience, collaborate with industry professionals, and make meaningful contributions to solving real-world challenges, enhancing their skill sets and future employability.</p>
                </div>
                <div className="part">
                    <h3>Process</h3>
                    <p>To apply, visit our website and fill out the online form, detailing academic background, skills, and interest in tackling industry challenges. Selected candidates will proceed through further steps, potentially including interviews or assessments</p>
                </div>
                <div className="know-more-btn">
                    <button>Know More</button>
                </div>
            </>
        )
    }

    function host_program(){
        return (
            <>
                <div className="part">
                    <p>For the companies to post the problem</p>
                    <div className="part-btns">
                        <span className="material-symbols-outlined">post_add</span>
                        <button><Link to="/">Post problem statement</Link></button>
                    </div>
                </div>
                <div className="part">
                    <p>Join our program and leverage our platform to post your company's challenges, tapping into the collective problem-solving prowess of talented student participants. By being part of our program, companies gain access to fresh perspectives, innovative solutions, and potential collaborations, driving impactful outcomes for your business and fostering the next generation of industry leaders.</p>
                </div>
                <div className="part">
                    <p>View the problem statements</p>
                    <div className="part-btns">
                    <span className="material-symbols-outlined">visibility</span>
                        <button>View Problem Statements</button>
                    </div>
                </div>
            </>
        )
    }

    function active_program() {
        return (
            <>
                <div className="part">
                    <h2>About Hackverse 2024</h2>
                    <p>National Level Flagship Hackathon under Texus 2024 (National Level Fest of SRM Ramapuram) is here in Chennai</p>
                    <p>With a Prize Pool of <b>₹2,00,000+</b> Internship / Full Time Opportunities Access to grants upto <b>$100,000</b></p>
                    <p><b>Date:</b> April 6-7, 2024</p>
                    <p><b>Venue:</b> Chennai</p>
                    <p><b>Register Now:</b> <a href="https:// hackverse2024.devfolio.co">Devfolio Page</a></p>
                    <p><b>Join the group for more updates:</b> <a href="https://chat.whatsapp.com/JUV4X0FiwR46EoVDVjv9wC">Join Whatsapp group</a></p>
                </div>
                <div className="part">
                    <p>View the problem statements</p>
                    <div className="part-btns">
                        <span className="material-symbols-outlined">visibility</span>
                        <button>View Problem Statements</button>
                    </div>
                </div>
            </>
        )
    }

    function apply_now() { 
        return (
            <>
                <div className="part">
                    <p>Students to participate in hackverse 2024</p>
                    <div className="part-btns">
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                        <button>Apply to participate</button>
                    </div>
                </div>
                <div className="part">
                    Join our program and seize the opportunity to participate in real-world problem-solving initiatives, collaborating with industry professionals to tackle pressing challenges. As a student participant, you'll gain invaluable hands-on experience, expand your skill set, and make meaningful contributions to innovative solutions, positioning yourself for future success in your academic and professional endeavors
                </div>
                <div className="part">
                    <p>View the problem statements</p>
                    <div className="part-btns">
                        <span className="material-symbols-outlined">visibility</span>
                        <button>View Problem Statements</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="ipss-view-page">
                <div className="top-btn">
                    <span className='material-symbols-outlined'>arrow_back</span> Back
                </div>
                <div className="ipss-view">
                <div className="ipss-view-poster">
                    <img src={view_poster} alt={view_poster} />
                </div>
                <div className="view-page">
                    <ul className='ipss-view-ul'>
                        <li className={(viewPage === 1 ? 'active ' : '') + 'ipss-view-li'} onClick={()=>handleClick(1)}>ABOUT IPSS</li>
                        <li className={(viewPage === 2 ? 'active ' : '') + 'ipss-view-li'} onClick={()=>handleClick(2)}>HOST PROGRAM</li>
                        <li className={(viewPage === 3 ? 'active ' : '') + 'ipss-view-li'} onClick={()=>handleClick(3)}>ACTIVE PROGRAM</li>
                        <li className={(viewPage === 4 ? 'active ' : '') + 'ipss-view-li'} onClick={()=>handleClick(4)}>APPLY NOW</li>
                    </ul>
                    <div className="ipss-view-dets">
                        {viewPage ===1 && about_Ipss()}
                        {viewPage === 2 && host_program()}
                        {viewPage === 3 && active_program()}
                        {viewPage === 4 && apply_now()}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}