import React, { useState } from "react";
import {
  setInvoiceClient,
  setInvoiceDiscount,
} from "../../features/cart/cartSlice";
import FormSelect from "../ui/FormSelect";
import { IoCheckmarkDone } from "react-icons/io5";
import FormInput from "../ui/FormInput";
import { toast } from "react-toastify";
import { RootState } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";

interface User {
  clientSeniority: string;
  id: string;
  name: string;
  totalSales: null | string | number;
}

interface Props {
  users: User[];
}
const UserInputs = ({ users }: Props) => {
  const dispatch = useDispatch();

  const usersNames = users.map((user: any) => user.name);
  const [client, setClient] = useState("");
  const [discount, setDiscount] = useState("");

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

  const discountApplied = useSelector(
    (state: RootState) => state.cartState.discount
  );

  return (
    <div className="flex  flex-col gap-2 px-4 pb-4 bg-slate-100 rounded-xl md:self-auto self-stretch flex-grow">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-slate-600">  User
        </h3>
        <p className="font-light text-xs text-slate-400 self-end display-block border rounded-full px-2">
          1
        </p>
      </div>
      <FormSelect
        label={"client"}
        name={"client"}
        list={usersNames}
        size={"lg:w-[280px] md:w-[180px] w-[270px]"}
        value={client}
        onChange={handleClientChange}
      />
      <div className="flex lg:gap-4 md:gap-1 gap-4 items-center relative">
        {+discountApplied > 0 && (
          <div className="absolute lg:right-10 md:-right-3 bottom-1 right-10 rounded-full bg-green-700 text-white  transition-all ">
            <IoCheckmarkDone size={25} />
          </div>
        )}

        <FormInput
          label={"discount"}
          name={"discount"}
          type={"input"}
          size={"w-[100px] row-start-2 "}
          value={discount}
          onChange={handleDiscountChange}
        />
        <div
          onClick={() => handleApplyDiscount()}
          className="btn-sm bg-slate-800 text-white self-end rounded-lg cursor-pointer flex items-center hover:bg-slate-400 hover:scale-105 transition-all"
        >
          <p>Apply</p>
        </div>
      </div>
    </div>
  );
};

export default UserInputs;
