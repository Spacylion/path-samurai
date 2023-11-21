import React from "react"
import {connect} from "react-redux"
import Header, {DispatchPropsType, MapPropsType} from "./Header"
import {logout} from "../../app/providers/reducers/authReducer"
import {AppStateType} from "../../app/providers/reducers/rootReducer";

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})
(HeaderContainer)
