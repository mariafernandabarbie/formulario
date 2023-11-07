'use client'
import { useState } from "react";
import {postUser} from 'next/navigation';
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@/app/pages/dashboard/css/style.css'



export default function Login() {
  const [user, setUser] = useState({
    name:'',
    email: '',
    password: '',
  });
  const { push } = useRouter();


  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postUser(user);
await new Promise((resolve) => {
  toast.sucess("Usuário cadastrado com sucesso")
  setTimeout(resolve, 5000)
})
      push('/pages/dashboard');
 
    } catch {
      toast.error("Erro na aplicação");
    }
  }


  
  return (
    

    <div className="container">
      
      <h1>Login</h1>
      <form onSubmit={handlerFormSubmit}>
     
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
      <ToastContainer/>
      <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover
theme="colored"
/>
    </div>
  )
}
