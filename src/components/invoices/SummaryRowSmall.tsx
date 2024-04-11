interface Props {
  id: string;
  quantity: string;
  name: string;
}

const SummaryRow = ({ name, quantity, id }: Props) => {
  return (
    <tr>
      <td>{id} </td>
      <td>{quantity} </td>
      <td>{name}</td>
    </tr>
  );
};
export default SummaryRow;
