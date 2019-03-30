import React from 'react';
import './App.css';
import loginService from './tools/login'
import Login from './components/Login'
import Personal from './components/Personal'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            user: null,
            loggedIn: false
        }
    }

    login = async (event) => {
        event.preventDefault()
        //this.setState({loggedIn: true})
        try {
            const user = await loginService.login({
                username: this.state.username,
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

    handleLoginFieldChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    hello = (props) => {
        console.log('hello called')
        const isIn = props
        console.log(props.loggedIn)
        if (isIn) {
            return new Personal({name: 'nimi', joinDate: 1111})
        } else {
            return (
            <div>
                This might take you somewhere...
                <Login username={this.state.username}
                          password={this.state.password}
                          handleChange={this.handleLoginFieldChange}
                          handleSubmit={this.login}
            />
            </div>
            )
        }
    }


    render() {
        console.log('render called')
        return (
            <div className="App">
                <header className="App-header">
                    {this.hello(this.state.loggedIn)}
                </header>
            </div>
        );
    }
}

export default App;
