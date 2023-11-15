import { reduxForm } from "redux-form"
import { Input, createField } from "@/features/forms-controls/FormsControls"
import s from "./LoginForm.module.css"
import { requiredField } from "../../../features/input-validators"

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [requiredField], Input, {
        autoComplete: "username",
      })}
      {createField("Password", "password", [requiredField], Input, {
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
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField(
          "Symbols from image",
          "captcha",
          [requiredField],
          Input,
          {}
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
