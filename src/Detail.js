import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function Detail(props) {

    let { id } = useParams(); // {}
    let history = useHistory()
    let findedItem = props.shoes.find(item => item.id == id)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findedItem.title}</h4>
                    <p>{findedItem.content}</p>
                    <p>{findedItem.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-secondary" onClick={() => {
                        history.goBack()
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;

