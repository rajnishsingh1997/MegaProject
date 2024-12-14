import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();


  const onSubmit: SubmitHandler<IFormInput> = ({ name, email, password }) => {
    const payload = {
      name,
      email,
      password,
    };

    console.log("my payload is" , payload)
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Create an account</h1>
          <p className="text-sm text-gray-500">
            Enter your details below to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 100,
              })}
              type="text"
              placeholder="Your Name"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                minLength: 5,
                maxLength: 255,
              })}
              type="email"
              placeholder="name@example.com"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 100,
              })}
              type="password"
              placeholder="********"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Continue with email →
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
          >
            <path
              fill="#4285F4"
              d="M23.06 12.25c0-.78-.07-1.53-.2-2.25H12.5v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09"
            ></path>
            <path
              fill="#34A853"
              d="M12.5 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.68v2.84C4.49 20.53 8.2 23 12.5 23"
            ></path>
            <path
              fill="#FBBC05"
              d="M6.34 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.68C1.93 8.55 1.5 10.22 1.5 12s.43 3.45 1.18 4.93l2.85-2.22z"
            ></path>
            <path
              fill="#EA4335"
              d="M12.5 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.95 2.09 15.47 1 12.5 1 8.2 1 4.49 3.47 2.68 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53"
            ></path>
          </svg>
          Continue with Google
        </button>

        <p className="mt-4 text-center text-xs text-gray-500">
          By clicking continue, you agree to our{" "}
          <a href="#" className="text-gray-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
