import React from 'react';

export default function Slider() {
    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                {data.map((d)=>(
                 <div>
<                   div>
                     <img src={d.img} alt=""/>

                </div>
    <div>
    <p>{d.name}</p>
    <p>{d.reviews}</p>
    </div>
    </div>  
                ))}

              
            </div>
            
        </div>
    );
}

const data=[
    {
        name:'Kashan Nadeem',
        Description:'i am kashan nadeem. Recently study in FAST University',
        img:'/Projects Picture/img1.jpg'
    },

    {
        name:'Dawood Ramazan',
        img:'/Projects Picture/img2.jpg',
        Description:'i am Dawood Ramazan. Recently study in FAST University',
    },
    {
        name:'Faraz Maqsood',
        img:'/Projects Picture/img3.jpg',
         Description:'i am Faraz Maqsood. Recently study in FAST University',
 },
 {
           name:'Hassan Zahid',
           img:'/Projects Picture/img4.jpg',
           Description:'i am Hassan Zahid. Recently study in FAST University',
       },
    ];
