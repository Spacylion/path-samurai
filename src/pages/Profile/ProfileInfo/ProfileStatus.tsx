import React, {ChangeEvent} from "react"
import s from "./ProfileInfo.module.css"

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        };
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        const {status} = this.state;
        this.setState({
            editMode: false
        })
        this.props.updateStatus(status); // Pass the status before changing editMode
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div className={s.container}>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div className={s.container}>
                        <input
                            onBlur={this.deactivateEditMode}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default ProfileStatus
