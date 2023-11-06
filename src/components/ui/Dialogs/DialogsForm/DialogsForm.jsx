import { Field, reduxForm } from "redux-form"
import { Textarea } from "../../../../Features/FormsControls/FormsControls"
import { maxLengthCreator, requiredField } from "../../../../utils/validators"

const maxLength10 = maxLengthCreator(30)

// import s from "./DialogsForm.module.css"
const DialogsForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field
        placeholder='Enter message'
        name='newMessageBody'
        component={Textarea}
        validate={[requiredField, maxLength10]}
      />
    </div>
    <div>
      <button type='submit'>Отправить</button>
    </div>
  </form>
)

const DialogsReduxForm = reduxForm({ form: "message" })(DialogsForm)

export default DialogsReduxForm
