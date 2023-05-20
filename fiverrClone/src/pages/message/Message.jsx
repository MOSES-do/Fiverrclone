import React from 'react'
import { Link } from 'react-router-dom'
import './message.scss'

const Message = () => {
    return (
        <div className="message">
            <div className="container">
                <span className="breadCrumbs">
                    <Link className="link" to="/messages">MESSAGES</Link> &gt; JON DOE &gt;
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat, commodi, alias saepe omnis id voluptatem sit architecto repellendus explicabo provident dolorem pariatur rerum, excepturi illum harum numquam vero asperiores!
                        </p>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat, commodi, alias saepe omnis id voluptatem sit architecto repellendus explicabo provident dolorem pariatur rerum, excepturi illum harum numquam vero asperiores!
                        </p>
                    </div>
                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat, commodi, alias saepe omnis id voluptatem sit architecto repellendus explicabo provident dolorem pariatur rerum, excepturi illum harum numquam vero asperiores!
                        </p>
                    </div>
                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat, commodi, alias saepe omnis id voluptatem sit architecto repellendus explicabo provident dolorem pariatur rerum, excepturi illum harum numquam vero asperiores!
                        </p>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat, commodi, alias saepe omnis id voluptatem sit architecto repellendus explicabo provident dolorem pariatur rerum, excepturi illum harum numquam vero asperiores!
                        </p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message