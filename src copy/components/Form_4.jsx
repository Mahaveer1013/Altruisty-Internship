import React, { useState } from 'react';

const Form4 = () => {
    const [formData, setFormData] = useState({
        supportingResources: '',
        timeline: ''
    });

    const [poster, setPoster] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setPoster(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create form data to include the file
        const data = new FormData();
        data.append('supportingResources', formData.supportingResources);
        data.append('timeline', formData.timeline);
        if (poster) {
            data.append('poster', poster);
        }

        // Handle form submission
        console.log('Form data:', {
            ...formData,
            poster
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="supportingResources">Supporting Resources <span>*</span></label>
                <textarea
                    id="supportingResources"
                    name="supportingResources"
                    placeholder="Describe in 200-250 characters."
                    value={formData.supportingResources}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="timeline">Timeline <span>*</span></label>
                <textarea
                    id="timeline"
                    name="timeline"
                    placeholder="Describe in 200-250 characters."
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="poster">Poster for hackathon</label>
                <input
                    type='file'
                    id="poster"
                    name="poster"
                    onChange={handleFileChange}
                />

                <button className='ipss-form-next' type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form4;
