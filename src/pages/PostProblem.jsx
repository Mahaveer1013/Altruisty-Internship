import React, { useState } from 'react'
import Form1 from '../components/Form_1'
import Form2 from '../components/Form_2'
import '../css/post-problem.css'

const PostProblem = () => {

    const [formPage, setFormPage] = useState(1);

    const [formData, setFormData] = useState({
        companyName: '',
        cinNumber: '',
        industrySector: '',
        companyMail: '',
        contactPersonName: '',
        contactPersonEmail: '',
        problemTitle: '',
        problemStatement: '',
        problemDescription: '',
        themeName: '',
        expectedOutcome: '',
        constraintsRequirements: '',
        evaluationCriteria: '',
        supportingResources: '',
        timeline: '',
    });

    const CompanyForm = () => {
        return (
            <>
                <legend className='form-title'>Register your company</legend> 
                <Form1 setFormPage={setFormPage} setFormData={setFormData} formData={formData} />
            </>
        )
    }

    const ProblemForm = () => {
        return (
            <>
                <legend className='form-title'>Register Problem Statement</legend> 
                <Form2 handleSubmit={handleSubmit } setFormData={setFormData} formData={formData}/>
            </>
        )
    }

    const handleSubmit = ({problemFormData}) => {
        // console.log(problemFormData);
        console.log({...formData, ...problemFormData});
        setFormData(prevFormData => ({
            ...prevFormData,
            ...problemFormData
        }));
        console.log(formData);
    }

    return (
        <div className='post-problem'>
            <div className="title">
                Propose a problem statement
            </div>
            <div className="form-div">
                <fieldset className="left">
                    {formPage ===1 && <CompanyForm />}
                    {formPage ===2 && <ProblemForm />}
                </fieldset>
                <fieldset className="right">
                    <legend className='form-title'>Steps To Post</legend>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia est culpa magni, repellendus fuga!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia est culpa magni, repellendus fuga!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia est culpa magni, repellendus fuga!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia est culpa magni, repellendus fuga!</li>
                    </ul>
                </fieldset>
            </div>
        </div>
    )
}

export default PostProblem