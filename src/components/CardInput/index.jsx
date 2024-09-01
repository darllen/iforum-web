import React from "react";
import IconUser from "../iconUser";
import Send from "../../assets/img/send.svg"
import './index.css'

const CardInput = ({ value, onChange, onSubmit, user }) => {

  return (
    <div>
      <div className="container">
        <IconUser type={"two"} user={user} />
        <input
          type="text"
          placeholder="Exponha seu conhecimento"
          value={value}
          onChange={onChange}
        />
        <div className="send-button" onClick={onSubmit}>
          <img src={Send} alt="" />
        </div>
      </div>
    </div>
  )
}

export { CardInput }

