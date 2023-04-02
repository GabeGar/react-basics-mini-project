import Card from "../UI/Card/Card";
import UserSessionsItem from "./UserSessionsItem";
import styles from "./UserSessionsList.module.css";

const UserSessionsList = (props) => {
    let currentUsers = props.users.map((user) => {
        return (
            <UserSessionsItem
                username={user.username}
                age={user.age}
                key={user.id}
            />
        );
    });

    return (
        <Card>
            <ul className={styles["user-list"]}>{currentUsers}</ul>
        </Card>
    );
};

export default UserSessionsList;
