import { reduxForm } from "redux-form"
import { Input, createField } from "@/features/forms-controls/FormsControls"
import s from "./LoginForm.module.css"

const LoginForm = ({ handleSubmit, error, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        autoComplete: "current-password",
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
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
