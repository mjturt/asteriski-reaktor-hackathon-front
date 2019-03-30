import React from 'react'
import PropTypes from 'prop-types'

const Login = ({handleSubmit, handleChange, username, password, handleAdmin, isAdmin}) => {
    return (
        <div>
            <h1>Node.js React Customer Register App</h1>
                    <p>Asteriski and Reaktor hackathon 2019</p>
                    <div class="jumbotron">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Username:
                    <input class="form-control"
                        value={username}
                        onChange={handleChange}
                        name="email"
                    />
                </div>
                <div>
                    Password:
                    <input class="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" class="btn">Enter the void</button>
                {isAdmin &&
                <button type="button" onClick={handleAdmin} style={buttonStyle}>Return to user login</button>
                }
                {!isAdmin &&
                <button type="button" onClick={handleAdmin} style={buttonStyle}>Admin login here</button>
                }

            </form>
        </div>
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
