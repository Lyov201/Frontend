import { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "./type";
import { AddUser } from "./Components/AddUser";
import { UserList } from "./Components/UserList";

export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get<User[]>("http://localhost:3000/users")
            .then((response) => {
                setUsers(response.data);
            });
    }, []);

    const addUser = async (
        user: Omit<User, "id">
    ) => {
        const nextId = users.length + 1;

        const newUser: User = {
            id: nextId,
            ...user
        };

        const response = await axios.post<User>(
            "http://localhost:3000/users",
            newUser
        );

        setUsers((prevUsers) => [...prevUsers, response.data]);
    };

    return (
        <>
            <AddUser onAddUser={addUser} />
            <UserList users={users} />
        </>
    );
}