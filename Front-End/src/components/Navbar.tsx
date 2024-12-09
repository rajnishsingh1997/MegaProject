import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
        <div className="relative flex h-16 space-x-10 w-full">
          <div className="flex justify-start">
            <a className="flex flex-shrink-0 items-center" href="/">
              <img
                className="block h-8 w-auto"
                height="32"
                src="https://www.svgrepo.com/show/303650/neo-logo.svg"
              />
            </a>
          </div>
          <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
            <Button variant="outline">
              <a
                className="text-gray-700 hover:text-lime-700 text-sm font-medium"
                href="/login"
              >
                Login
              </a>
            </Button>
            <Button variant="ghost">
              <a className="hover:text-lime-700 text-sm font-medium">Sign up</a>
            </Button>
            <Button>
              Free Trail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
