import React, { useState } from "react";
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import InvoiceSummarySmall from "./InvoiceSummarySmall";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  setInvoiceClient,
  setInvoiceDiscount,
} from "../../features/cart/cartSlice";
import { RootState } from "../../utils/store";
import { toast } from "react-toastify";
import { IoCheckmarkDone } from "react-icons/io5";
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
    <div>
      <h2 className="text-3xl font-bold text-slate-500">Add new invoice</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-row-2  justify-items-start transition-all mt-4  ">
        <div className=" flex md:flex-row flex-col md:col-span-3 col-span-1 md:row-span-1 gap-3 items-center  ">
          <UserInputs users={users} />
          <ProductInputs products={products} />
        </div>
        <div className="md:col-span-3 col-span-1 md:row-span-1 justify-self-stretch">
          <InvoiceSummarySmall />
        </div>
        <div className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 border-2 rounded-xl md:justify-self-center md:px-3 md:pb-3 px-2 md:border-gray-300">
          <ImageForm />
        </div>
      </div>
      <div className="flex gap-8 items-center mt-2 md:mt-0">
        <div className="flex md:gap-2">
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
        <p className="font-bold text-4xl mr-10  border-b-2 border-slate-400">
          {" "}
          <span className="text-2xl font-light text-slate-500  ">
            {" "}
            Total
          </span>{" "} $
          {invoiceTotal as any}
        </p>
      </div>
    </div>
  );
};

export default CreateInvoice;
