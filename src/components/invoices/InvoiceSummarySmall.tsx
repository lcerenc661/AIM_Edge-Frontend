
import { useSelector } from "react-redux";
import SummaryRowSmall from "./SummaryRowSmall";
import { RootState } from "../../utils/store";

const tableHeadersData = ["Product ID", "Quantity", "Products Name"];

const InvoiceSummarySmall = () => {
  const cart = useSelector((state: RootState) => state.cartState.cartItems);

  return (
    <div className="h-[200px] md:w-[100%]  flex flex-col items-center  bg-white md:rounded-xl  ">
      <div className="overflow-x-auto  w-full text-xs ">
        <table className="table">
          {/* head */}
          <thead className="mb:text-lg   font-bold">
            <tr>
              {tableHeadersData.map((header) => {
                return <th key={header}> {header} </th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.length >= 1 &&
              cart.map((item, i) => {
                const { name, quantity, id } = item;
                return (
                  <SummaryRowSmall
                    name={name}
                    quantity={quantity}
                    id={id}
                    key={i}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default InvoiceSummarySmall;
