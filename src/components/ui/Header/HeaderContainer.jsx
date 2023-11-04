import { connect } from "react-redux"
import Header from "./Header"
import React from "react"
import { getAuthUserData } from "../../../redux/reducers/authReducer"

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
