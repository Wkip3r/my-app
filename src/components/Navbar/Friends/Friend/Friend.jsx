import s from './Friend.module.css'

const Friend = (props) => {
    return (
            <div className={s.friendItem}>
                <div className={s.ava}/>
                {props.name}
            </div>
          )
}

export default Friend