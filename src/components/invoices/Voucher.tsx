import React, { useRef, useEffect } from "react";
import VoucherImage from "./VoucherImage";

interface Props {
  image: string;
  invoiceID: string;
}

const Voucher = ({ image, invoiceID }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const currentImageRef = imageRef.current;

    return () => {
      if (currentImageRef) {
        currentImageRef.removeEventListener("load", () => {});
      }
    };
  }, []);

  const imageLink = image.length > 20 ? image : "/imageHolder.jpg";

  return (
    <div className="flex flex-col items-center">
      <VoucherImage
        invoiceID={invoiceID}
        imageRef={imageRef}
        imageLink={imageLink}
      />
    </div>
  );
};

export default Voucher;
