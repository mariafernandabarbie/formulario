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
 
 const getUsers = () =>{
   
 }
export { getUsers, getUserAuthenticated };