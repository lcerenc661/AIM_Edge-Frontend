import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <main>
      <header className="bg-gray-300 h-1/6">
        <p>AIM LOGO</p>
      </header>
      <body className="flex items-center justify-items-center">
        <Outlet />
      </body>
      

    </main>
  )
}

export default AuthLayout