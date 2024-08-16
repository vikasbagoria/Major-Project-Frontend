import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as RB from 'react-bootstrap';
import './plan_cards.css';

const Plan_Cards = ({ items }) => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row plan_card">
                    {items.map((elem) => {
                        const { id, price, name, category, description } = elem;
                        return (
                            <div className="col-3 planres" key={id}>
                                <RB.Card className="plancardw" key={id} >
                                    <div style={{ backgroundColor: '#f9c6b1' }}  >
                                        <RB.Card.Title className="text-center plan_name ">{name}</RB.Card.Title>
                                        <div className="bg_card">
                                            <RB.Card.Text className="text-center"className="price_fnt">{price}/-</RB.Card.Text>
                                        </div> 
                                    </div>
                                    <RB.Card.Body>
                                        <ul>
                                            <li>{description}</li>
                                            <li>6 Days a week </li>
                                            <li>Recordings Are Available for Course Time</li>
                                            <li>Free Kits Will be Sent Via Courier</li>
                                        </ul>
                                    </RB.Card.Body>
                                    <RB.Card.Body>
                                        <div className="text-center"><RB.Button variant="outline-info">Start Now</RB.Button></div>
                                    </RB.Card.Body>
                                </RB.Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Plan_Cards;
