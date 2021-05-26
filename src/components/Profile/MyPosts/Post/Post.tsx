import s from './Post.module.css'

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className = {s.item}>
                <img src="https://www.vokrug.tv/pic/product/1/9/6/b/196b75624f01724678dad79fab82b6fa.jpeg" />
                {props.message}
                <div>
                    <span>{props.likesCount}</span>
                </div>             
        </div>
    )
}

type PropsType = {
    message: string
    likesCount: string
}

export default Post