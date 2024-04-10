import SummaryRow from "./SummaryRow";

const tableHeadersData = ["Product ID", "Quantity", "Products Name"];

const InvoiceSummarySmall = () => {
  return (
    <div className="h-[200px] w-[80%] flex flex-col items-center  bg-white md:rounded-xl  ">  
      <div className="overflow-x-auto  w-full ">
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
            {/* <SummaryRow />
            <SummaryRow />
            <SummaryRow /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default InvoiceSummarySmall;
