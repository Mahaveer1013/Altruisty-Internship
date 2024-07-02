import React, { useState } from 'react';
import '../css/submit-solution.css';
import { useNavigate } from 'react-router-dom';

const SubmitSolution = () => {
  const navigate = useNavigate();
  const [solution, setSolution] = useState({
    description: '',
    githubLink: '',
    youtubeLinks: '',
    demoVideo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSolution((prevSolution) => ({
      ...prevSolution,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Solution submitted:', solution);
    navigate('thank-you'); // Redirect to a thank you page after submission
  };

  return (
    <div className="submit-solution">
      <div className="header">
        <h1>Submit Your Solution</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={solution.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="githubLink">GitHub Link (Optional)</label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={solution.githubLink}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="youtubeLinks">YouTube Links</label>
          <input
            type="url"
            id="youtubeLinks"
            name="youtubeLinks"
            value={solution.youtubeLinks}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="demoVideo">Demo Video</label>
          <input
            type="file"
            id="demoVideo"
            name="demoVideo"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit Solution</button>
      </form>
    </div>
  );
};

export default SubmitSolution;
