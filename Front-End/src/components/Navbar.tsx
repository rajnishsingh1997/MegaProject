import { Button } from "./ui/button";
import {memo} from "react";
const Navbar = () => {
  return (
   <div>
  <div className="relative">
    <div className="relative flex items-center justify-between h-16 w-full">
      {/* Logo Section */}
      <div className="flex items-center">
        <a className="flex-shrink-0" href="/">
          <img
            className="block h-8 w-auto"
            src="https://www.svgrepo.com/show/303650/neo-logo.svg"
            alt="Logo"
          />
        </a>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4">
        <Button variant="outline">
          <a
            className="text-gray-700 hover:text-lime-700 text-sm font-medium"
            href="/login"
          >
            Login
          </a>
        </Button>
        <Button variant="outline">
          <a
            href="/signup"
            className="hover:text-lime-700 text-sm text-black font-medium"
          >
            Sign up
          </a>
        </Button>
        <Button>Free Trial</Button>
      </div>
    </div>
  </div>
</div>

  );
};

export default memo(Navbar);
