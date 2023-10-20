/* eslint-disable react/prop-types */
import s from "./MessageItem.module.css"
const MessageItem = (props) => {
  return (
    <div>
      <div className={s.messageList__item}>{props.message}</div>
    </div>
  )
}

export default MessageItem
