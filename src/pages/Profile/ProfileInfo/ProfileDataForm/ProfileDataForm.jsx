import { createField } from "@/features/forms-controls/FormsControls"
import { Input } from "@/features/forms-controls/FormsControls"
import { reduxForm } from "redux-form"
import s from "./ProfileDataForm.module.css"

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={s.form__summery__error}>{error}</div>}

      <div>
        <b>Full name:</b>
        {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        Looking for a job:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills: </b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          TextArea
        )}
      </div>
      <div>
        <b>About me:</b>
        {createField("About me", "aboutMe", [], TextArea)}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}:{createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          )
        })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
)

export default ProfileDataFormReduxForm
