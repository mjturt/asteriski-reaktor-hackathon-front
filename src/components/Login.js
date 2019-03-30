import React from 'react'
import PropTypes from 'prop-types'

const Login = ({handleSubmit, handleChange, username, password, handleAdmin}) => {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Username:
                    <input
                        value={username}
                        onChange={handleChange}
                        name="email"
                    />
                </div>
                <div>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleAdmin} style={buttonStyle}>Admin login here</button>
                <button type="submit">Enter the void</button>
            </form>
        </div>
    )
}
const buttonStyle = {
    background: 'none',
    color: 'inherit',
    padding: '0!important',
    font: 'inherit',
    fontWeight: '800',
    border: 'none'
}

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default Login