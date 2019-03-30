import React from 'react';
import './App.css';
import loginService from './tools/login'
import Login from './components/Login'
import Personal from './components/Personal'
import Register from './components/Register'
import reghelper from './tools/newuser'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            register: false,
            email: '',
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            user: null,
            loggedIn: false,
            admin: false
        }
    }

    componentDidMount() {
        const loggedUserJSON = window.localStorage.getItem('authedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            this.setState({user})

        }
    }

    login = async (event) => {
        event.preventDefault()

        if (this.state.admin) {
            try {
                const user = await loginService.loginAdmin({
                    privateEmail: this.state.email,
                    password: this.state.password
                })
                window.localStorage.setItem('authedUser', JSON.stringify(user))
                this.setState({username: '', password: '', user, loggedIn: true})
            } catch (exception) {
                this.setState({
                    error: 'sumthin went wrong'
                })
                setTimeout(() => {
                    this.setState({error: null})
                }, 5000)
            }
        } else {
            try {
                const user = await loginService.login({
                    email: this.state.email,
                    password: this.state.password
                })
                window.localStorage.setItem('auhtedUser', JSON.stringify(user))
                this.setState({username: '', password: '', user, loggedIn: true})
            } catch (exception) {
                this.setState({
                    error: 'käyttäjätunnus tai salasana virheellinen',
                })
                setTimeout(() => {
                    this.setState({error: null})
                }, 5000)
            }
        }


    }

    handleLoginFieldChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleRegisterButton = (event) => {
        this.setState({register: true})
    }

    registerNew = async (event) => {
        event.preventDefault()

        try {
            console.log(this.state)
            console.log('Date now: ' + Date.now())
            const user = await reghelper.register({
                idx: Math.floor(Math.random() * 100000000),
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                bonuspoints: 0,
                memberSince: Date.now()
            })
        } catch (exception) {
            this.setState({
                error: 'something went wrong'
            })
            setTimeout(() => {
                this.setState({error: null})
            }, 5000)
        }
    }


    stateHandler = (status, reg) => {
        const isIn = status
        const signUp = reg
        if (signUp) {
            return <Register fname={this.state.firstName}
                             lname={this.state.lastName}
                             email={this.state.email}
                             password={this.state.password}
                             uname={this.state.username}
                             handleChange={this.handleLoginFieldChange}
                             handleSubmit={this.registerNew}

            />
        }
        if (isIn) {
            console.log(this.state.firstName)
            return <Personal
                user={this.state.user}
            />
        } else {
            return (
                <div>
                    <div>
                        <Login username={this.state.email}
                               password={this.state.password}
                               handleChange={this.handleLoginFieldChange}
                               handleSubmit={this.login}
                               handleAdmin={this.toggleAdmin}
                               isAdmin={this.state.admin}
                        />
                    </div>
                    {!this.state.admin &&
                    <div>
                        If you instead want to sign up, click
                        <button
                            type="button"
                            style={buttonStyle}
                            onClick={this.handleRegisterButton}
                        >here
                        </button>
                    </div>
                    }
                </div>
            )
        }
    }

    toggleAdmin = () => {
        this.setState({admin: !this.state.admin})
    }

    render() {
        console.log('render called')
        return (
            <div className="App">
                <header className="App-header">
                    {this.stateHandler(this.state.loggedIn, this.state.register)}
                </header>
            </div>
        );
    }
}

const buttonStyle = {
    background: 'none',
    color: 'inherit',
    padding: '0!important',
    font: 'inherit',
    fontWeight: '800',
    border: 'none'
}

export default App;
