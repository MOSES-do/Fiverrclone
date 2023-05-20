import React from 'react'
import './gigCard.scss'
import { images } from "../../constants"
import { Link } from 'react-router-dom'


const GigCard = ({ item }) => {
    return (
        <div className="gigCard">
            <Link to="/gig/123" className="link">
                <img src={item.img} alt="" />

                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                </div>
                <div className="star">
                    <img src={images.star} alt="" />
                    <span>{item.star}</span>
                </div>
                <hr />
                <div className="details">
                    <img src={images.heart} alt="" />

                    <div className="price">
                        <span>STARTING AT</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GigCard