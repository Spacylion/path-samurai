import { Field, reduxForm } from "redux-form"
import { Input } from "../../../../Features/FormsControls/FromsControls"
import {
  maxLengthCreator,
  minLengthCreator,
} from "../../../../utils/validators"

const maxLength20 = maxLengthCreator(20)
const minLength20 = minLengthCreator(3)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={Input}
          validate={[maxLength20, minLength20]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[maxLength20, minLength20]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type='checkbox' component={Input} />
        remember me
      </div>
      <div>
        <Field placeholder={"Captcha"} name={"captcha"} component={Input} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

export default LoginReduxForm
