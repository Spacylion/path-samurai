import React from "react"
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../../features/forms-controls/FormsControls"
import {maxLengthCreator, required,} from "../../../features/input-validators/validators"

const maxLength10 = maxLengthCreator(30)
// import s from "./DialogsForm.module.css"
const DialogsForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder='Enter message'
                name='newMessageBody'
                component={Textarea}
                validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button type='submit'>Отправить</button>
        </div>
    </form>
)

const DialogsReduxForm = reduxForm({form: "message"})(DialogsForm)

export default DialogsReduxForm
