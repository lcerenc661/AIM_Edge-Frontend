import { IoReceiptOutline } from "react-icons/io5";
import { LiaCubesSolid } from "react-icons/lia";
import Modals from "../ui/Modals";

const InvoiceRow = () => {
  return (
    <tr>
      <td>375</td>
      <td>Client</td>
      <td>25/12/2015</td>
      <td>$500</td>
      <td>10%</td>
      <td>$450</td>
      <td>
        {/* <IoReceiptOutline size={30} /> */}
        <Modals />
      </td>
      <td>
        {/* <LiaCubesSolid size={30} /> */}
        <Modals />
      </td>
    </tr>
  );
};
export default InvoiceRow;
