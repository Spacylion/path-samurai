import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"
import DialogsReduxForm from "./DialogsForm/DialogsForm"

const Dialogs = (props) => {
  let state = props.dialogsPage
  let dialogElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />
  })
  let messagesElements = state.messages.map((m) => {
    return <MessageItem message={m.message} key={m.id} id={m.id} />
  })

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>{dialogElements}</div>
      <div className={s.messageList}>
        {messagesElements}
        <div>
          <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
