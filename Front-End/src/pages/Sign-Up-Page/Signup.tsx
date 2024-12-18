import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

const Signup = () => {
  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").max(100),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, name, password } = values;
    if (!email || !name || !password) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/sign-up", values);
    } catch (error) {
      
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Create an account</h1>
          <p className="text-sm text-gray-500">
            Enter your details below to create your account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Continue with email →
            </Button>
          </form>
        </Form>

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
