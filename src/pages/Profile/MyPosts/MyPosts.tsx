import React, {memo} from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import AddNewPostFormRedux from "./PostForm"
import {Card, Col, Flex, Row} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const MyPosts = memo((props) => {
    let postsElements = [...props.posts]
        .reverse()
        .map((p) => (
            <Card title={p.id} bordered={false} style={{width: 300}}>
                <Post message={p.message} likeCount={p.likesCount}/>
            </Card>
        ))
    const newPostElement = React.createRef()
    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <Flex>
            <div className={s.content__item}>
                <h3>My posts</h3>
                <div className={s.content__new__profile}>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
            </div>
            <Card>
                <Row>
                    <Col span={24}>
                        {postsElements}
                    </Col>
                </Row>
            </Card>
        </Flex>
    )
})
MyPosts.displayName = "MyPosts"

export default MyPosts
