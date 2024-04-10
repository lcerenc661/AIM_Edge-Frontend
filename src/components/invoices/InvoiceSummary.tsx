import SummaryRow from "./SummaryRow";

const tableHeadersData = ["Product ID", "Quantity", "Products Name"];
interface Product {
  productID: string;
  quantity: number;
  productName: string;
}
interface Props {
  products: Product[];
}

const InvoiceSummary = ({ products }: Props) => {
  console.log(products)
  return (
    <div className="h-full w-full flex flex-col items-center md:pt-10 bg-white md:rounded-xl  ">
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
           
            { products.map((product, i)=>{
              return ( <SummaryRow product={product} key={i} />)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default InvoiceSummary;
