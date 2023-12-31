'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import './globals.css'
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
<div className="bg-pink-700 min-h-screen flex">
  <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
    <ul className="flex flex-row space-x-4">
      <li className="flex flex-row items-center">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Home
        </Link>
      </li>
      <li className="flex flex-row items-center">
        <Link
          href="/pages/dashboard/register"
          className="text-blue-500 hover:text-blue-700"
        >
          Register
        </Link>
      </li>
      <li className="flex flex-row items-center">
        <Link
          href="/pages/dashboard/alter"
          className="text-blue-500 hover:text-blue-700"
        >
          Alter
        </Link>
      </li>
      <li className="flex flex-row items-center">
        <button onClick={logout} className="text-blue-500 hover:text-blue-700">
          Sair
        </button>
      </li>
    </ul>
  </div>


<div className="flex-1">{children}</div>



</div>
    )
  }