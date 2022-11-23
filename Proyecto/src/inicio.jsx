import React from 'react'
import React_img from './img/react.png'
import React_native from './img/react_native.png'
import React_learn from './img/react_learn.png'


export default function inicio() {
  return (
    <div className="container text-center">
        <h2>Carousel</h2>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                <img src={React_native} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item active">
                <img src={React_img} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={React_learn} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}
