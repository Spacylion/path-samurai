import { connect } from "react-redux"
import LoginReduxForm from "./LoginForm/LoginForm"
import { login } from "../../app/redux/reducers/authReducer"
import { Navigate } from "react-router-dom"

const Login = (props) => {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to='/profile' />
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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
