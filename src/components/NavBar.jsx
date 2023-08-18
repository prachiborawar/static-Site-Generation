import React from 'react'
import Link from 'next/link'
import  { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter();
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href={"/home"} className={`block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent ${router.pathname === "/home" ? "md:text-blue-700" : "text-gray-900"} md:hover:text-blue-700`} >Home</Link>
            </li>
            <li>
              <Link href={"/about"}  className={`block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent ${router.pathname === "/about" ? "md:text-blue-700" : "text-gray-900"} md:hover:text-blue-700`}>About</Link>
            </li>
            <li>
              <Link href={"/users"}  className={`block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent ${router.pathname === "/users" ? "md:text-blue-700" : "text-gray-900"} md:hover:text-blue-700`}>Users</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

  )
}
