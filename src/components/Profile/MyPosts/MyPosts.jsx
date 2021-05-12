import s from './MyPosts.module.css'
import Post from './Post/Post'
import * as React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

class MyPosts extends React.Component {

    addPost = (formData) => {
        this.props.addPost(formData.newPostText)
    }

    render() {
        let postElements = this.props.state.postsData.map((item, index) =>
            <Post key={index} message={item.message} likesCount={item.likesCount} />
        )

        return (
            <div className={s.myPosts}>
                <NewPostElementReduxForm onSubmit={this.addPost} />
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        )
    }
}

const NewPostElement = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Element("textarea")} name={"newPostText"} placeholder={"Enter new post text"} validate={[required,maxLength10]} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) => dispatch(reset('newPostText'));

const NewPostElementReduxForm = reduxForm({
    form: 'newPostText',
    onSubmitSuccess: afterSubmit
})(NewPostElement)


export default MyPosts