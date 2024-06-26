import React, { useState } from 'react';

function Form1({ setFormPage, setFormData }){
    const [companyFormData, setCompanyFormData] = useState({
        companyName: '',
        cinNumber: '',
        industrySector: '',
        companyMail: '',
        contactPersonName: '',
        contactPersonEmail: ''
    });

    const handleCompanyFormChange = (e) => {
        const { name, value } = e.target;
        setCompanyFormData(prevcompanyFormData => ({
            ...prevcompanyFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(prevFormData => ({
            ...prevFormData,
            ...companyFormData
        }));
        console.log(companyFormData);
        setFormPage(2);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="companyName">Company Name <span className='orange'>*</span></label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={companyFormData.companyName}
                    onChange={handleCompanyFormChange}
                    placeholder='Eg : Altruisty'
                    required
                />
                
                <label htmlFor="cinNumber">CIN Number <span className='orange'>*</span></label>
                <input
                    type="text"
                    id="cinNumber"
                    name="cinNumber"
                    value={companyFormData.cinNumber}
                    onChange={handleCompanyFormChange}
                    placeholder='Eg : 1013'
                    required
                />
                
                <label htmlFor="industrySector">Industry/Sector <span className='orange'>*</span></label>
                <select
                    name="industrySector"
                    id="industrySector"
                    value={companyFormData.industrySector}
                    onChange={handleCompanyFormChange}
                    required
                >
                    <option value="">Select your sector</option>
                    <option value="example 1">Example 1</option>
                    <option value="example 2">Example 2</option>
                    <option value="example 3">Example 3</option>
                </select>
                
                <label htmlFor="companyMail">Company Mail <span className='orange'>*</span></label>
                <input
                    type="email"
                    id="companyMail"
                    name="companyMail"
                    value={companyFormData.companyMail}
                    onChange={handleCompanyFormChange}
                    placeholder='Eg : Altruisty@gmail.com'
                    required
                />
                
                <label htmlFor="contactPersonName">Contact Person Details: </label>
                <input
                    type="text"
                    placeholder="Name"
                    id="contactPersonName"
                    name="contactPersonName"
                    value={companyFormData.contactPersonName}
                    onChange={handleCompanyFormChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="contactPersonEmail"
                    name="contactPersonEmail"
                    value={companyFormData.contactPersonEmail}
                    onChange={handleCompanyFormChange}
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

export default Form1;
