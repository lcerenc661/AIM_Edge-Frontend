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
    <div>
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
    </div>
  );
};

export default UserInputs;
