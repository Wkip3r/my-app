import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode:false,
        status: this.props.status
    }

    toggleEditMode = (e) => {
        this.setState({
            editMode: !this.state.editMode
        })
        // if (this.state.editMode){
        //     this.props.updateStatus(this.state.status)s
        // }

    }

    changeStatusText = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.toggleEditMode}
                            value={this.state.status}
                            onChange={this.changeStatusText}
                            />
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.toggleEditMode} >{this.state.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus