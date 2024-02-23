import React, { useState } from 'react';
import './home.css';
import LogForm from './LogForm';
import RegForm from './RegForm';

const Main = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {open && <RegForm setOpen={setOpen} />}
            <div className="main container mt-5 w-75 rounded">
                <div className="row">
                    <div className="col-lg-6 d-block mx-auto text-center">
                        <div className="logo">
                            <img
                                width={'90%'}
                                style={{ height: '100vh', objectFit: 'contain' }}
                                src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.572023653.1706097989&semt=ais'
                            />
                        </div>

                        {/* <img className='d-block mx-auto' width={'40%'} src='https://logo.com/image-cdn/images/kts928pd/production/7a611201c5f05f41db5d7988b304565a41592c2e-357x355.png?w=1080&q=72' /> */}
                    </div>

                    <div className="col-lg-6 text-center log">
                        <LogForm setOpen={setOpen} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
