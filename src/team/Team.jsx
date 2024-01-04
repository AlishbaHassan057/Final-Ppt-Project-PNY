import React from 'react';

const Team = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="col-lg-9 text-center mx-auto mt-5">
                    <h5 className="services mt-5">Our Team</h5>
                    <h1>Meet Our Expert Team</h1>
                    <div className="col-lg-7 text-secondary text-center mx-auto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img
                                className="rounded-2 mt-4"
                                style={{ width: '100%' }}
                                src="https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/smiling-happy-successful-businessman-e1629774005703-773x1024.jpg"
                                alt="Team Member 1"
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                className="rounded-2 mt-4"
                                style={{ width: '100%' }}
                                src="https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/pretty-woman-with-smartphone-e1629775649991-772x1024.jpg"
                                alt="Team Member 2"
                            />
                        </div>
                        <div className="col-lg-4">
                            <img
                                className="rounded-2 mt-4"
                                style={{ width: '100%' }}
                                src="https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/portrait-of-smiling-P9L9AN3-2-1-773x1024.jpg"
                                alt="Team Member 3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
