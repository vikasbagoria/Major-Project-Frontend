import React, {useState} from 'react';
import Plan_Cards from './Plan_Cards';
import info from './info';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Plans = () => {
    const[items,setItems] = useState(info);
    return (
        <>
            <div className="main_heading_plan pt-5 mt-5" id="plan" >
                <div className="text-center">
                    <h1 className="display-4" >PRICING PLANS</h1>
                    <hr className="w-25 mx-auto" />
                    <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                </div>
                <Plan_Cards items = {items}/> 
        </div>
        </>
    )
}
export default Plans;
