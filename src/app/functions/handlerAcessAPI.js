'use server'
 const users = [
    {name: "Maria Fernanda", email:"maria@gmail.com", password:"verdade", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"},
    {name: "Maria Joaquina", email:"maria1@gmail.com", password:"1234", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}

 ];
const getUserAuthenticated = (user) => {
let userAuth= {};
users.map((userList) => {
   if( userList.email === user.email && userList.password === user.password) {
   userAuth = userList;
   }
})

return userAuth ;
}

const getUsers = () =>{
     return users  
}
export { getUsers, getUserAuthenticated };