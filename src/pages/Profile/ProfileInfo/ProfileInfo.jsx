import React, {useState} from "react"
import Preloader from "@/features/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "@/app/assets/avatar.png"
import ProfileDataFormReduxForm from "./ProfileDataForm/ProfileDataForm"
import {Button, Flex, FloatButton} from "antd";

const ProfileInfo = ({
                         profile,
                         status,
                         updateStatus,
                         isOwner,
                         savePhoto,
                         saveProfile,
                     }) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.content__profile}>
            <img
                className={s.avatar}
                src={profile.photos.large || userPhoto}
                alt=''
            />
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>
            }
            {editMode ? (
                <ProfileDataFormReduxForm
                    initialValues={profile}
                    profile={profile}
                    onSubmit={onSubmit}
                />
            ) : (
                <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => {
                        setEditMode(true)
                    }}
                />
            )}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <Button onClick={goToEditMode}>Edit</Button>
                </div>
            )}

            <div>
                <b> Full name:</b> {profile.fullName}
            </div>
            <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob && (
                <div>
                    <b>Professional skills: </b>
                    {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}

export default ProfileInfo
