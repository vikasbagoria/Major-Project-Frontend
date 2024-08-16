import React from 'react'
import yoga from './../img/yoga1.png';

const About = () => {
    return (
        <>
            <div className="main_heading pt-5 mt-5" id="aboutPage">
            <div className="text-center">
                <h1 className="display-4" >Welcome to Fitness Forest</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="container" >
            {/* <div className="d-flex mx-5"> */}
            <div className="row my-6 about_section">
            <div className="col-lg-6 col-md-6 col-12 d-flex ">
            <figure>
                <img src={yoga} className="img-fluid " />
                </figure>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-4">
                <h1 className="display-6">Workout</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam non officiis soluta id doloremque ipsa voluptatibus reprehenderit facilis ipsum aut necessitatibus voluptates nostrum iste quod asperiores nobis, quisquam voluptas eius.</p>
                <h1 className="display-6">Yoga</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam non officiis soluta id doloremque ipsa voluptatibus reprehenderit facilis ipsum aut necessitatibus voluptates nostrum iste quod asperiores nobis, quisquam voluptas eius.</p>
                <h1 className="display-6">Dance</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam non officiis soluta id doloremque ipsa voluptatibus reprehenderit facilis ipsum aut necessitatibus voluptates nostrum iste quod asperiores nobis, quisquam voluptas eius.</p>

            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default About
