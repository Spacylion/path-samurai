import { Field, reduxForm } from "redux-form"
import { Input } from "../../../../Features/FormsControls/FormsControls"
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../../../utils/validators"
import s from "./LoginForm.module.css"
const maxLength20 = maxLengthCreator(20)
const minLength20 = minLengthCreator(3)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>
        <Field
          name={"email"}
          placeholder={"Login"}
          component={Input}
          validate={[maxLength20, minLength20]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"Password"}
          autoComplete='current-password'
          type='password'
          component={Input}
          validate={[maxLength20, minLength20]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type='checkbox' component={Input} />
        remember me
      </div>
      {props.error && (
        <div className={s.form__summery__error}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

export default LoginReduxForm
