import React from 'react'
import './featured.scss'
import { images } from '../../constants'

const Featured = () => {
    return (
        <section className='featured'>
            <div className="container flex-row">
                <div className="left">
                    <h1>Find the perfect <i>freelance</i> services for your business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src={images.search} alt="search button" />
                            <input type="text" placeholder='Try building mobile app' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src={images.man} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Featured