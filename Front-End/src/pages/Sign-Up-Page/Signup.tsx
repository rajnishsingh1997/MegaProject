import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  });

  function submitForm(value:any) {
    console.log(value)
  }

  return (
    <div className="flex justify-center items-center">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit(submitForm)}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.name && (
          <p className="text-red-500 text-sm mt-1">Error: Name is required</p>
        )}

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mt-4 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">Error: Email is required</p>
        )}

        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mt-4 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.password && (
          <p className="text-red-500 text-sm mt-1">
            Error: Password is required
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign-up
        </button>
      </form>
    </div>
  );
};

export default Signup;
