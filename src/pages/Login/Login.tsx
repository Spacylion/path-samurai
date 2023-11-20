import React from "react"
import {connect} from "react-redux"
import LoginReduxForm from "./LoginForm/LoginForm"
import {login} from "../../app/providers/reducers/authReducer.ts"
import {Navigate} from "react-router-dom"
import {AppStateType} from "../../app/providers/reducers/rootReducer";
import {LoginFormValuesType} from "../../features/forms-controls/FormsControls";

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string,
            password: string,
            rememberMe: boolean,
            captcha: string) => void
}

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }
    return (
        <div>
            <h1>Login</h1>
            <div>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login})(Login)
