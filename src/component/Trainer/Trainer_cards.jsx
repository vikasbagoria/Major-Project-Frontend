import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Trainer_cards = ({ items }) => {
    return (
        <>
            <div className="container d-flex outer" >
                {/* <div className="row" > */}
                {items.map((elem) => {
                    const { id, image, name, category, description } = elem; 
                    return (
                        <div className="card col-5  trres" key={id}>
                            <div className="col-lg-12" >
                                <div className="row" >
                                    <div className="col-md-7" >
                                        <img src={image} className="image-fluid imgres" alt="" />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body text-center trainer_card_info">
                                            <h2 className="card-title tr_nm">{name}</h2>
                                            <h6 className="tr_cat" >{category}</h6>
                                            <p>{description}</p>
                                            <div className="icon_trainer">
                                                <i class="fab fa-facebook-f"></i>
                                                <i class="fab fa-instagram"></i>
                                                <i class="fab fa-linkedin-in"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* </div> */}
            </div>
        </>
    )
}

export default Trainer_cards;



// <div className="outer_div" >
//         <div className="outer">
//             {items.map((elem) => {
//                     const { id, image, name, category, description } = elem;
//                         return (

//                                 <div className="card_trainer" key={id}>
//                                     <div className="card_hero">
//                                         <img src={image} className="card_img" />
//                                     </div>
//                                     <div className="card_content">
//                                         <div className="card_info">
//                                             <h2>{name}</h2>
//                                             <h4>{category}</h4>
//                                             <p className="card_details" >{description}</p>
//                                         </div>
//                                     </div>

//                             </div>
//                         )
//                 })
//             }
//         </div>
//         </div>