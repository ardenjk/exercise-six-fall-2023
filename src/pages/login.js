import { useEffect} from "react";
import { useRouter } from "next/router";
import LoginForm from "@/app/components/LoginForm";

export default function Login ({isLoggedIn, loginUser}) {
    const router = useRouter();
    
    useEffect(() => {
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn]);


    //If user IS logged in, forward them to the profile page 
    return (
        <>
        <main>
            <h1>Login</h1>
            <LoginForm loginUser={loginUser} />
        </main>
        </>
    );
}