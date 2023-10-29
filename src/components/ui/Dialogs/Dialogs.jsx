/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"

const Dialogs = (props) => {
  let state = props.dialogsPage
  let messageText = React.createRef()

  let dialogElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />
  })
  let messagesElements = state.messages.map((m) => {
    return <MessageItem message={m.message} key={m.id} id={m.id} />
  })
  let newMessageBody = state.newMessageBody

  // button
  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body) // Изменил это место
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>{dialogElements}</div>
      <div className={s.messageList}>
        {messagesElements}
        <div>
          <div>
            <textarea
              name=''
              placeholder='Enter your message'
              ref={messageText}
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
