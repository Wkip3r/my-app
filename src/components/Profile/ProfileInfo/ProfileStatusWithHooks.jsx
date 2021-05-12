import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(!editMode)

        if(editMode) props.updateStatus(status)
    }

    const changeStatusText = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input
                        autoFocus={true}
                        onBlur={activateMode}
                        value={status}
                        onChange={changeStatusText}
                    />
                </div>
                :
                <div>
                    <span onDoubleClick={activateMode}>{props.status}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks