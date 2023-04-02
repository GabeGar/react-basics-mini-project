import styles from "./UserSessionsItem.module.css";

const UserSessionsItem = (props) => {
    return (
        <li className={styles["list-item"]}>
            {`${props.username} (${props.age} years old)`}
        </li>
    );
};

export default UserSessionsItem;
