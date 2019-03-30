import React from 'react'

const Personal = ({user}) => {
    return (
        <div>
            <h2>Personal info: </h2>
            <div>
                Name: {user.firstName} {user.lastName}
            </div>
            <div>
                Joined: {user.memberSince}
            </div>
            <div>
                Bonus points: {user.bonusPoints}
            </div>
            <button>Logout</button>
        </div>
    )
}

const buttonStyle = () => {

}

export default Personal