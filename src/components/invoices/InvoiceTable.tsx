import { IoReceiptOutline } from "react-icons/io5";
import { LiaCubesSolid } from "react-icons/lia";

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
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {tableHeadersData.map((header) => {
              return <th key={header}> {header} </th>;
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>375</td>
            <td>
              Client
              <br />
              <span className="badge badge-ghost badge-sm">
                Client Seniority: 4yrs
              </span>
            </td>
            <td>25/12/2015</td>
            <td>$500</td>
            <td>10%</td>
            <td>$450</td>
            <td>
              <IoReceiptOutline size={30} />
            </td>
            <td>
              <LiaCubesSolid size={30} />
            </td>
          </tr>
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};
export default InvoiceTable;
