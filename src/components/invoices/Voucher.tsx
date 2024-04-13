interface Props {
  image: string;
  invoiceID: string;
}

const Voucher = ({ image, invoiceID }: Props) => {
  let imageLink;
  if (image.length > 20) {
    imageLink = image;
    console.log("Link exist")
  } else {
    imageLink = "/imageHolder.jpg";
  }
  console.log(imageLink)

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold my-3"> Voucher #{invoiceID} </h3>
      <img src={imageLink} alt="Voucher" className="h-[70vh]   mb-3" />
    </div>
  );
};
export default Voucher;
