import s from './MyPosts.module.css'
import Post from './Post/Post'
import * as React from "react";


const MyPosts = (props) => {
    let postElements = props.state.postsData.map((item, index) => <Post key={index} message={item.message}
                                                                  likesCount={item.likesCount}/>)

    let newPostElement = React.createRef();


    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    return (
        <div className={s.myPosts}>
            <div>
                My posts
            </div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts