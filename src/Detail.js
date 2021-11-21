import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss'
import { stockContext } from './App'

let Box = styled.div`
    padding : 20px
`;

let Title = styled.h4`
    font-size: 25px;
    color : ${props => props.color}
`;


function Detail(props) {
    let [alert, setAlert] = useState(true)
    let [inputData, setInputData] = useState('')
    let { id } = useParams(); // {}
    let history = useHistory()
    let findedItem = props.shoes.find(item => item.id == id)
    let stock = useContext(stockContext)

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false)
            console.log("hi")
            return () => { clearTimeout(timer) }
        }, 2000)
    }, [])

    return (
        <div className="container">
            <Box><Title >Detail</Title></Box>
            {
                alert === true ? (<div className="my-alert">
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>) : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findedItem.title}</h4>
                    <p>{findedItem.content}</p>
                    <p>{findedItem.price}</p>
                    <StockInfo stock={props.stock} />
                    <button className="btn btn-danger" onClick={() => {
                        props.setStock([9, 10, 11])
                    }}>주문하기</button>
                    <button className="btn btn-secondary" onClick={() => {
                        history.goBack()
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

function StockInfo(props) {
    // console.log("props", props)
    return (
        <p>재고 : {props.stock[0]}</p>
    )
}

export default Detail;


