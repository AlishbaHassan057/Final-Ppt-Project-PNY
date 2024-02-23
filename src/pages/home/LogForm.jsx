import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LogForm = ({ setOpen }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { username, password });
        // You can perform any necessary actions here before navigating
    };

    return (
        <>

            <form onSubmit={handleSubmit} className='w-75 rounded shadow p-3 py-4 bg-white '>
                <img width={'200px'} src='https://www.gpssultanpur.com/MSMS/Images/admin_login.gif' />

                <input
                    className='form-control mt-3'
                    type="text"
                    placeholder="Phone Number, username, or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <div>
                    <input
                        className='form-control mt-3'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Use NavLink to navigate to /admindashboard */}
                <NavLink to="/admindashboard" className="btn mt-3 w-100 text-white fw-bold">
                    Log in
                </NavLink>

                <p className='forget mt-2 mb-0 text-secondary me-0'>Forget Password?</p>
                <p className='mt-2 fw-normal'>Are you a new Admin? <span><a onClick={() => setOpen(true)} href="#" style={{ textDecoration: 'none' }}>Sign Up</a></span></p>
            </form>
        </>
    );
};

export default LogForm;
