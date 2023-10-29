import { connect } from "react-redux"
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/reducers/dialogsReducer"

import Dialogs from "./Dialogs"

// react- redux
// настраивает свойства
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
// настраивает колбеки которые в презентационные компоненты пойдет
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
