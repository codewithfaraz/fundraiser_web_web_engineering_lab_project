import React from 'react';
import classes from "./slider-style.module.css";

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={`${classes.customArrow} ${classes.customNext}`} onClick={onClick}>
            Next
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={`${classes.customArrow} ${classes.customPrev}`} onClick={onClick}>
            Prev
        </div>
    );
};
export default function Slider() {
    const data = [
      
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
        {
            name: 'Dawood Ramazan',
            img: '/Projects Picture/img2.jpg',
            Description: 'i am Dawood Ramazan. Recently study in FAST University',
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <div className={classes.slider}>
                
            
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