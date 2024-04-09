import { IoReceiptOutline } from "react-icons/io5";
import { LiaCubesSolid } from "react-icons/lia";
import Modals from "../ui/Modals";
import InvoiceSummary from "./InvoiceSummary";
import Voucher from "./Voucher";

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
        <Modals
          childrenModal={<Voucher />}
          childrenButton={<IoReceiptOutline size={30} />}
          modalKey="voucher"
        />
        {/* <LiaCubesSolid size={30} /> */}
      </td>
      <td>
        {/* <LiaCubesSolid size={30} /> */}
        <Modals
          childrenModal={<InvoiceSummary />}
          childrenButton={<LiaCubesSolid size={30} />}
          modalKey="voucher"
        />
      </td>
    </tr>
  );
};
export default InvoiceRow;
