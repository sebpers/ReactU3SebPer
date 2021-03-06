import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Handles user list - Render each user in the list
class UserListComponent extends Component {

  constructor(props) {
    super(props);
    this.toggleUserColor = this.toggleUserColor.bind(this);
    this.state = {
      color: true,
      toggleUser: true
    }
  }

  // Set state.color to True or False
  toggleUserColor() {
    this.setState({color: !this.state.color});
  }

  // Toggle active button to see if user is active or inactive. True / false
  toggleActive = () => {
    this.setState({toggleUser: !this.state.toggleUser})
  }

  userListStyle = {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    width: 250,
    height: 230,
    overflowY: 'auto',
    margin: '0 auto'
  }

  ulStyle = {
    listStyleType: 'none'
  }

  liStyle = {
    width: '95%',
    border: '1px solid lightgrey',
    padding: 5,
    margin: '5px auto'
  }

  buttonStyle = {
    backgroundColor: '#20a5ac',
    width: 200,
    padding: 7,
    color: 'whitesmoke',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    border: 'none'
  }

  divStyle = {
    height: '700px'
  }

  /* Puts each user from App.js to a new array as a list item */
  /* Render each user in a unordered list */
  /* Show active and inactive userId depending on isActive is true or false */
  render() {
    const newUserList = this.props.newListFromApp.map((user, i) => {

        return (
          <Link className={this.state.color ? "blackColor" : "orangeColor" } key={i} to={`/user/${user.id}`}>
            <li key={i} style={this.liStyle}>
              {user.name}
            </li>
          </Link>
        )
    });

    return (
      <div>
        <div style={this.userListStyle}>
          <ul style={this.ulStyle}>
            {this.state.toggleUser ? newUserList : newUserList}
          </ul>
        </div>

        {/* Call on function toggleUserColor to change state.color to true / false */}
        <button onClick={this.toggleUserColor} style={this.buttonStyle}>
          Toggle Color
        </button>
      </div>
    )
  }
}

export default UserListComponent

UserListComponent.propTypes = {
  newListFromApp: PropTypes.array
}
