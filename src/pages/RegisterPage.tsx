import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";
import SubmitBtn from "../components/ui/SubmitBtn";

const introText = ` We are an International IT consulting firm, focused in software development.
 We use cutting edge technologies and an innovate methodology through all lifecyle phases of design and 
 implementarion for large-scale systems. Our commitment, technical expertise and excellent location allows us to present
  an innovative and bright solution worldwide customers.`;

const RegisterPage = () => {
  return (
    <section className="h-screen flex md:justify-center items-center gap-24 md:flex-row-reverse flex-col my-16 mt-28 ">
      <Form
        method="POST"
        className="card w-[350px] p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <img src={"/logo.jpg"} alt="AIM Egde logo" className="w-[400px] mb-3" />
        <h4 className=" text-3xl font-bold">Register</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <FormInput type="password" label="password2" name="password2" />
        <FormInput type="input" label="contactPoint" name="contactPoint" />
        <FormInput type="input" label="phoneNumber" name="phoneNumber" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>

        <p className="text-center">
          Already has an account |
          <Link
            to="/auth/Login"
            className="ml-1 link link-hover link-primary capitalize">
            Login
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
export default RegisterPage
