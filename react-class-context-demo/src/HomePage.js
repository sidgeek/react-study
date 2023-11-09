import React, { Component } from 'react'
import UserContext from './UserContext'
export default class HomePage extends Component {
  static contextType = UserContext

  render() {
    const { user, setUser } = this.context
    return (
      <div>
        <button
          onClick={() => {
            const newUser = { name: 'Joe', loggedIn: true }
            setUser(newUser)
          }}
        >
          Update User
        </button>
        <div>{`Current User: ${user.name}`}</div>
      </div>
    )
  }
}

// HomePage.contextType = UserContext;  使用这种写法或者 static contextType = UserContext 都可以
