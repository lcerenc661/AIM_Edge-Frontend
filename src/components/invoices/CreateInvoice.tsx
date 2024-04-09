import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import InvoiceSummarySmall from "./InvoiceSummarySmall";

const CreateInvoice = () => {
  return (
    <div>
      <h2>Add new invoice</h2>
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-row-2  md:justify-items-stretch justify-items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:col-span-3 col-span-1 md:row-span-1 ">
            <FormInput
              label={"date"}
              name={"date"}
              type={"date"}
              size={"w-[200px] "}
            />
            <FormInput
              label={"discount"}
              name={"discount"}
              type={"input"}
              size={"w-[200px] "}
            />

            <FormSelect
              label={"client"}
              name={"client"}
              list={["a", "b"]}
              size={"w-[200px] "}
            />
            <div className="flex md:flex-row flex-col items-center gap-2">
              <div>
                <FormSelect
                  label={"product"}
                  name={"product"}
                  list={["a", "b"]}
                  size={"lg:w-[150px] md:w-[100px] w-[200px]"}
                />
              </div>

              <FormInput
                label={"quantity"}
                name={"quantity"}
                type={"input"}
                size={"md:w-[50px] w-[200px]"}
              />
              <button className="btn-sm md:self-end md:mb-[6px] bg-slate-500 text-white rounded-lg text-center md:w-auto w-[200px] md:my-0 my-6 ">
                +
              </button>
            </div>
          </div>

          <div className="md:col-span-3 col-span-1 md:row-span-1">
            <InvoiceSummarySmall />
          </div>

          <div className="md:row-start-1 md:col-start-4 col-span-1 md:row-span-2 md:border-l-2 md:justify-self-center  md:border-gray-300">
            <div className="flex md:flex-col items-center m-2 gap-4 flex-col-reverse">
              <h3 className="text-xl font-bold my-3"> Voucher # 375 </h3>
              <img
                src={"/imageHolder.jpg"}
                alt="Voucher"
                className="md:w-52 w-32 md:self-end"
              />

              <FormInput
                label={"voucher"}
                name={"voucher"}
                type={"file"}
                size={"md:w-[200px] w-[300px]"}
              />
            </div>
          </div>
        </div>
        <div className=" flex gap-6">
          <button className="btn">Save</button>
          <button className="btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};
export default CreateInvoice;
