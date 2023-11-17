import React from "react"

import {Component} from "react"
import {connect} from "react-redux"
import Header from "./Header"
import {logout} from "../../app/providers/reducers/authReducer.ts"

class HeaderContainer extends Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logout})(HeaderContainer)
