import React from 'react'
import Featured from '../../container/featured/Featured'
import TrustedBy from '../../container/trustedBy/TrustedBy'
import Slide from '../../container/Slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import ProjCard from '../../components/projCard/ProjCard'
import { data, images, meal } from '../../constants'
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {data.cards.map((card) => <CatCard key={card.id} item={card} />)}
            </Slide>

            <section className="features">
                <div className="container flex-row">
                    <div className="feature features-left">
                        <h1>A whole world of freelance talent at your fingertips</h1>
                        <div className="title">
                            <img src={images.check} alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                        <div className="title">
                            <img src={images.check} alt="" />
                            Quality work done quickly
                        </div>
                        <p>
                            Find the right freelancer to begin working on your project within
                            minutes.
                        </p>
                        <div className="title">
                            <img src={images.check} alt="" />
                            Protected payments, every time
                        </div>
                        <p>
                            Always know what you&lsquo;ll pay upfront. Your payment isn&lsquo;t released
                            until you approve the work.
                        </p>
                        <div className="title">
                            <img src={images.check} alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                    </div>

                    <div className="feature features-right">
                        <div className="features-right_video">
                            <video width="720" height="400" type="video/mp4" src={meal} controls />
                        </div>
                    </div>
                </div>
            </section>

            <section className="features dark">
                <div className="container flex-row">
                    <div className="feature features-left">
                        <h1>Fiverr <i>business</i></h1>

                        <h1>
                            A business solution designed for <i>teams</i>
                        </h1>

                        <p>
                            Upgrade to a curated experience packed with tools and benefits, dedicated to businesses
                        </p>

                        <div className="title">
                            <img src={images.check} alt="" />
                            Connect to freelancers with proven business experience
                        </div>

                        <div className="title">
                            <img src={images.check} alt="" />
                            Get matched with the perfect talent by a customer success manager
                        </div>

                        <div className="title">
                            <img src={images.check} alt="" />
                            Manage teamwork and bost productivity with one powerful workspace
                        </div>

                        <button>Explore Fiverr Business</button>


                    </div>

                    <div className="feature features-right">
                        <div className="features-right_video">
                            <img
                                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Slide slidesToShow={4} arrowsScroll={4}>
                {data.projects.map((card) => <ProjCard key={card.id} item={card} />)}
            </Slide>


        </div>
    )
}

export default Home