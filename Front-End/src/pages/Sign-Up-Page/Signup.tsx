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

    console.log("my payload is", payload);
  };

  return (
    <div className="flex items-center rounded-md justify-center dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Create an account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enter your details below to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
          >
            Continue with email →
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-2 text-sm text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <button className="w-full flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600">
          Continue with Google
        </button>

        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          By clicking continue, you agree to our{" "}
          <a href="#" className="text-gray-600 dark:text-gray-400 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-600 dark:text-gray-400 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
