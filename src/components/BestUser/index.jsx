import React from "react"
import IconUser from "../iconUser"
import './index.css'
import HeartCheck from '../../assets/img/heart_check.svg'

const BestUserCard = ({ name, score }) => {

    return (
        <div className="best-user-card">
            <div className="user-info">

                <IconUser type={"one"} user={name} />
                <span className="user-name">{name}</span>
            </div>
            
            <img src={HeartCheck} alt="" />
            <span className="user-score">{score}</span>
        </div>
    )
}


export { BestUserCard }