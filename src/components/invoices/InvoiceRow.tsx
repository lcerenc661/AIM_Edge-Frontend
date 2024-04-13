import { IoReceiptOutline } from "react-icons/io5";
import { LiaCubesSolid } from "react-icons/lia";
import Modals from "../ui/Modals";
import InvoiceSummary from "./InvoiceSummary";
import Voucher from "./Voucher";

interface Props {
  Image: string;
  client: string;
  date: string;
  discount: number;
  invoiceNumber: string;
  products: [];
  subtotal: number;
  total: string;
}

const InvoiceRow = ({
  client,
  Image,
  discount,
  date,
  invoiceNumber,
  products,
  total,
  subtotal,
}: Props) => {
  return (
    <tr>
      <td>{invoiceNumber} </td>
      <td>{client} </td>
      <td>{date} </td>
      <td>${subtotal} </td>
      <td>%{discount} </td>
      <td>${total}</td>
      <td>
        <Modals
          childrenModal={<Voucher image={Image}  invoiceID={invoiceNumber}/>}
          childrenButton={<IoReceiptOutline size={30} />}
          modalKey={`${invoiceNumber}Receipt`}
        />
        {/* <LiaCubesSolid size={30} /> */}
      </td>
      <td>
        {/* <LiaCubesSolid size={30} /> */}
        <Modals
          childrenModal={<InvoiceSummary products={products} />}
          childrenButton={<LiaCubesSolid size={30} />}
          modalKey={`${invoiceNumber}Products`}
        />
      </td>
    </tr>
  );
};
export default InvoiceRow;
