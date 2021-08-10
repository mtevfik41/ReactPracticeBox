import React from "react";

const User = props => {

    return (
        <li key={props.id}>
            <p>{props.children}</p>
        </li>
    )
}

export default User;