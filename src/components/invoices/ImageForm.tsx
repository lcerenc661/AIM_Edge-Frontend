import { v4 as uuidv4 } from "uuid";

import FormInput from "../ui/FormInput";
import { customImageFetch } from "../../api/axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setImageLink } from "../../features/cart/cartSlice";
import SectionTitle from "../invoiceForm/SectionTitle";
import { RootState } from "../../utils/store";
import { IoCheckmarkDone } from "react-icons/io5";

const ImageForm = () => {
  const dispatch = useDispatch();

  const isImageLoaded =
    useSelector((state: RootState) => state.cartState.invoiceImage).length > 20;

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
        <figure className="relative">
          <img
            src={"/imageHolder.jpg"}
            alt="Voucher"
            className="lg:w-24 md:w-20 w-16 rounded-sm"
          />
          {+isImageLoaded > 0 && (
            <div className="absolute inset-0  rounded-full bg-green-700 text-white  transition-all flex items-center justify-center opacity-75  scale-50">
              <IoCheckmarkDone size={40} />
            </div>
          )}
        </figure>

        <FormInput
          label={"file"}
          name={"file"}
          type={"file"}
          size={"lg:w-[200px] md:w-[140px] w-[210px]"}
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
