import React, { useState } from 'react';

function Form2({ inc }){
    const [formData, setFormData] = useState({
        problemTitle: '',
        problemStatement: '',
        problemDescription: '',
        themeName: ''
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
        inc(); // Call the increment function to move to the next form
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="problemTitle">Problem Statement Title <span>*</span></label>
                <input
                    type="text"
                    id="problemTitle"
                    name="problemTitle"
                    value={formData.problemTitle}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="problemStatement">Problem Statement <span>*</span></label>
                <textarea
                    id="problemStatement"
                    name="problemStatement"
                    placeholder="Describe in 200-250 characters."
                    value={formData.problemStatement}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="problemDescription">Problem Description <span>*</span></label>
                <textarea
                    id="problemDescription"
                    name="problemDescription"
                    placeholder="Describe in 200-250 characters."
                    value={formData.problemDescription}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="themeName">Theme Name <span>*</span></label>
                <input
                    type="text"
                    id="themeName"
                    name="themeName"
                    value={formData.themeName}
                    onChange={handleChange}
                />
                <button className="ipss-form-next" type="submit">
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                    Next
                </button>
            </form>
        </>
    );
};

export default Form2;
