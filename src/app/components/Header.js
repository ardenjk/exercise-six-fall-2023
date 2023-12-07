import Link from "next/link";
import styles from "./components.module.css"

const Header = ({isLoggedIn, logoutUSer}) => {
    return (
        <header className = {styles.Header}>
            <nav className={styles.HeaderNav}>
                {isLoggedIn && (
                    <>
                    <Link href = "/"> User Profile | </Link>
                    <a onClick = {logoutUser}> Log out </a>     
                    </>
                )}
                {!isLoggedIn && (
                    <>
                    <Link href = "/login"> Login | </Link>
                    <Link href = "/createUser"> Create User </Link>
                    </>
                )}
                {/* <Link href = "/"> User Profile | </Link>
                <Link href = "/"> Login | </Link>
                <Link href = "/"> Create User </Link>
                <a onClick = {logoutUser}> Log out </a> */}
            </nav>
        </header>
    );
};

export default Header;
