import React from 'react';
import classes from "./slider-style.module.css";




const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className={classes.nextButton} onClick={onClick}>
            Next
        </button>
    );
};
export default function Slider() {
    const data = [
        {
            name: 'Kashan Nadeem',
            Description: 'i am kashan nadeem. Recently study in FAST University',
            img: '/Projects Picture/img1.jpg'
        },
        {
            name: 'Dawood Ramazan',
            img: '/Projects Picture/img2.jpg',
            Description: 'i am Dawood Ramazan. Recently study in FAST University',
        },
        {
            name: 'Faraz Maqsood',
            img: '/Projects Picture/img3.jpg',
            Description: 'i am Faraz Maqsood. Recently study in FAST University',
        },
        {
            name: 'Hassan Zahid',
            img: '/Projects Picture/img4.jpg',
            Description: 'i am Hassan Zahid. Recently study in FAST University',
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Show three items at a time
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className={classes.slider}>
            <h1>Image Slider</h1>
                
            
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.Description}</p>
                            <button>View</button>
                        </div>
                    </div>
                ))}
        </div>
    );
}