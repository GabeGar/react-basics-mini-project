import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modals/ErrorModal";

import styles from "./UserForm.module.css";

const UserForm = (props) => {
    const [enteredUsername, setUserName] = useState("");
    const [enteredAge, setAge] = useState("");
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    // * Validation checks will occur, here.
    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || !enteredAge) {
            setError({
                title: "Invalid Input",
                message: "The Username or Age field, was left blank.",
            });
            return;
        }

        if (parseInt(enteredAge) < 0 || parseInt(enteredAge) > 130) {
            setError({
                title: "Invalid Age",
                message: "Please enter a number between 0 and 130.",
            });
            return;
        }

        const newUser = {
            username: enteredUsername,
            age: enteredAge,
            id: Math.random().toString(),
        };

        props.onAddUser(newUser);

        setUserName("");
        setAge("");
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card>
                <form onSubmit={formSubmitHandler}>
                    <div className={styles["form-controls"]}>
                        <div className={styles["form-control"]}>
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                onChange={usernameChangeHandler}
                                value={enteredUsername}
                            />
                        </div>
                        <div className={styles["form-control"]}>
                            <label htmlFor="age">Age (Years)</label>
                            <input
                                id="age"
                                type="number"
                                step={1}
                                value={enteredAge}
                                onChange={ageChangeHandler}
                            />
                        </div>
                        <div className={styles["form-control"]}>
                            <Button type="submit">Add User</Button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default UserForm;
