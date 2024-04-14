import React, { useState } from "react";
import FormSelect from "../ui/FormSelect";
import FormInput from "../ui/FormInput";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../features/cart/cartSlice";

interface Props {
  products: { name: string }[];
}

const ProductInputs = ({ products }: Props) => {
  const productsNames = products.map((product: any) => product.name);
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const dispatch = useDispatch();
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

      dispatch(addToCart({ quantity, id, name, value }));
    }
  };
  return (
    <div className="flex  flex-col gap-2 px-4 pb-4 bg-slate-300 rounded-xl  ">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">
          {" "}
          <span className="font-light"></span> Product
        </h3>
        <p className="font-light text-xs text-slate-400 self-end display-block border rounded-full px-2">
          2
        </p>
      </div>
      <FormSelect
        label={"product"}
        name={"product"}
        list={productsNames}
        size={"lg:w-[300px] md:w-[180px]  w-[300px]"}
        value={selectedProduct}
        onChange={handleProductChange}
      />
      <div className="flex gap-4 ">
        <FormInput
          label={"quantity"}
          name={"quantity"}
          type={"input"}
          size={"w-[100px]"}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <div
          onClick={handleClick}
          className="btn-sm bg-slate-800 text-white  self-end rounded-lg cursor-pointer flex items-center hover:bg-slate-400 hover:scale-105 transition-all"
        >
          <p>Add</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInputs;
