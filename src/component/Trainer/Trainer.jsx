import React, {useState} from 'react';
import trainers from "./trainers";
import Trainer_Cards from './Trainer_cards';
import './trainer.css';

const Trainer = () => {

    const[items,setItems] = useState(trainers);

    return (
        <>
           <div className="main_heading_trainer pt-5 mt-5" id="trainers">
                <div className="text-center">
                    <h1 className="display-4" >OUR TRAINERS</h1>
                    <hr className="w-25 mx-auto" />
                    <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                </div>
                <Trainer_Cards items={items} />
            </div>
        </>
    )
}

export default Trainer;
