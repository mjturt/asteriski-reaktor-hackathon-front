import React from 'react'
import register from '../tools/newuser'

const Register = ({fname, lname, email, password, uname, handleChange, handleSubmit}) => {

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    First name:
                    <input
                        name="firstName"
                        value={fname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Last name:
                    <input
                        name="lastName"
                        value={lname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Email:
                    <input
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
        )

}

export default Register