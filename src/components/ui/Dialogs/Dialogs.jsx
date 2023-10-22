/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"
import React from "react"

const Dialogs = (props) => {
  let messageText = React.createRef()
  let sendMessage = () => {
    let text = messageText.current.value
    alert(text)
  }
  let dialogElements = props.state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />
  })
  let messagesElement = props.state.messages.map((m) => {
    return <MessageItem message={m.message} id={m.id} />
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>{dialogElements}</div>
      <div className={s.messageList}>
        {messagesElement}
        <textarea name='' ref={messageText}></textarea>
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default Dialogs
