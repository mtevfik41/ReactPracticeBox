import React from "react";

import Card from "../UI/Card";
import User from "./User";
import classes from './UsersList.module.css'

const UsersList = props => {

    return (
        <Card className={classes.userList}>
            <ul>
                {props.users.map(user => <User key={user.id}>{user.name} ({user.age} years old)</User>)}
            </ul>
        </Card>

    )
}

export default UsersList;