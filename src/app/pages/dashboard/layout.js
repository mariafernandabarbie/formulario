'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


export const metadata = {
    title: 'Register Users',
    description: 'Generated by Next.js',
  }

  export default function DashboardLayout({children}){
  const { push } = useRouter();
    const logout = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        push('/');
    }
    return(
<div className="bg-gray-100 min-h-screen flex">
<div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
    <h1 className="w-1/4 bg-white p-6 rounded-lg shadow-md">Dashboard</h1>
    <ul className="flex flex-col space-y-3">
        <li className="flex flex-row itens-center">
            <Link href="/">Home</Link>
        </li>
        <li className="flex flex-row itens-center">
            <Link href="/pages/dashboard/register">Register</Link>
        </li>

        <li className="flex flex-row itens-center">
            <button onClick={logout}>Sair</button>
        </li>
    </ul>
</div>

<div className="flex-1">{children}</div>



</div>
    )
  }