import React, { Component } from 'react';

class Status extends Component {
    state = {
        modeEdit: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    activateModeEdit = () => {
        if(this.props.isMe){
            this.setState({
                modeEdit: true,
            })
        }
    }
    deactivateEditMode = () => {
        this.setState({
            modeEdit: false,
        })
        this.props.setStatus(this.state.status)
    }
    changeStatus = (event) => {
        this.setState({
            status: event.currentTarget.value,
        })
    }
    render() {
        return (
            <div>
                { !this.state.modeEdit 
                ? <span onClick={this.activateModeEdit} >{this.props.status ? this.props.status : "no status" }</span> 
                : <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.changeStatus} value={this.props.status ? this.props.status : "no status"} />}
            </div>
        );
    }
}

export default Status;