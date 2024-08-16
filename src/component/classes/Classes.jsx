import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import details from './details';
import { useState } from 'react';
import Cards from './Cards';
import './cls.css';


const Classes = () => {
    const[items,setItems] = useState(details);

    return (
        <>
            <div id="main_heading" className="classes pt-5 mt-5" id="classes">
                <div className="text-center">
                    <h1 className="display-4" >Popular Classes</h1>
                    <hr className="w-25 mx-auto" />
                    <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                </div>
                
                <Cards items={items} />
            </div>
        </>
    )
}

export default Classes;
