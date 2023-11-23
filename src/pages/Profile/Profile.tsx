import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import {Col, Row} from "antd";

const Profile = (props) => {
    return (
        <Row>
            <Col span={4}>
                <ProfileInfo
                    savePhoto={props.savePhoto}
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    saveProfile={props.saveProfile}
                    updateStatus={props.updateStatus}
                />
            </Col>
            <Col span={20}>
                <MyPostsContainer/>
            </Col>
        </Row>


    )
}

export default Profile
