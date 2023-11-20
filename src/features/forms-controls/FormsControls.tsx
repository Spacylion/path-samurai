import React from "react"
import {Field, WrappedFieldProps} from "redux-form"
import s from "./FromsControls.module.css"
import {FieldValidatorType} from "../input-validators/validators";

type FormControlPropsType = {
    meta: {
        touched: boolean
        error: string
    }
}
const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (<div className={s.form__control + " " + (hasError ? s.error : "")}>
        <div>{children} < /div>
        {
            hasError && <span>{error} < /span>}
    < /div>)
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props} >
            <textarea {...input} {...restProps}/>
        < /FormControl>)
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return (<FormControl {...props} >
        <input {...input} {...restProps} />
    < /FormControl>)
}

export function createField<FormKeysType extends string>
(placeholder: string | undefined,
 name: FormKeysType,
 validators: Array<FieldValidatorType>,
 component: React.FC<WrappedFieldProps>,
 props = {},
 text = "") {
    return <div>
        <Field name={name}
               placeholder={placeholder}
               component={component} validate={validators}
               {...props}/>
        {text}
    </div>
}
