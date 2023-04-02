import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserSessionsList from "./components/UserSessions/UserSessionsList";

const App = (props) => {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (newUser) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, newUser];
        });
    };

    return (
        <div>
            <UserForm onAddUser={addUserHandler} />
            {usersList.length > 0 && <UserSessionsList users={usersList} />}
        </div>
    );
};

export default App;
