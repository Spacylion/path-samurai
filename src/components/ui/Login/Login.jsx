import LoginReduxForm from "./LoginForm/LoginForm"

const Login = () => {
  const onSubmit = (values) => {
    console.log(values.login)
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Login
