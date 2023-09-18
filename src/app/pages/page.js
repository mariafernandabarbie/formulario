import ListUser from "../components/ListUser";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard(){
const users = await getUsers();
return(
<div className="flex-1 p-6">
    <h1 className="text-3xl font-semibold mb-6">Usuários</h1>
    <div className="bg-white rounded-lg shadow-md p-4">
<Suspense fallback={<div className="text-center"><svg className=""></svg></div>}>
<ListUsers users={users}/>

</Suspense>

    </div>
</div>


)

}
