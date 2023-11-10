import { reduxForm } from "redux-form"
import { Input, createField } from "@/features/forms-controls/FormsControls"
import { maxLengthCreator, minLengthCreator } from "@/features/input-validators"
import s from "./LoginForm.module.css"
const maxLength20 = maxLengthCreator(20)
const minLength20 = minLengthCreator(3)

const LoginForm = ({ handleSubmit, error, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {createField("email", "Login", Input, [maxLength20, minLength20])}
      {createField("password", "Password", Input, [maxLength20, minLength20], {
        autoComplete: "current-password",
        type: "password",
      })}
      {createField(
        "rememberMe",
        null,
        Input,
        [],
        { type: "checkbox" },
        "remember me"
      )}
      {error && <div className={s.form__summery__error}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

export default LoginReduxForm
