import React from "react";
import './UsersList.css'

function UsersList(props){

    let usersList = props.usersList;

    let usersliElement = usersList.map((user) => {
        return <li key={user.id}>{user.name} <span onClick={()=>props.removeUserMethod(user.id)}>X</span></li>

    })

    return(
        <ul className="the-list">
                {usersliElement}
                </ul>
    )

}
export default UsersList;