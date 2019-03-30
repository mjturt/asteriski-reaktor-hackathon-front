import React from 'react'

class Personal extends React.Component{
    constructor(userInfo) {
        super()
        this.state = {
            userInfo: {
                name: userInfo.name,
                joinDate: userInfo.joinDate,
            }
        }
        return (
            <div>
                <label>Name: </label>{this.state.userInfo.name}
                <div>
                    <label>Joined: </label>{this.state.userInfo.joinDate}
                </div>
            </div>
        )
    }

}

export default Personal