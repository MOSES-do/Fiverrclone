import React from 'react'
import { images } from '../../constants'
import './orders.scss'

const Orders = () => {

    const currentUser = {
        id: 1,
        username: "Jon Doe",
        isSeller: true
    }

    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>

                <table>
                    <tr className="headers">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"} </th>
                        <th>Contact</th>
                    </tr>
                    <tr className="details">
                        <td>
                            <img
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Stunning concept art</td>
                        <td>59.<sup>99</sup></td>
                        <td>13</td>
                        <td>
                            <img className="mssg" src={images.message} alt="" />
                        </td>
                    </tr>
                    <tr className="details">
                        <td>
                            <img
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Ai generated concept art</td>
                        <td>120.<sup>99</sup></td>
                        <td>41</td>
                        <td>
                            <img className="mssg" src={images.message} alt="" />
                        </td>
                    </tr>
                    <tr className="details">
                        <td>
                            <img
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>High quality digital character</td>
                        <td>79.<sup>99</sup></td>
                        <td>55</td>
                        <td>
                            <img className="mssg" src={images.message} alt="" />
                        </td>
                    </tr>
                    <tr className="details">
                        <td>
                            <img
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Illustration hyper realistic painting</td>
                        <td>119.<sup>99</sup></td>
                        <td>29</td>
                        <td>
                            <img className="mssg" src={images.message} alt="" />
                        </td>
                    </tr>
                    <tr className="details">
                        <td>
                            <img
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Original ai generated digital art</td>
                        <td>59.<sup>99</sup></td>
                        <td>34</td>
                        <td>
                            <img className="mssg" src={images.message} alt="" />
                        </td>
                    </tr>
                    <tr className="details">
                        <td>
                            <img
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </td>
                        <td>Text based ai generated art</td>
                        <td>110.<sup>99</sup></td>
                        <td>16</td>
                        <td>
                            <img className="mssg" src={images.message} alt="" />
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Orders