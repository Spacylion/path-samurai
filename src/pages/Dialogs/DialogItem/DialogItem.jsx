import React from "react"
import { NavLink } from "react-router-dom"
import s from "./DialogItem.module.css"

const DialogItem = (props) => {
  return (
    <div className={s.dialogList}>
      <div className={`${s.dialogList__item} ${s.active}`}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem
