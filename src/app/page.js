'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './css/style.css'



export default function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { push } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação");
    }
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
      <input
          placeholder='Nome'
          type="name"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
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
    </div>
  )
}
