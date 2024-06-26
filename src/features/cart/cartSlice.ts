import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Generated by https://quicktype.io

export interface Request {
  clientId: string;
  clientSeniority: string;
  totalSales: null | string | number;
  invoiceImage: string;
  discount: Number;
  invoiceProducts: InvoiceProduct[];
}

export interface InvoiceProduct {
  product: string;
  quantity: number;
}

interface User {
  clientSeniority: string;
  id: string;
  name: string;
  totalSales: null | string | number;
}
interface Product {
  id: string;
  name: string;
  quantity: string;
  value: number;
}

type SliceState = {
  cartItems: Product[];
  cartTotal: Number;
  cartSubTotal: Number;
  discount: Number;
  client: User;
  requestData?: Request;
  invoiceImage: string;
};

const defaultState: SliceState = {
  cartItems: [],
  cartSubTotal: 0,
  cartTotal: 0,
  discount: 0,
  invoiceImage: "Image test",
  requestData: {
    clientId: "No Client",
    clientSeniority: "",
    totalSales: "",
    invoiceImage: "Image test",
    discount: 0,
    invoiceProducts: [{ product: "", quantity: 0 }],
  },
  client: { clientSeniority: "", id: "", name: "", totalSales: null },
};

const getMaxDiscount = (totalSales: number, clientSeniority: number) => {
  if (totalSales >= 200) {
    if (totalSales >= 2000) {
      return 45;
    }
    if (clientSeniority > 2) {
      return 30;
    }
    if (totalSales <= 1000) {
      return 10;
    }
  }
  return 0;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    calculateTotals: (state) => {
      const totalDiscount =
        (Number(state.cartSubTotal) * Number(state.discount)) / 100;
      state.cartTotal = Number(state.cartSubTotal) - totalDiscount;

      cartSlice.caseReducers.createRequestObject(state);
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      if (state.client.id === "") {
        toast.error("First select a client");
      } else {
        const { id, name, quantity, value } = action.payload;

        state.cartItems.push({ id, name, quantity, value });

        const actualTotal = state.cartSubTotal;
        state.cartSubTotal = value * Number(quantity) + Number(actualTotal);
        cartSlice.caseReducers.calculateTotals(state);

        toast.success("Item added to cart");
      }
    },

    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    setInvoiceClient: (state, action: PayloadAction<User>) => {
      state.client = action.payload;
      state.discount = 0;
      console.log(current(state));
      return;
    },

    setInvoiceDiscount: (state, action: PayloadAction<number>) => {
      const discount = action.payload;
      console.log(1);
      if (state.client.totalSales !== null) {
        const totalSales = Number(state.client.totalSales);
        const clientSeniority = Number(state.client.clientSeniority);

        const maxDiscount = getMaxDiscount(totalSales, clientSeniority);

        if (discount > maxDiscount) {
          toast.error(
            `${state.client.name} limit discount is ${maxDiscount}, please select a value within the available range`
          );
          return;
        }
        if (discount < 0) {
          toast.error(
            `${state.client.name} limit discount is ${maxDiscount}, please select a value within the available range`
          );
          return;
        }

        state.discount = discount;
        cartSlice.caseReducers.calculateTotals(state);

        return;
      }
      if (state.client.name !== "") {
        toast.error(`Discounts do not apply to this client`);
        return;
      }
      toast.error(`Select a client`);
      return;
    },

    setImageLink: (state, action) => {
      state.invoiceImage = action.payload;
      cartSlice.caseReducers.createRequestObject(state);
      console.log(current(state));
    },

    createRequestObject: (state) => {
      if (state.cartItems.length === 0 || state.client.id === "") {
        return;
      }
      state.requestData = {
        clientId: state.client.id,
        clientSeniority: state.client.clientSeniority,
        totalSales: state.client.totalSales ?? 0,
        invoiceImage: state.invoiceImage,
        discount: state.discount,
        invoiceProducts: state.cartItems.map((item) => {
          return { product: item.id, quantity: +item.quantity };
        }),
      };
      console.log(current(state));
    },
  },
});

export const { addToCart, clearCart, setInvoiceDiscount, setInvoiceClient, setImageLink } =
  cartSlice.actions;

export default cartSlice.reducer;
