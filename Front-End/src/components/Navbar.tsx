import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { memo } from "react";
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

         
          <div className="flex items-center space-x-4">
            <Button>Login</Button>
            <Button>Sign up</Button>
            <Button>Free Trial</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
