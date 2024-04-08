import { InvoiceTable, Pagination, Sidebar, TopMenu } from "../components";

const InvoicePage = () => {
  return (
    <body>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6">
          <InvoiceTable />
          <Pagination actualPage={1} totalPages={5} />
        </div>
      </div>
    </body>
  );
};

export default InvoicePage;
