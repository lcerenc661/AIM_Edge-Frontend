interface Product {
  productID: string;
  quantity: number;
  productName: string;
}
interface Props {
  product: Product;
}

const SummaryRow = ({ product }: Props) => {
  return (
    <tr>
      <td>{product.productID} </td>
      <td>{product.quantity} </td>
      <td>{product.productName}</td>
    </tr>
  );
};
export default SummaryRow;
