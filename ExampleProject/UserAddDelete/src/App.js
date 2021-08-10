import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from "./components/Users/UsersList";

function App() {
    const [userList,setUserList] = useState([]);
    const randomId = () => {
        return Math.floor(Math.random() * 4000);
    }
    const addUserHandler = (username,uAge) => {
        setUserList((prevUsersList) => {
            return [...prevUsersList,{name: username,age: uAge, id: randomId().toString()}]
        })
    }
    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={userList}/>
        </div>
    );
}

export default App;
