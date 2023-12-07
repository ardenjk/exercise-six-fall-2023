import styles from './components.module.css';


const UserProfileCard = ({user}) => {
    return (
        <div className = {styles.UserProfileCard}>
            <h2>Name: {user?.name}</h2>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default UserProfileCard;

//by putting the ? lets you have unknown values coming in, you can have a user or not have a user