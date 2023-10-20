import s from "./Dialogs.module.css"

import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>
        <DialogItem name='German' id='1' />
        <DialogItem name='Caroline' id='2' />
        <DialogItem name='Ann' id='3' />
        <DialogItem name='Pepega' id='4' />
        <DialogItem name='Petron' id='5' />
        <DialogItem name='Dan' id='6' />
        <DialogItem name='FronkyFrog' id='7' />
        <DialogItem name='Spacy' id='8' />
        <DialogItem name='Kukaracha' id='9' />
        <DialogItem name='Circumstance' id='10' />
      </div>
      <div className={s.messageList}>
        <MessageItem message='some text 1' />
        <MessageItem message='some text 2' />
        <MessageItem message='some text 3' />
        <MessageItem message='some text 4' />
        <MessageItem message='some text 5' />
        <MessageItem message='some text 6' />
        <MessageItem message='some text 7' />
        <MessageItem message='some text 8' />
        <MessageItem message='some text 9' />
        <MessageItem message='some text 10' />
      </div>
    </div>
  )
}

export default Dialogs
