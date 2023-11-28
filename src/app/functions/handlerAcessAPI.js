'use server'


const url="https://aula-17-10-lemon.vercel.app";

const getUserAuthenticated = async (user) => { 
   
   const responseOfApi = await fetch(url + "/user/authenticate",
    
   {
      method:'POST',
      headers:{"content-type": "aplication/json"},
      body: JSON.stringify(user)
    }

   );
   const userAuth = await responseOfApi.json();
   return userAuth;
    
 }
 
 const getUsers = async () =>{
  const responseOfApi = await fetch(url + "/users", {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  })
   const users = await responseOfApi.json();
   return users
 }


 const postUser = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user", {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(user)
    });
    const userSave = await responseOfApi.json();
    return userSave
  }
  catch{
    return null
  }
 }


 const updateUser = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user/" + id, {
      method: 'PUT',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify(user)
    });
    const userUpdate = await responseOfApi.json();
    return userUpdate
  }
  catch{
    return null
  }
 }

export { getUsers, getUserAuthenticated, postUser, updateUser };