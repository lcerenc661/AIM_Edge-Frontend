import React, { useRef, useEffect } from "react";

interface Props {
  image: string;
  invoiceID: string;
}

const Voucher = ({ image, invoiceID }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const currentImageRef = imageRef.current; // Copiar el valor de imageRef.current en una variable local

    return () => {
      if (currentImageRef) {
        currentImageRef.removeEventListener("load", () => {});
      }
    };
  }, []);

  const imageLink = image.length > 20 ? image : "/imageHolder.jpg";

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold my-3"> Voucher #{invoiceID} </h3>
      <img
        ref={imageRef}
        src={imageLink}
        alt="Voucher"
        className="h-[70vh]   mb-3"
      />
    </div>
  );
};

export default Voucher;