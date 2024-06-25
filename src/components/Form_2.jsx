import React, { useState } from 'react';

function Form2({ handleSubmit }) {
    const [problemFormData, setProblemFormData] = useState({
        problemTitle: '',
        problemStatement: '',
        problemDescription: '',
        themeName: '',
        expectedOutcome: '',
        constraintsRequirements: '',
        evaluationCriteria: '',
        supportingResources: '',
        timeline: '',
        imageFile: null
    });

    const handleProblemFormChange = (e) => {
        const { name, value } = e.target;
        setProblemFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProblemFormData(prevFormData => ({
            ...prevFormData,
            imageFile: file
        }));
    };

    const handleProblemSubmit = (e) => {
        e.preventDefault();
        handleSubmit(problemFormData);
    };

    return (
        <>
            <form onSubmit={handleProblemSubmit}>
                <label htmlFor="problemTitle">Problem Statement Title <span>*</span></label>
                <input
                    type="text"
                    id="problemTitle"
                    name="problemTitle"
                    value={problemFormData.problemTitle}
                    onChange={handleProblemFormChange}
                    required
                />

                <label htmlFor="problemStatement">Problem Statement <span>*</span></label>
                <textarea
                    id="problemStatement"
                    name="problemStatement"
                    placeholder="Describe in 200-250 characters."
                    value={problemFormData.problemStatement}
                    onChange={handleProblemFormChange}
                    required
                />

                <label htmlFor="problemDescription">Problem Description <span>*</span></label>
                <textarea
                    id="problemDescription"
                    name="problemDescription"
                    placeholder="Describe in 200-250 characters."
                    value={problemFormData.problemDescription}
                    onChange={handleProblemFormChange}
                    required
                />

                <label htmlFor="themeName">Theme Name <span>*</span></label>
                <input
                    type="text"
                    id="themeName"
                    name="themeName"
                    value={problemFormData.themeName}
                    onChange={handleProblemFormChange}
                />
                <label htmlFor="expectedOutcome">Expected Outcome <span>*</span></label>
                <textarea
                    id="expectedOutcome"
                    name="expectedOutcome"
                    placeholder="Describe in 200-250 characters."
                    value={problemFormData.expectedOutcome}
                    onChange={handleProblemFormChange}
                    required
                />

                <label htmlFor="constraintsRequirements">Constraints and Requirements <span>*</span></label>
                <textarea
                    id="constraintsRequirements"
                    name="constraintsRequirements"
                    placeholder="Describe in 200-250 characters."
                    value={problemFormData.constraintsRequirements}
                    onChange={handleProblemFormChange}
                    required
                />

                <label htmlFor="evaluationCriteria">Evaluation Criteria <span>*</span></label>
                <input
                    type="text"
                    id="evaluationCriteria"
                    name="evaluationCriteria"
                    value={problemFormData.evaluationCriteria}
                    onChange={handleProblemFormChange}
                />
                <label htmlFor="supportingResources">Supporting Resources <span>*</span></label>
                <textarea
                    id="supportingResources"
                    name="supportingResources"
                    placeholder="Describe in 200-250 characters."
                    value={problemFormData.supportingResources}
                    onChange={handleProblemFormChange}
                    required
                />

                <label htmlFor="timeline">Timeline <span>*</span></label>
                <textarea
                    id="timeline"
                    name="timeline"
                    placeholder="Describe in 200-250 characters."
                    value={problemFormData.timeline}
                    onChange={handleProblemFormChange}
                    required
                />
                <label htmlFor="imageFile">Upload Image <span>*</span></label>
                <input
                    type="file"
                    id="imageFile"
                    name="imageFile"
                    onChange={handleFileChange}
                    required
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
