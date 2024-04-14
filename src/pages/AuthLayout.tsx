import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex justify-center">
      <div className="md:w-full  w-[350px] md:px-10">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout