import React from "react"
import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, Input} from "@/features/forms-controls/FormsControls"
import {required} from "../../../features/input-validators/validators";
import {LoginFormValuesType} from "../../../features/forms-controls/FormsControls";

type LoginFormOwnType = {
    captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesType>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesType>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormValuesType>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesType>('Symbols from image', 'captcha', [required], Input, {})}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnType>
({form: "login"})(LoginForm)

export default LoginReduxForm
