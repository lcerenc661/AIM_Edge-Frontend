import React from "react";

interface Props {
  invoiceID: string;
  imageRef: React.RefObject<HTMLImageElement>;
  imageLink: string;
}

const VoucherImage = ({ invoiceID, imageRef, imageLink }: Props) => {
  return (
    <>
      <h3 className="text-xl font-bold my-3"> Voucher #{invoiceID} </h3>
      <img
        ref={imageRef}
        src={imageLink}
        alt={`Voucher image}`}
        className="h-[70vh]   mb-3"
        id={`voucher-image-${invoiceID}-${imageLink}`}
      />
    </>
  );
};

export default VoucherImage;
