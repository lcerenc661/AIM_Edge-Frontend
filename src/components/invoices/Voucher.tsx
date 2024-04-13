interface Props {
  image: string;
  invoiceID: string;
}

const Voucher = ({ image }: Props) => {
  let imageLink;
  if (image.length > 20) {
    imageLink = image;
  } else {
    imageLink = "/imageHolder.jpg";
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold my-3"> Voucher # 375 </h3>
      <img src={imageLink} alt="Voucher" className="h-[70vh]   mb-3" />
    </div>
  );
};
export default Voucher;
