'use client'

import '../css/styles.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    const handler = async (e) => {
        e.preventDefault();
        toast('Alterado com sucesso')
      }
    
    return (
        <div className='body'>
        <div className='container'>
            <h1>Alterar</h1>
            <form>
     
            <input
       placeholder='Nome'
       type="text"
       required
/>   

     <input
       placeholder='E-mail'
       type="email"
       required
/>    
     <input
       placeholder='Senha'
       type='password'
       required
/>    
     <button onClick={handler}>Entrar</button>
   </form>
            
        </div>
        <ToastContainer
position="bottom-right"
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
   
    );
};