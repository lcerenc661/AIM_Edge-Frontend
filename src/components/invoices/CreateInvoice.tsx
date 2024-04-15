import InvoiceSummarySmall from "./InvoiceSummarySmall";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { RootState } from "../../utils/store";
import { toast } from "react-toastify";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import ImageForm from "./ImageForm";
import UserInputs from "../invoiceForm/UserInputs";
import ProductInputs from "../invoiceForm/ProductInputs";

interface User {
  clientSeniority: string;
  id: string;
  name: string;
  totalSales: null | string | number;
}
interface Props {
  users: User[];
  products: { name: string }[];
}

const CreateInvoice = ({ users, products }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const refreshPage = () => {
    navigate(0);
  };

  const handleDelete = () => {
    dispatch(clearCart());
  };

  const invoiceTotal = useSelector(
    (state: RootState) => state.cartState.cartTotal
  );

  const user = useSelector((state: any) => state.userState.user);
  const token = user.token;
  const data = useSelector((state: RootState) => state.cartState.requestData);

  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer " + token;

    return config;
  });

  const handleSaveInvoice = async () => {
    const requestData = JSON.stringify({ ...data });
    console.log(requestData);
    try {
      const response = await axios.post(
        "https://aim-edge-backend.onrender.com/api/invoices",
        { ...data }
      );
      console.log(response);
      refreshPage();
      return toast.success("Order placed successfully");
    } catch (err) {
      toast.error("There has been an error");
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-slate-500 text-center md:text-left">Add new invoice</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-row-2  md:justify-items-start transition-all mt-4 justify-items-center   ">
        <div className=" flex md:flex-row flex-col md:col-span-3 col-span-1 md:row-span-1 gap-3 items-center w-full px-4">
          <UserInputs users={users} />
          <ProductInputs products={products} />
        </div>
        <div className="md:col-span-3 col-span-1 md:row-span-1 justify-self-stretch flex-grow m-4">
          <InvoiceSummarySmall />
        </div>
        <div className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 border-2 rounded-xl  md:px-3 md:pb-3 px-2 md:border-gray-300 lg:w-auto justify-self-stretch flex-grow p-4">
          <ImageForm />
        </div>
      </div>
      <div className="flex md:gap-8  gap-2 items-center mt-2 md:mt-0  md:w-8/12  w-11/12 m-auto">
        <div className="flex md:gap-2 ">
          <button
            type="button"
            className="btn m-3 w-20  "
            onClick={() => handleSaveInvoice()}
          >
            Save
          </button>
          <button
            className="btn m-3 w-20 hover:bg-red-200"
            type="button"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
        <p className="font-bold text-4xl border-b-2 border-slate-400">
          {" "}
          <span className="text-2xl font-light text-slate-500 p-  "> Total</span> $
          {invoiceTotal as any}
        </p>
      </div>
    </div>
  );
};

export default CreateInvoice;
