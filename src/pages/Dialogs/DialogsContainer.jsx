import { connect } from "react-redux"
import { sendMessageCreator } from "../../app/redux/reducers/dialogsReducer"
import Dialogs from "./Dialogs"
import { compose } from "redux"

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
// настраивает колбеки которые в презентационные компоненты пойдет
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  // withAuthRedirect
)(Dialogs)
