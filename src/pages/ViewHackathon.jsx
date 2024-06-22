import React from 'react'
import '../css/view-hackathon.css'

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
      <div className="problem-title">
        <h1>{hackathondata.title}</h1>
      </div>
      <div className="problem-n-rules">
        <div className="problem-details">
          <h1>Problem Statement:</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum eos repellat tempore asperiores, velit voluptate modi nisi et sequi aspernatur nulla blanditiis, tenetur ea. Dicta ullam, corrupti eveniet non tempore, excepturi possimus cumque quod esse illo expedita quibusdam dolorum blanditiis praesentium beatae. Alias, natus tempore exercitationem hic unde earum dolorem. Nisi eius illum sint ut nobis. Cupiditate culpa asperiores tempora voluptates amet ut ea placeat, perspiciatis nemo mollitia veniam rem tenetur, voluptas at sequi provident, dignissimos officiis. Possimus incidunt officiis id officia recusandae, aperiam sunt! Harum, odit beatae fuga culpa nulla reiciendis ipsa dicta praesentium atque, repudiandae maiores maxime?</p>
        </div>
        <div className="problem-rules">
          <div className="timeline">
            <div className="circle"></div>
            <p>27 Jun 2024 @ 5:30am GMT+5:30</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewHackathon