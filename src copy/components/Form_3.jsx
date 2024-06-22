import React, { useState } from 'react';

function Form3({ inc }){
    const [formData, setFormData] = useState({
        expectedOutcome: '',
        constraintsRequirements: '',
        evaluationCriteria: ''
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
                <label htmlFor="expectedOutcome">Expected Outcome <span>*</span></label>
                <textarea
                    id="expectedOutcome"
                    name="expectedOutcome"
                    placeholder="Describe in 200-250 characters."
                    value={formData.expectedOutcome}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="constraintsRequirements">Constraints and Requirements <span>*</span></label>
                <textarea
                    id="constraintsRequirements"
                    name="constraintsRequirements"
                    placeholder="Describe in 200-250 characters."
                    value={formData.constraintsRequirements}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="evaluationCriteria">Evaluation Criteria <span>*</span></label>
                <input
                    type="text"
                    id="evaluationCriteria"
                    name="evaluationCriteria"
                    value={formData.evaluationCriteria}
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

export default Form3;
