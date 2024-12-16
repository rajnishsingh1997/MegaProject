import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>();

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  });

  const allowedStatusCode = ["200", "201", "202", "204"];

  const { toast } = useToast();

 
  async function submitForm(value: any) {
    const { name, email, password } = value;

    if (!name || !email || !password) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/sign-up", value);
      if (allowedStatusCode.includes(response.status.toString())) {
        toast({
          title: "Success",
          description: "Your account has been created successfully!",
        });
      }
    } catch (err: any) {
      
      toast({
        title: "User Already Exists",
        description: err?.response?.data?.message,
      });
    }
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
          {...register("name", { required: true })}
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
          {...register("password", { required: true })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.password && (
          <p className="text-red-500 text-sm mt-1">
            Error: Password is required
          </p>
        )}

        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign-up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
