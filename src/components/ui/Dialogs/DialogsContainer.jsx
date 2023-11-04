import { connect } from "react-redux"
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/reducers/dialogsReducer"
import Dialogs from "./Dialogs"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"
// react- redux
// настраивает свойства которые передадутся в дочерние к
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
