import React, { useState } from 'react';

function Form1({ inc }){
    const [formData, setFormData] = useState({
        companyName: '',
        cinNumber: '',
        industrySector: '',
        companyMail: '',
        contactPersonName: '',
        contactPersonEmail: ''
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
        inc();
        //submit code here
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="companyName">Company Name <span>*</span></label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder='Eg : Altruisty'
                    required
                />
                
                <label htmlFor="cinNumber">Cin Number <span>*</span></label>
                <input
                    type="text"
                    id="cinNumber"
                    name="cinNumber"
                    value={formData.cinNumber}
                    onChange={handleChange}
                    placeholder='Eg : 1013'
                    required
                />
                
                <label htmlFor="industrySector">Industry/Sector <span>*</span></label>
                <select
                    name="industrySector"
                    id="industrySector"
                    value={formData.industrySector}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select your sector</option>
                    <option value="example 1">Example 1</option>
                    <option value="example 2">Example 2</option>
                    <option value="example 3">Example 3</option>
                </select>
                
                <label htmlFor="companyMail">Company Mail <span>*</span></label>
                <input
                    type="email"
                    id="companyMail"
                    name="companyMail"
                    value={formData.companyMail}
                    onChange={handleChange}
                    placeholder='Eg : Altruisty@gmail.com'
                    required
                />
                
                <label htmlFor="contactPersonName">Contact Person Details: </label>
                <input
                    type="text"
                    placeholder="Name"
                    id="contactPersonName"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="contactPersonEmail"
                    name="contactPersonEmail"
                    value={formData.contactPersonEmail}
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

export default Form1;
