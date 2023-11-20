import React from "react"
import {Field, reduxForm} from "redux-form"
import s from "./MyPosts.module.css"
import {Textarea} from "@/features/forms-controls/FormsControls"
import {required} from "../../../features/input-validators/validators";
import {maxLengthCreator} from "../../../features/forms-controls";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <div>
                <Field
                    name='newPostText'
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder='Post message'
                />
            </div>
            <div>
                <button className={`${s.content__button} ${s.add}`}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(
    PostForm
)

export default AddNewPostFormRedux
