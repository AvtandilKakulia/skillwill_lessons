import React from 'react'

const UserItem = ({ id, name, removeUser }) => {
    return (
        <div className="user-item">
            <p> ID: {id} </p>
            <p> Name: {name} </p>
            <button onClick={() => removeUser(id)}>Remove</button>
        </div>
    )
}

export default UserItem