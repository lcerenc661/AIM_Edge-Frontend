import { InvoiceTable, Sidebar, TopMenu } from "../components";
import { customFetch } from "../api/axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader =
  (store:any) =>
  async ({ request }:any) => {

  };

const InvoicePage = () => {
  return (
    <main>
      <Sidebar />
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen overflow-hidden bg-gray-100">
        <TopMenu />
        <div className="md:px-6 md:pt-6 flex justify-center items-center md:h-[80%] h-full ">
          <InvoiceTable />
        </div>
      </div>
    </main>
  );
};

export default InvoicePage;
