import { v4 as uuidv4 } from "uuid";

import FormInput from "../ui/FormInput";
import { customImageFetch } from "../../api/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setImageLink } from "../../features/cart/cartSlice";
import SectionTitle from "../invoiceForm/SectionTitle";

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
      console.log(response.data);

      toast.success("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error Uploading file");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <SectionTitle title={"Image"} step={"3"} />
      <div className="flex md:flex-col items-center mx-2 my-3 gap-4 flex-col">
        <img
          src={"/imageHolder.jpg"}
          alt="Voucher"
          className="md:w-24 w-16 rounded-sm"
        />

        <FormInput
          label={"file"}
          name={"file"}
          type={"file"}
          size={"md:w-[200px] w-[300px]"}
        />
        <button
          type="submit"
          className="btn-sm bg-slate-800 text-white mx-2 mt-4 rounded-lg cursor-pointer flex items-center hover:bg-slate-400 hover:scale-105 transition-all"
        >
          Save Image
        </button>
      </div>
    </form>
  );
};

export default ImageForm;
