import React, { useEffect, useState } from "react"
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      {!editMode && (
        <div className={s.container}>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      )}
      {editMode && (
        <div className={s.container}>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks
