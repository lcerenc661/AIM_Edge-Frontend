import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../features/user/userSlice";
import { useLoaderData, useNavigate } from "react-router-dom";

const TopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user }: any = useLoaderData();

  const handleClick = () => {
    dispatch(logOutUser());
    navigate("/auth/login");
  };

  return (
    <div className="sticky z-10 top-0 h-16 border-b  bg-slate-900 text-gray-100 lg:bg-gray-100 lg:text-slate-900  lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4 pt-2">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
          Invoice Records
        </h5>
        <div className="lg:hidden flex items-center justify-between w-1/2">
          <div>
            <p className="text-gray-200 lg:block">
              {" "}
              <span className="font-bold text- md:text-base">
                {user.name}{" "}
              </span>{" "}
              | <span className="font-light"> {user.role} </span>{" "}
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleClick}
            className="flex items-center justify-center w-[7rem] h-10  lg:hidden"
          >
            <CiLogout className="mx-2" />
            <span className="text-gray-400 group-hover:text-gray-200">
              | Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
