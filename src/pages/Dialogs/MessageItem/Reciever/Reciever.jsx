import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Reciever.module.css"

const Reciever = (props) => {
  return (
    <div className={s.dialogList}>
      <div className={`${s.dialogList__item} ${s.active}`}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default Reciever
