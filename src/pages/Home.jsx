import React, { useState } from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom';
import home_1 from '../images/home_1.webp';
import home_2 from '../images/home_2.jpeg';
import home_3 from '../images/home_3.webp';
import home_4 from '../images/home_4.jpeg';
import home_5 from '../images/home_5.jpg';

const Home = () => {

  const [detPage, setDetPage] = useState(1);

  const AboutIPSS = () => {
    return (
      <>
        <div className="part one">
          <h3>Industry Problem solving by students</h3>
          <p>"Industry Problem Solving by Students" is a platform where students collaborate to tackle real-world challenges, applying their innovative thinking and academic knowledge to propose effective solutions, fostering experiential learning and practical skill development.</p>
        </div>
        <div className="quote-part two">
          <img src={home_1} alt={home_1} />
        </div>
        <div className="quote-part four">
          <h1>We love <span className='orange'>problems</span> and the people who <span className='orange'>solve</span> them.</h1>
        </div>
        <div className="part three">
          <h3>Who can apply?</h3>
          <p>Industry Problem Solving by Students welcomes applications from undergraduate and graduate students across various academic disciplines, passionate about solving real-world problems and eager to contribute their skills and creativity to meaningful projects.</p>
        </div>
        <div className="part five">
          <h3>Uses</h3>
          <p>This platform offers students invaluable opportunities to gain practical experience, collaborate with industry professionals, and make meaningful contributions to solving real-world challenges, enhancing their skill sets and future employability.</p>
        </div>
        <div className="quote-part six">
          <img src={home_3} alt={home_3} />
        </div>
        <div className="quote-part eight">
          <img src={home_4} alt={home_4} />
        </div>
        <div className="part seven">
          <h3>Process</h3>
          <p>To apply, visit our website and fill out the online form, detailing academic background, skills, and interest in tackling industry challenges. Selected candidates will proceed through further steps, potentially including interviews or assessments</p>
        </div>
        <div className="know-more-btn nine">
          <button>Know More</button>
        </div>
      </>
    )
  }

  const HostProgram = () => {
    return (
      <>
        <div className="part one">
          <h3>About</h3>
          <p>Join our program and leverage our platform to post your company's challenges, tapping into the collective problem-solving prowess of talented student participants. By being part of our program, companies gain access to fresh perspectives, innovative solutions, and potential collaborations, driving impactful outcomes for your business and fostering the next generation of industry leaders.</p>
        </div>
        <div className="quote-part two">
          <h1><span className="orange">Hackathon: </span>where students innovate and collaborate.</h1>
        </div>
        <div className="quote-part four">
          <img src={home_2} alt={home_2} />
        </div>
        <div className="host-part three">
          <h3>For the companies to post the problem</h3>
          <p>Companies can <span className="orange">Post a problem statement</span>, which will be solved by the students.</p>
          <Link to='/post-problem'> <span className="material-symbols-outlined">post_add</span>Post a problem</Link>
        </div>
        <div className="host-part five">
          <h3>View problem statements</h3>
          <p>You can refer some problems posted by other companies here.</p>
          <Link to='/hackathons'> <span className="material-symbols-outlined">visibility</span>View Problems</Link>
        </div>
        <div className="quote-part six">
          <h1>Get your <span className="orange">problem</span> solved by talents</h1>
        </div>
      </>
    )
  }

  const StudentsApply = () => {
    return (
      <>
        <div className="host-part one">
          <h3>Students to participate in IPSS</h3>
          <p>Students can solve the problems, posted by companies and get exciting rewards like <span className="orange">INTERNSHIPS</span> or <span className="orange">FULL TIME OPPURTUNITIES</span></p>
          <Link to='/hackathons'> <span className="material-symbols-outlined">visibility</span>View Problems</Link>
        </div>
        <div className="quote-part two">
            <h1>Provide <span className="orange">solution</span> and get exciting connection and rewards.</h1>
        </div>
        <div className="quote-part four">
          <img src={home_5} alt={home_5} />
        </div>
        <div className="part three">
          <h3>About</h3>
          <p>Join our program and seize the opportunity to participate in real-world problem-solving initiatives, collaborating with industry professionals to tackle pressing challenges. As a student participant, you'll gain invaluable hands-on experience, expand your skill set, and make meaningful contributions to innovative solutions, positioning yourself for future success in your academic and professional endeavors.</p>
        </div>
      </>
    )
  }

  return (
    <div className='home'>
      <div className="title">
        <p>Industry Problem Solving By Students</p>
      </div>
        <ul className='details'>
          <li onClick={() => setDetPage(1)} className={detPage === 1 && 'active'}>About IPSS</li>
          <li onClick={() => setDetPage(2)} className={detPage === 2 && 'active'}>Host a Program</li>
          <li onClick={() => setDetPage(3)} className={detPage === 3 && 'active'}>Provide Solution</li>
        </ul>
      <div className="det-page">
        {detPage === 1 && <AboutIPSS />}
        {detPage === 2 && <HostProgram />}
        {detPage === 3 && <StudentsApply />}
      </div>
    </div>
  )
}

export default Home