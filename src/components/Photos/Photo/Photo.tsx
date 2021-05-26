import React from "react";


const Photo: React.FC<PropsType> = (props) => {
    return (
        <div>
            <img src={props.url} />
        </div>
    )
}

type PropsType = {
    url: string
}

export default Photo