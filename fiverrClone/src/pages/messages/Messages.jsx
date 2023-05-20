import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { nanoid } from "nanoid"
import './messages.scss'


const Messages = () => {

    const newId = nanoid();
    const [userMssgData, setUserMssgData] = useState([
        {
            id: "1",
            username: "Jon Doe",
            content: `lorem ispum doloret amsn yukus na bish dalar opine`,
            hoursAgo: "1 day ago",
            readMssg: false,
        },

        {
            id: "2",
            username: "Jon Doe",
            content: `lorem ispum doloret amsn yukus na bish dalar opine`,
            hoursAgo: "10 days ago",
            readMssg: false,
        },
        {
            id: "3",
            username: "Jon Doe",
            content: `lorem ispum doloret amsn yukus na bish dalar opine`,
            hoursAgo: "10 hours ago",
            readMssg: false,
        },
        {
            id: "4",
            username: "Jon Doe",
            content: `lorem ispum doloret amsn yukus na bish dalar opine`,
            hoursAgo: "1 week ago",
            readMssg: false,
        },
        {
            id: "7",
            username: "Jon Doe",
            content: `lorem ispum doloret amsn yukus na bish dalar opine`,
            hoursAgo: "1 hour ago",
            readMssg: false,
        }
    ])

    console.log(userMssgData);
    const checkMessageStatus = (id) => {
        console.log(id);
        setUserMssgData(userMssgData.map(data => (
            data.id === id ? {
                ...data, readMssg: data.readMssg = true
            } : data
        )))
    }


    return (
        <div className="messages">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>

                <table>
                    <thead>
                        <tr className="headers">
                            <th>Buyer</th>
                            <th>Last Message</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody key={newId} >
                        {userMssgData.map((data) => (
                            <>
                                <tr key={data.id} onClick={() => checkMessageStatus(data.id)} className={`userMssg ${data.readMssg ? "" : "active"}`}>
                                    <td>{data?.username}</td>
                                    <td><Link to="/message/123" className="link">{data.content?.substring(0, 100)}...</Link></td>
                                    <td>{data.hoursAgo}</td>
                                    <td>
                                        <button>{data.readMssg ? "Read" : "Mark as Read"}</button>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>

        </div >
    )
}

export default Messages