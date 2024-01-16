import React, { useState } from 'react';
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const Footer = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await subscribeToNewsletter(email);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="container-fluid footer-head text-white">
                <div className="footer-w row align-items-center justify-content-center  gap-0 ">
                    {/* First */}
                    <div className="col-lg-3 footer-logo mt-5">
                        <h5 className='foot-bottom'>EVENIZER</h5>
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod</p>
                        <p>Jl. Sunset Road No.815, Kuta</p>
                        <p>evenizer@domain.com</p>
                        <p>(+62) 81 2345 1234</p>
                    </div>
                    {/* SECOND */}
                    <div className="col-lg-3 mt-5 footer-logo">
                        <h5 className='foot-bottom'>Quick Links</h5>
                        <p className='footer-p'>About Us</p>
                        <p>Services</p>
                        <p>Our Team</p>
                        <p>Pricing</p>
                        <p>Contact</p>
                    </div>
                    {/* THIRD */}
                    <div className="col-lg-3 footer-logo mt-5">
                        <h5 className='foot-bottom'>Useful Links</h5>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Disclaimer</p>
                        <p>Support</p>
                        <p>FAQ</p>
                    </div>
                    {/* FOURTH */}
                    <div className="col-lg-3 footer-logo mt-5">
                        <h5 className='foot-bottom news'>NEWSLETTER</h5>
                        <form className="d-flex mt-3">
                            <input
                                type="email"
                                value={email}
                                placeholder='Your Email Address'
                                onChange={(e) => setEmail(e.target.value)}
                                className='py-2 px-1 rounded-start border-0'
                            />
                            <button className='btn rounded-0 rounded-end py-2 px-1 border-0' type="submit">Submit</button>
                        </form>

                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do eiusmod tempo</p>
                        <div className="d-flex gap-4 align-items-center justify-content-center">
                            <div className="facebook "><FaFacebook size={20} color='purple' />
                            </div>
                            <div className="twitter"><FaTwitter size={20} color='purple' />
                            </div>
                            <div className="instagram"><FaInstagramSquare size={20} color='purple' />
                            </div>
                            <div className="youtube"><FaYoutube size={20} color='purple' />
                            </div>
                        </div>



                    </div>
                    <hr className='mt-5' />
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="footer-b">
                            <h6 className='f-bottom'>Event Planner & Organizer Template Kit by Jegtheme</h6>
                        </div>
                        <div className="copyright">
                            <h6 className='f-bottom'>Copyright © 2023. All rights reserved.</h6>
                        </div>
                    </div>
                </div>

            </div >



        </>
    )
}

export default Footer