import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const users = await getUsers();

    return (
        <div>
    {users?.map((user, index) =>
    <h1 key={index}>
        {user.name} <br/>
        {user.email}

    </h1>
    
    )}            
        </div>
    );
};