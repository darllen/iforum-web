import React from "react";
import IconUser from "../iconUser";
import Send from "../../assets/img/send.svg"
import './index.css'
const CardInput = () => {

    return (
        <div>
            <div className="container">
                <IconUser type={"two"} user={"Matheus"} />
                <input 
                type="text"
                placeholder="Exponha seu conhecimento"
                />
                <div className="send-button">
                    <img  src={Send} alt="" />
                </div>
            </div>
        </div>
    )
}


export { CardInput }