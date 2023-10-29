import { connect } from "react-redux"
import sendMessageCreator from "../../../redux/reducers/dialogsReducer"
import updateNewMessageBodyCreator from "../../../redux/reducers/dialogsReducer"
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
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator())
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
