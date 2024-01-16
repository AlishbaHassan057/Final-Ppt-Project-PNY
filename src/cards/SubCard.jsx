// SubCard.js

import React from 'react';
import { MdCelebration } from 'react-icons/md';
import { FaCameraRetro } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';
import { PiGuitarFill } from 'react-icons/pi';
import { GiPartyFlags } from 'react-icons/gi';
import { GiMagicHat } from 'react-icons/gi';
import cardData from './data';
import { FaArrowRightLong } from "react-icons/fa6";


const SubCard = () => {
    const iconComponents = {
        MdCelebration: MdCelebration,
        FaCameraRetro: FaCameraRetro,
        AiOutlineBook: AiOutlineBook,
        PiGuitarFill: PiGuitarFill,
        GiPartyFlags: GiPartyFlags,
        GiMagicHat: GiMagicHat,
    };

    return (
        <>

            {cardData.map((card) => (
                <div key={card.id} className="col-lg-4 mt-4">
                    <div className="card about-card ps-5 border-none" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className=" mt-5">
                            {React.createElement(iconComponents[card.icon], { size: 38, style: { color: card.color } })}
                        </div>
                        <h5 className="fw-bold">{card.title}</h5>
                        <p className="col-lg-10 text-secondary">{card.description}</p>
                        <a href={card.link} className="unstyled-link">
                            Read More     <FaArrowRightLong />

                        </a>
                    </div>

                </div>

            ))}
        </>
    );
};

export default SubCard;
