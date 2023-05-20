import { React } from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [active, setActive] = useState(false);

    const [userMenu, setUserMenu] = useState(false);


    // using location to determine style of other pages navbar
    const { pathname } = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Jon Doe",
        isSeller: true
    }



    return (
        // If active is true apply active class
        //if path is different from homepage apply active class
        <nav className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container flex-row">
                <div className="logo">
                    <Link onClick={() => setUserMenu(false)} className="link" to="/">
                        <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user">
                            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                            <span onClick={() => setUserMenu(prev => !prev)}>{currentUser?.username}</span>
                            {userMenu &&
                                <div className="options">
                                    {
                                        currentUser?.isSeller && (
                                            <>
                                                <Link onClick={() => setUserMenu(prev => !prev)} className="link" to="/mygigs">Gigs</Link>
                                                <Link onClick={() => setUserMenu(prev => !prev)} className="link" to="/add">Add New Gig</Link>
                                            </>
                                        )
                                    }
                                    <Link onClick={() => setUserMenu(prev => !prev)} className="link" to="/orders">Orders</Link>
                                    <Link onClick={() => setUserMenu(prev => !prev)} className="link" to="/messages">Messages</Link>
                                    <Link onClick={() => setUserMenu(prev => !prev)} className="link" to="/">Logout</Link>
                                </div>
                            }

                        </div>
                    )}

                </div>
            </div>

            {
                active ? (
                    <>
                        <hr />
                        <div className="menu ">
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Graphics & Design
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Video & Animation
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Writing & Translation
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                AI Services
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Digital Marketing
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Music & Audio
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Programming & Tech
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Business
                            </Link>
                            <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                Lifestyle
                            </Link>
                        </div>
                        <hr />

                    </>
                )
                    : active || pathname !== "/" ?

                        (
                            <>
                                <hr />
                                <div className="menu">
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Graphics & Design
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Video & Animation
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Writing & Translation
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        AI Services
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Digital Marketing
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Music & Audio
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Programming & Tech
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Business
                                    </Link>
                                    <Link onClick={() => setUserMenu(false)} className="link menuLink" to="/">
                                        Lifestyle
                                    </Link>
                                </div>
                                <hr />
                            </>
                        ) : ""
            }
        </nav >
    )
}

export default Navbar