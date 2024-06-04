import React, { useState } from 'react';

const Form4 = () => {
    const [formData, setFormData] = useState({
        supportingResources: '',
        timeline: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
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
            
                <button className='ipss-form-next' type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form4;
