import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div>
            My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post login='Ivan' message='Hi, how are you?' />
                <Post login="Petr" message='It my first post' />
            </div>
        </div>
    )
}

export default MyPosts