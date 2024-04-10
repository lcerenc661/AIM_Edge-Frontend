
import InvoiceRow from "./InvoiceRow";
import Pagination from "../ui/Pagination";
import Modals from "../ui/Modals";
import CreateInvoice from "./CreateInvoice";
import { useLoaderData } from "react-router-dom";

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
  const { invoices, meta, user, users, products }: any = useLoaderData();
  let { currentPage, totalPages } = meta;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (isNaN(currentPage) || currentPage < 1) {
    currentPage = 1;
  }

  return (
    <div className="h-full w-full md:h-5/6 md:w-5/6 flex flex-col items-center md:pt-10 bg-white md:rounded-xl  ">
      {user.role === "admin" && (
        <div className="self-start md:ml-10 ml-2">
          <Modals
            childrenModal={<CreateInvoice users={users} products={products} />}
            childrenButton={
              <div className=" text-slate-100 font-bold text-xl bg-slate-900 py-3 px-6 my-5 rounded-xl ">
                + Add Invoice
              </div>
            }
            modalKey={"createInvoice"}
          />
        </div>
      )}

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
            {invoices.map((invoice: any) => {
              const {
                Image,
                client,
                date,
                discount,
                invoiceNumber,
                products,
                subTotal,
                total,
              } = invoice;
              return (
                <InvoiceRow
                  key={invoiceNumber}
                  Image={Image}
                  client={client}
                  date={date}
                  discount={discount}
                  invoiceNumber={invoiceNumber}
                  products={products}
                  subtotal={subTotal}
                  total={total}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination actualPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
export default InvoiceTable;
