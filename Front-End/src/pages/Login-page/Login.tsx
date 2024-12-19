import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const allowedStatusCode = ["200", "201", "202", "204"];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;

    if (!email || !password) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/login", values);
      if (allowedStatusCode.includes(response.status.toString())) {
        toast({
          title: "Success",
          description: "Successfully Logged In",
        });
      }
    } catch (err: any) {
      console.log(err);
      toast({
        title: "Failed To Login",
        description:
          "Invalid credentials, Please check your Email and Password",
      });
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden lg:flex items-center justify-center bg-gray-100">
      <img
        src="/auth-image.jpg"
        alt="Authentication"
        className="w-full h-full object-cover"
      />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-md shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
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
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full py-3 text-lg">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
