import { InvoiceTable, Sidebar, TopMenu } from "../components";
import { customFetch } from "../api/axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const invoiceQuery = (queryParams: any, token: string) => {
  let { page } = queryParams;
  if (page<=0){
    page = 1
  }
  return {
    queryKey: [page ?? 1],
    queryFn: () =>
      customFetch.get("/invoices", {
        params: queryParams,
        headers: {
          authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
  };
};

export const loader =
  (store: any, queryClient: any) =>
  async ({ request }: any) => {
    const user = store.getState().userState.user;
    const { token } = user;
    if (!user) {
      toast.error("You must login to view orders");
      return redirect("/auth/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(
      invoiceQuery(params, token)
    );
    const usersResponse = await customFetch("/users")
    const productResponse = await customFetch("/products")
    const products = productResponse.data.productsArray;
    const users = usersResponse.data.usersArray;
    console.log(users)
    const invoices = response.data.invoicesArray;
    const meta = response.data.paginationInfo;

    return { invoices, meta, user, users, products };
  };

const InvoicePage = () => {
  return (
    <main>
      <Sidebar />
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen overflow-hidden bg-gray-100">
        <TopMenu />
        <div className="md:px-6 md:pt-6 flex justify-center items-center md:h-[80%] h-full ">
          <InvoiceTable />
        </div>
      </div>
    </main>
  );
};

export default InvoicePage;
