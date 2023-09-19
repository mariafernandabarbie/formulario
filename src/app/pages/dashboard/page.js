import ListUsers from "@/app/components/ListUser";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import './globals.css'
export default async function Dashboard(){
const users = await getUsers();
return(
<div className="flex-1 p-6">
    <h1 className="text-3xl font-semibold mb-6">Usuários</h1>
    <div className="bg-[#db2777] rounded-lg shadow-md p-4">
<Suspense fallback={<h1 className="text-center">Loading...</h1>}>
<ListUsers users={users}/>

</Suspense>

    </div>
</div>


)

}
