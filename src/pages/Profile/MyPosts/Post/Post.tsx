import React from "react"
import s from "./Post.module.css"
import {Card} from "antd";

const Post = (props) => {
    return (

        <Card>
            <img className={s.post__image}
                 src='https://assets.materialup.com/uploads/30080ad4-97ee-47f7-a98a-c0d2e8d704b2/preview'
                 alt=''
            />
            <div className={`${s.content__post} ${s.active}`}>
                {props.message}
                <div><span>like: </span> {props.likesCount}
                </div>
            </div>
        </Card>

    )
}
export default Post
