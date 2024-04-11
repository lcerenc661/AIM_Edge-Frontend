import { v4 as uuidv4 } from "uuid";

import FormInput from "../ui/FormInput";
import { customImageFetch } from "../../api/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setImageLink } from "../../features/cart/cartSlice";

const ImageForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const id = uuidv4();

    try {
      const response = await customImageFetch.post(
        `/uploadFile/${id}`,
        formData
      );
      dispatch(setImageLink(response.data));
      console.log(response.data)

      toast.success("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error Uploading file");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <div className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 md:border-l-2 md:justify-self-center  md:border-gray-300">
        <div className="flex md:flex-col items-center m-2 gap-4 flex-col-reverse">
          <h3 className="text-xl font-bold my-3"> Voucher # 375 </h3>
          <img
            src={"/imageHolder.jpg"}
            alt="Voucher"
            className="md:w-52 w-32 md:self-end"
          />

          <FormInput
            label={"file"}
            name={"file"}
            type={"file"}
            size={"md:w-[200px] w-[300px]"}
          />
        </div>
        <button type="submit" className="btn m-3">
          Save Image
        </button>
      </div>
    </form>
  );
};

export default ImageForm;
