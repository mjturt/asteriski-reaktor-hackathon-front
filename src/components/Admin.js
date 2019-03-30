import admintools from '../tools/admintools'
import React from 'react'

class Admin extends React.Component {
    constructor(user) {
        super()
        this.state = {
            name: user.firstName + ' ' + user.lastName,
            memberSince: user.memberSince,
            token: user.token,
            userData: ''
        }

        return (
            <div>
                <button onClick={this.fetchData}>click me</button>
            </div>
        )
    }

    fetchData = () => {
        admintools.setToken(this.state.token)
        this.setState({userData: admintools.fetchAll()})
        return (

            <div>
                <div>
                    Name: {this.state.name}
                </div>
                <div>
                    Slave since: {this.state.memberSince}
                </div>
                {this.state.userData}
            </div>
        )
    }

}

