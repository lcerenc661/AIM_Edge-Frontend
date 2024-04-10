import { CiLogout } from "react-icons/ci";

import { IoListOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { logOutUser } from "../../features/user/userSlice";

const menuItem = [
  {
    icon: <IoListOutline />,
    title: "Invoices",
    path: "#",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { user }: any = useLoaderData();


  const handleClick = () => {
    dispatch(logOutUser());
    navigate("/auth/login");
  };

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-slate-900 text-gray-100 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <h2 className="text-4xl  font-bold text-gray-300 text-center">
            Invoices
          </h2>
        </div>

        <div className="mt-8 text-center">
          <h5 className="hidden mt-4 text-xl font-semibold  lg:block">
            {user.name}
          </h5>
          <span className="hidden text-gray-400 lg:block">{user.role} </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

          {menuItem.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button
          className="px-4 py-3 flex items-center space-x-2 rounded-md text-gray-400 group"
          onClick={handleClick}>
          <CiLogout />
          <span className=" group-hover:text-gray-200">| Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
