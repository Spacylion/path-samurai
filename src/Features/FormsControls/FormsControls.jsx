import s from "./FromsControls.module.css"

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div
      className={hasError ? s.form__control + " " + s.error : s.form__control}
    >
      <div>
        <textarea {...input} {...props} />
        {hasError && <span>{"some error"}</span>}
      </div>
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div
      className={hasError ? s.form__control + " " + s.error : s.form__control}
    >
      <div>
        <input {...input} {...props} />
        {hasError && <span>{"some error"}</span>}
      </div>
    </div>
  )
}
