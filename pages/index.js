import Header from "@app/components/Header";
import UserProfileCard from "@/app/components/UserProfileCard";

export default function UserProfile () {
    return (
        <>
        <Header />
        <main>
            <h1>UserProfile</h1>
            <UserProfileCard />
        </main>
        </>
    );
}