import React from 'react';
import * as RB from 'react-bootstrap';

const Cards = ({ items }) => {
    return (
        <>
        <div className="container">
            <div className="cd_center_div">
           
                {items.map((elem) => {
                    const { id, image, name, title, time, description } = elem;

                    return (
                        <div className="col-4 clsres">
                        <RB.Card style={{ width: '21rem' }} key={id} className=" ml-3 my-3 card">
                            <RB.Card.Img variant="top" src={image} alt="" className="img-fluid circle" />
                            <RB.Card.Body>
                                <RB.Card.Title className="text-center font-weight-bold cls_nm_font">{title}</RB.Card.Title>
                                <RB.Card.Text className="text-center">{description}</RB.Card.Text>
                            </RB.Card.Body>
                            <RB.ListGroup className="list-group-flush">
                                <RB.ListGroupItem className="text-center font-weight-bold cls_font2">{name}</RB.ListGroupItem>
                                <RB.ListGroupItem className="text-center"><i class="far fa-calendar-check" style={{color:"#fcafad"}}></i> {time}</RB.ListGroupItem>
                            </RB.ListGroup>
                            <RB.Card.Body>
                                <div className="text-center"><RB.Button variant="outline-info">Book Now</RB.Button></div>
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

export default Cards;
