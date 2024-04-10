import { Form, Link, RedirectFunction, redirect } from "react-router-dom";
import { FormInput } from "../components";

import SubmitBtn from "../components/ui/SubmitBtn";
import { toast } from "react-toastify";
import { customFetch } from "../api/axios";
import { Dispatch } from "@reduxjs/toolkit";
import { loginUser } from "../features/user/userSlice";


export const action =( store:any) => async ({
  request,
}: {
  request: Request;
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/login", data);
    console.log(response.data.user);
    store.dispatch(loginUser(response.data))
    toast.success("logged successfully");

    return redirect("/");
  } catch (error: any) {
    console.log(error);
    const errorMessage =error?.response?.data?.error?.message ||
    "Please double check your credentials";

    toast.error(errorMessage);
    return null;
  }
};

const introText = ` We are an International IT consulting firm, focused in software development.
 We use cutting edge technologies and an innovate methodology through all lifecyle phases of design and 
 implementarion for large-scale systems. Our commitment, technical expertise and excellent location allows us to present
  an innovative and bright solution worldwide customers.`;

const LoginPage = () => {
  return (
    <section className="h-screen flex md:justify-center items-center gap-24 md:flex-row-reverse flex-col my-16 mt-28 ">
      <Form
        method="POST"
        className="card w-[350px] p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <img src={"/logo.jpg"} alt="AIM Egde logo" className="w-[400px] mb-3" />
        <h4 className=" text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>

        <p className="text-center">
          Create your client account |
          <Link
            to="/auth/register"
            className="ml-1 link link-hover link-primary capitalize">
            register
          </Link>
        </p>
      </Form>
      <div className="w-[350px]">
        <h2 className="font-bold text-5xl inline-block mb-12">
          About AIM Edge..
        </h2>
        <p>{introText}</p>
      </div>
    </section>
  );
};
export default LoginPage;
