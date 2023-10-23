/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"
import React from "react"
import { sendMessageCreator } from "../../../redux/actions/actions"

const Dialogs = (props) => {
  let messageText = React.createRef()

  let state = props.store.getState().dialogsPage

  let dialogElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />
  })
  let messagesElements = state.messages.map((m) => {
    return <MessageItem message={m.message} id={m.id} />
  })
  let newMessageBody = state.newMessageBody

  // button
  let onSendMessageClick = (e) => {
    props.state.dispatch(sendMessageCreator(body))
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
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
