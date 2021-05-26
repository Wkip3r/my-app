import s from "../Profile.module.css";
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus.jsx"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import {Field, Fields, reduxForm, reset} from "redux-form";
import * as React from "react";


const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    const changeMainInfo = (info) => {
        const mainInfo = {
            userId: props.id,
            lookingForAJob: info.lookingForAJob,
            lookingForAJobDescription: info.lookingForAJobDescription,
            fullName: info.fullName,
            AboutMe:"hey hey",
            contacts: {
                github: info.contacts.github,
                vk: info.contacts.vk,
                facebook: info.contacts.facebook,
                instagram: info.contacts.instagram,
                twitter: info.contacts.twitter,
                website: info.contacts.website,
                youtube: info.contacts.youtube,
                mainLink: info.contacts.mainLink
            }
        }
        props.setProfile(mainInfo)
        changeEditMode()
    }


    return (
        <div>
            <div className={s.profileInfo}>
                <img className={s.profileImg}
                     src={props.profile.photos && props.profile.photos.large ? props.profile.photos.large : "https://sun9-19.userapi.com/impf/c622523/v622523405/2542/hZW1zW5E7xI.jpg?size=200x200&quality=96&proxy=1&sign=6ecf0621f6394a3222b0338b9d7b053c&c_uniq_tag=qgOpCALziX5s1lQJ37xgr7QMlegQvgSUoXcVZY8x00s&type=album"}/>
                {props.isOwner && <input type="file" onChange={mainPhotoSelected}
                />}
                <ProfileStatusWithHooks status={props.status}
                                        isEditStatus={props.isEditStatus}
                                        editStatus={props.editStatus}
                                        updateStatus={props.updateStatus}
                />
                {editMode ? <NewProfileDataReduxForm profile={props.profile} onSubmit={changeMainInfo}/> :
                    <div>
                        <ProfileData profile={props.profile}/>
                        <button onClick={changeEditMode}>Изменить данные</button>
                    </div>
                }
            </div>
        </div>
    )
}

const ProfileData = (props) => {

    const contacts = Object.keys(props.profile.contacts)

    return (
        <div>
            <div className={s.fullName}>{props.profile.fullName}</div>
            <div className={s.jobSearch}>looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
            <div
                className={s.lookingForAJobDescription}>jobDsecription: {props.profile.lookingForAJobDescription}</div>
            <div className={s.contacts}>Contacts:
                {contacts.map(c => <li>{c}:{props.profile.contacts[c]}</li>)}
            </div>
        </div>
    )
}

const NewProfileData = (props) => {
    const contacts = Object.keys(props.profile.contacts)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                Full name: <Field component={"input"} name={"fullName"} placeholder={"Enter new full name"}/>
            </div>
            <div>
                Looking for a job: <Field component={"input"} type={"checkbox"} name={"lookingForAJob"}
                                          placeholder={"switchJobSearch"}/>
            </div>
            <div>
                Job description: <Field component={"textarea"} name={"lookingForAJobDescription"}
                                        placeholder={"skill description"}/>
            </div>
            <div>
                {contacts.map(c => <li>{c}: <Field component={"input"} name={"contacts." + c}
                                                   placeholder={"edit " + c + " contact"}/></li>)}
            </div>
            <button>Сохранить изменения</button>
        </form>
    )
}

const afterSubmit = (result, dispatch) => dispatch(reset('newMainInfo'));

const NewProfileDataReduxForm = reduxForm({
    form: 'newMainInfo',
    onSubmitSuccess: afterSubmit
})(NewProfileData)


export default ProfileInfo