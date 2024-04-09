import { IoReceiptOutline } from "react-icons/io5";
import { LiaCubesSolid } from "react-icons/lia";
import InvoiceRow from "./InvoiceRow";
import Pagination from "../ui/Pagination";
import Modals from "../ui/Modals";
import CreateInvoice from "./CreateInvoice";

const tableHeadersData = [
  "# Invoice",
  "Client",
  "Date",
  "Subtotal",
  "Discount",
  "Total",
  "Vaucher",
  "Products",
];

const InvoiceTable = () => {
  return (
    <div className="h-full w-full md:h-5/6 md:w-5/6 flex flex-col items-center md:pt-10 bg-white md:rounded-xl  ">
      <div className="self-start md:ml-10 ml-2">
        <Modals
          childrenModal={<CreateInvoice />}
          childrenButton={
            <div className=" text-slate-100 font-bold text-xl bg-slate-900 py-3 px-6 my-5 rounded-xl ">
              + Add Invoice
            </div>
          }
          modalKey={"createInvoice"}
        />
      </div>
      <div className="overflow-x-auto  w-full py-8 md:px-10 px-2">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-bold">
            <tr>
              {tableHeadersData.map((header) => {
                return <th key={header}> {header} </th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
            <InvoiceRow />
          </tbody>
        </table>
      </div>
      <Pagination actualPage={1} totalPages={5} />
    </div>
  );
};
export default InvoiceTable;
