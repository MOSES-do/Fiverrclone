import React, { useState } from 'react'
import { images } from '../../constants'
import './gigs.scss'
import GigCard from '../../components/gigCard/GigCard'
import { data } from '../../constants'

const Gigs = () => {

    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }

    return (
        <section className="gigs">
            <div className="container">
                <span className="breadcrumbs">FIVERR &gt; GRAPHICS & DESIGN</span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with fiverr&apos;s AI Artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budged</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">SortBy</span>
                        <span className="sortType">{sort === "sales" ? 'Best Selling' : 'Newest'}</span>
                        <img onClick={() => setOpen(prevValue => !prevValue)} src={images.down} alt="" />

                        {open &&
                            <div className="rightMenu">
                                {sort === "sales" ?
                                    (<span onClick={() => reSort("createdAt")}>Newest</span>)
                                    :
                                    (<span onClick={() => reSort("sales")}>Best Selling</span>)
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className="cards">
                    {data.gigs.map(gig => (
                        <GigCard key={gig.id} item={gig} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gigs