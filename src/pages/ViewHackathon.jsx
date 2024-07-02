import React from 'react'
import '../css/view-hackathon.css'
import home_1 from '../images/home_1.webp'
import { Link } from 'react-router-dom'

const ViewHackathon = () => {
  const hackathondata = {
    id: 2,
    title: 'Zoho Interview clearing Problems',
    timeline: '12 days left',
    mode: 'Online',
    company_name: 'Zoho, Corporation of India',
    category: 'Interview',
    challenge: 'Intermediate',
    date_posted: '2024-06-15'
  }

  return (
    <div className='view-hackathon'>
      <div className="header">
        <h1>{hackathondata.title}</h1>
      </div>
      <div className="content">
        <div className="details">
          <div className="section">
            <h2>Problem Statement</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ab quisquam magnam vel possimus dolor minus aspernatur officia cumque obcaecati harum, consequatur veniam deleniti ut amet temporibus. Veritatis hic at fugiat beatae ducimus ratione adipisci iste, magnam necessitatibus labore dolorum quo animi ipsum optio ad tenetur, molestiae placeat corporis repudiandae, repellat similique nesciunt ipsa. Ipsam porro nihil architecto aut, provident quod alias minus laborum earum doloribus, doloremque impedit numquam sapiente sunt est dolorum perferendis! Unde temporibus nemo eos consequuntur dolores recusandae ratione ad accusantium officia repellendus iste tempora exercitationem soluta placeat cupiditate facere ullam labore ab consequatur dicta, quidem molestias.</p>
          </div>
          <div className="section">
            <h2>Rules</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ab quisquam magnam vel possimus dolor minus aspernatur officia cumque obcaecati harum, consequatur veniam deleniti ut amet temporibus. Veritatis hic at fugiat beatae ducimus ratione adipisci iste, magnam necessitatibus labore dolorum quo animi ipsum optio ad tenetur, molestiae placeat corporis repudiandae, repellat similique nesciunt ipsa. Ipsam porro nihil architecto aut, provident quod alias minus laborum earum doloribus, doloremque impedit numquam sapiente sunt est dolorum perferendis! Unde temporibus nemo eos consequuntur dolores recusandae ratione ad accusantium officia repellendus iste tempora exercitationem soluta placeat cupiditate facere ullam labore ab consequatur dicta, quidem molestias.</p>
          </div>
          <div className="section">
            <h2>Constraints</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ab quisquam magnam vel possimus dolor minus aspernatur officia cumque obcaecati harum, consequatur veniam deleniti ut amet temporibus. Veritatis hic at fugiat beatae ducimus ratione adipisci iste, magnam necessitatibus labore dolorum quo animi ipsum optio ad tenetur, molestiae placeat corporis repudiandae, repellat similique nesciunt ipsa. Ipsam porro nihil architecto aut, provident quod alias minus laborum earum doloribus, doloremque impedit numquam sapiente sunt est dolorum perferendis! Unde temporibus nemo eos consequuntur dolores recusandae ratione ad accusantium officia repellendus iste tempora exercitationem soluta placeat cupiditate facere ullam labore ab consequatur dicta, quidem molestias.</p>
          </div>
        </div>
        <div className="sidebar">
          <img src={home_1} alt="Hackathon" className="hackathon-image" />
          <div className="info">
            <h3>Date Posted:</h3>
            <p>{hackathondata.date_posted}</p>
            <h3>Timeline:</h3>
            <p>27 Jun 2024 @ 5:30am GMT+5:30</p>
          </div>
          <Link to='provide-solution' className='solve-now'> Solve now </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewHackathon
