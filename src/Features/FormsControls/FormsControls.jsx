import { Field } from "redux-form"
import s from "./FromsControls.module.css"

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error
  return (
    <div className={s.form__control + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (
  name,
  placeholder,
  component,
  validate,
  props = {},
  text = ""
) => (
  <div>
    <Field
      name={name}
      placeholder={placeholder}
      component={component}
      validate={validate}
      {...props}
    />
    {text}
  </div>
)
