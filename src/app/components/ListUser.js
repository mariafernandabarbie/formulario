
export default async function ListUsers({users}) {
  await new Promise((resolve) => setTimeout(resolve,3000))
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