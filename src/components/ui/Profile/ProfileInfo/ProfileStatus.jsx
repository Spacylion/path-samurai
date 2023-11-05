import React from "react"
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
    updateStatus: this.props.updateStatus,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status) // Передайте текущий статус
  }

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps, prevState) {
    // this.state
    // this.props
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
