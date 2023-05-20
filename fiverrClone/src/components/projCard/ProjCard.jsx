import React from 'react'
import { Link } from 'react-router-dom'
import './ProjCard.scss'




const projCard = ({ item }) => (

    <div className="projCard">
        <Link className="link" to="/">
            <img src={item.img} alt="" />
            <div className="info">
                <img src={item.pp} alt="" />
                <div className="texts">
                    <h2 >{item.cat}</h2>
                    <span className='username'>{item.username}</span>
                </div>
            </div>
        </Link>
    </div>
)

export default projCard