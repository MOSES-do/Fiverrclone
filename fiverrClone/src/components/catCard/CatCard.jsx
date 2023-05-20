import React from 'react'
import { Link } from 'react-router-dom'
import './catCard.scss'




const CatCard = ({ item }) => (

    <div className="catCard">
        <Link className="link" to="/gigs?cat=design">
            <img src={item.img} alt="" />
            <div>
                <span className="desc ">{item.desc}</span>
                <span className='title'>{item.title}</span>
            </div>
        </Link>
    </div>
)

export default CatCard