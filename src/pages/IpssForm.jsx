import React, { useState } from 'react'
import poster from '../images/altruisty-logo.jpeg'
import Form1 from '../components/Form_1'
import Form2 from '../components/Form_2';
import Form3 from '../components/Form_3';
import Form4 from '../components/Form_4';

export default function IpssForm() {

    const [form_number, setFormNumber] = useState(1);
    console.log(form_number);
    const filling_width = form_number === 1 ? '20px' :
        form_number === 2 ? '33%' :
            form_number === 3 ? '66%' :
                form_number === 4 && '100%';
    
    const dec_form_number = () => {
        if (form_number !== 1) {
            setFormNumber(prev => prev - 1);
        }
    };

    function inc_form_number() {
        setFormNumber(prev => prev + 1);
    };

    return (
        <div className='ipss-form-page'>
            <div className="top-btn" onClick={dec_form_number}>
                <span className='material-symbols-outlined'>arrow_back</span> Back {form_number === 1 && 'to home' }
            </div>
            <div className="ipss-form">
                <div className='ipss-form-poster'>
                    <img src={poster} alt={poster} />
                </div>
                <div className="form-page">
                    <p className='form-page-main-title'>{ form_number === 1 ? 'Company Details' : 'Problem Details' } </p>
                    <p className='form-page-sub-title'>Post a Problem</p>
                    <div className="progress-line">
                        <div className="empty-line"></div>
                        <div className="filled-line"
                            style={{width: filling_width }}
                        ></div>
                    </div>
                    {form_number === 1 && <Form1 inc={inc_form_number} />}
                    {form_number === 2 && <Form2 inc={inc_form_number} />}
                    {form_number === 3 && <Form3 inc={inc_form_number} />}
                    {form_number === 4 && <Form4 />}
                </div>
            </div>
        </div>
    )
}
