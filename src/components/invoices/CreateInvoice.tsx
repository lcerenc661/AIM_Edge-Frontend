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

  const refreshPage = () => {
    navigate(0);
    //refreshingg
  };

  const dispatch = useDispatch();
  const productsNames = products.map((product: any) => product.name);
  const usersNames = users.map((user: any) => user.name);

  const [client, setClient] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClient(event.target.value);
    const newName = event.target.value;
    console.log({ client: newName });
    const selectedClient = users.filter((user) => user.name === newName);
    if (selectedClient[0]) {
      const { clientSeniority, id, name, totalSales } = selectedClient[0];
      dispatch(setInvoiceClient({ clientSeniority, id, name, totalSales }));
    }
  };

  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.value);
  };

  const handleApplyDiscount = () => {
    if (!Number(discount)) {
      return toast.error("Please enter a numeric value (0-100)");
    }

    dispatch(setInvoiceDiscount(+discount));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  const handleClick = () => {
    console.log({ name: selectedProduct });
    const selProduct = products.filter(
      (product) => product.name === selectedProduct
    );
    console.log(selProduct);
    if (selProduct[0]) {
      const { id, name, value } = selProduct[0] as any;
      if (quantity === "") {
        return toast.error("Select Quantity");
      }
      // dispatch(addToCart(payload:{ quantity, ...selProduct }));
      dispatch(addToCart({ quantity, id, name, value }));
    }
  };

  const handleDelete = () => {
    dispatch(clearCart());
  };

  const invoiceTotal = useSelector(
    (state: RootState) => state.cartState.cartTotal
  );
  const discountApplied = useSelector(
    (state: RootState) => state.cartState.discount
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
      <h2>Add new invoice</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-row-2  md:justify-items-stretch justify-items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:col-span-3 col-span-1 md:row-span-1 ">
          <FormSelect
            label={"client"}
            name={"client"}
            list={usersNames}
            size={"w-[200px] "}
            value={client}
            onChange={handleClientChange}
          />
          <div className="flex gap-4 items-center relative">
            {+discountApplied > 0 && (
              <div className="absolute -left-10 bottom-2 rounded-full bg-green-700 text-white  transition-all ">
                <IoCheckmarkDone size={25} />
              </div>
            )}

            <FormInput
              label={"discount"}
              name={"discount"}
              type={"input"}
              size={"w-[200px] row-start-2 "}
              value={discount}
              onChange={handleDiscountChange}
            />
            <div
              onClick={() => handleApplyDiscount()}
              className="btn-sm bg-slate-800 text-white self-end rounded-lg mb-1"
            >
              {" "}
              Apply
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-2">
            <div>
              <FormSelect
                label={"product"}
                name={"product"}
                list={productsNames}
                size={"lg:w-[150px] md:w-[100px] w-[200px]"}
                value={selectedProduct}
                onChange={handleProductChange}
              />
            </div>

            <FormInput
              label={"quantity"}
              name={"quantity"}
              type={"input"}
              size={"md:w-[50px] w-[200px]"}
              value={quantity}
              onChange={handleQuantityChange}
            />
            <div
              onClick={handleClick}
              className="btn-sm md:self-end md:mb-[6px] bg-slate-500 text-white rounded-lg text-center md:w-auto w-[200px] md:my-0 my-6 "
            >
              +
            </div>
          </div>
        </div>

        <div className="md:col-span-3 col-span-1 md:row-span-1">
          <InvoiceSummarySmall />
        </div>
        <div className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 md:border-l-2 md:justify-self-center md:p-3  md:border-gray-300">
          <ImageForm />
        </div>
      </div>
      <div className="flex gap-8 items-center ">
        <div>
          <button
            type="button"
            className="btn m-3"
            onClick={() => handleSaveInvoice()}
          >
            Save
          </button>
          <button
            className="btn m-3"
            type="button"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
        <p className="font-bold text-4xl">
          {" "}
          <span className="text-2xl font-light"> Total</span>{" "}
          {invoiceTotal as any}{" "}
        </p>
      </div>
    </div>
  );
};

export default CreateInvoice;
