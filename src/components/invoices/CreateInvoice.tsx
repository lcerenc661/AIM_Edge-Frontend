import React, { useState } from "react";
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import InvoiceSummarySmall from "./InvoiceSummarySmall";

interface Props {
  users: { name: string }[]; // Assuming users is an array of objects with a name property
  products: { name: string }[]; // Assuming products is an array of objects with a name property
}

const CreateInvoice = ({ users, products }: Props) => {
  const productsNames = products.map((product: any) => product.name);
  const usersNames = users.map((user: any) => user.name);
  const [client, setClient] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleClientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClient(event.target.value);
  };

  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  const handleClick = () => {
    const selClient = users.filter((user) => user.name == client);

    const selProduct = products.filter(
      (product) => product.name == selectedProduct
    );
    console.log(selClient, selProduct);
    console.log(client, selectedProduct);
  };

  return (
    <div>
      <h2>Add new invoice</h2>
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-row-2  md:justify-items-stretch justify-items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:col-span-3 col-span-1 md:row-span-1 ">
            {/* <FormInput
              label={"date"}
              name={"date"}
              type={"date"}
              size={"w-[200px] "}
            /> */}
            <FormSelect
              label={"client"}
              name={"client"}
              list={usersNames}
              size={"w-[200px] "}
              value={client}
              onChange={handleClientChange}
            />
            <FormInput
              label={"discount"}
              name={"discount"}
              type={"input"}
              size={"w-[200px] row-start-2 "}
              value={discount}
              onChange={handleDiscountChange}
            />

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
                className="btn-sm md:self-end md:mb-[6px] bg-slate-500 text-white rounded-lg text-center md:w-auto w-[200px] md:my-0 my-6 ">
                +
              </div>
            </div>
          </div>

          <div className="md:col-span-3 col-span-1 md:row-span-1">
            <InvoiceSummarySmall />
          </div>

          <div className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 md:border-l-2 md:justify-self-center  md:border-gray-300">
            <div className="flex md:flex-col items-center m-2 gap-4 flex-col-reverse">
              <h3 className="text-xl font-bold my-3"> Voucher # 375 </h3>
              <img
                src={"/imageHolder.jpg"}
                alt="Voucher"
                className="md:w-52 w-32 md:self-end"
              />

              <FormInput
                label={"voucher"}
                name={"voucher"}
                type={"file"}
                size={"md:w-[200px] w-[300px]"}
              />
            </div>
          </div>
        </div>
        <div className=" flex gap-6">
          <button className="btn">Save</button>
          <button className="btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateInvoice;
