import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { registerUserData } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegForm = ({ setOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [formFields, setFormFields] = useState({
        f_name: '',
        l_name: '',
        p_mail: '',
        password: '',
        date: '',
        month: '',
        year: '',
        gender: ''
    });

    const { f_name, l_name, p_mail, password, date, month, year, gender } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields(prevFields => ({
            ...prevFields,
            [name]: value
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (!f_name || !l_name || !p_mail || !password || !date || !month || !year || !gender) {
            toast.error('Please enter all the relevant fields!');
        } else {
            const userData = { f_name, l_name, p_mail, password, date, month, year, gender }
            dispatch(registerUserData(userData));
        }
    };

    const [dates, setDates] = useState([]);
    const [years, setYears] = useState([]);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        const dateItems = [];
        for (let i = 1; i <= 31; i++) {
            dateItems.push(i);
        }
        setDates(dateItems);

        const yearItems = [];
        for (let i = 2024; i >= 1905; i--) {
            yearItems.push(i);
        }
        setYears(yearItems);
    }, []);

    return (
        <div className="container d-flex align-items-center justify-content-center mx-auto" style={{ height: '100%', width: '100%', background: 'rgba(255 , 255 , 255, 0.7)', position: 'fixed', top: '0', zIndex: '22' }}>
            <div className="row col-lg-5">
                <form className='shadow bg-white px-5 position-relative'>
                    <IoCloseSharp onClick={() => setOpen(false)} className='position-absolute' cursor="pointer" size={30} style={{ top: '10px', right: '20px' }} />
                    <img className='d-block mx-auto' width={'40%'} src='https://logo.com/image-cdn/images/kts928pd/production/7a611201c5f05f41db5d7988b304565a41592c2e-357x355.png?w=1080&q=72' />
                    <div className="d-flex gap-2">
                        <input value={f_name} onChange={handleChange} className='form-control my-2' type='text' name='f_name' placeholder='First name' />
                        <input value={l_name} onChange={handleChange} className='form-control my-2' type='text' name='l_name' placeholder='Surname' />
                    </div>
                    <input value={p_mail} onChange={handleChange} className='form-control my-2' type='text' name='p_mail' placeholder='Mobile number or email address' />
                    <input value={password} onChange={handleChange} className='form-control my-2' type='password' name='password' placeholder='Password' />
                    <label>Date of Birth</label>
                    <div className="d-flex gap-1">
                        <select value={date} onChange={handleChange} name='date' className='px-5'>
                            {dates.map((date) => <option key={date} value={date}>{date}</option>)}
                        </select>
                        <select value={month} onChange={handleChange} name='month' className='px-5'>
                            {months.map((month) => <option key={month} value={month}>{month}</option>)}
                        </select>
                        <select value={year} onChange={handleChange} name='year' className='px-5'>
                            {years.map((year) => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>
                    <label className='mt-2'>Gender</label>
                    <div className="d-flex justify-content-between gap-2 align-items-center ">
                        <div className="d-flex justify-content-between py-2 align-items-center border rounded-1 mt-1 w-50 px-2">
                            <label className='m-0 p-0 align-self-center'>Female</label>
                            <input type='radio' name='gender' value="female" onChange={handleChange} className='form-check align-self-start mt-1' />
                        </div>
                        <div className="d-flex justify-content-between py-2 align-items-center border rounded-1 mt-1 w-50 px-2">
                            <label className='m-0 p-0 align-self-center'>Male</label>
                            <input type='radio' name='gender' value="male" onChange={handleChange} className='form-check mt-1 align-self-start' />
                        </div>
                    </div>
                    <p className='text-center mt-2 text-secondary mb-2' style={{ fontSize: '0.9rem' }}>By signing up, you agree to our Terms & Privacy Policy </p>
                    <button className='btn text-white w-100 fw-bold mb-3' onClick={handleClick}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default RegForm;
