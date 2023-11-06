import { Field, reduxForm } from "redux-form"
import s from "./MyPosts.module.css"
import { maxLengthCreator, requiredField } from "../../../../utils/validators" // Импортируйте функцию requiredField
import { Textarea } from "../../../../Features/FormsControls/FromsControls"

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>
        <Field
          name='newPostText'
          component={Textarea}
          validate={[requiredField, maxLength10]}
          placeholder='Post message'
        />
      </div>
      <div>
        <button className={`${s.content__button} ${s.add}`}>Add post</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({ form: "post" })(PostForm)

export default PostReduxForm
