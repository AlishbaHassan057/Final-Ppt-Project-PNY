import React, { useState } from 'react';




const LogForm = ({ setOpen }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { username, password });
    };
    return (
        <>
            <form onSubmit={handleSubmit} className='w-75 rounded shadow p-3 py-4 bg-white '>
                <h2 className='mt-1'>LOG IN</h2>

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
                <div>
                    <button className='btn mt-3 w-100 text-white fw-bold' type="submit">Log in</button>
                </div>
                <p className='forget mt-2 mb-0 text-secondary me-0'>Forget Password?</p>
                <p className='mt-2 fw-normal'>Don't have an account? <span><a onClick={() => setOpen(true)} href="#" style={{ textDecoration: 'none' }}>Sign Up</a></span></p>



            </form >

        </>
    )
}

export default LogForm