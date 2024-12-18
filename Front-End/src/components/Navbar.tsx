import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
            <Button onClick={() => navigate("/v1/auth/login")}>Login</Button>
            <Button onClick={() => navigate("/v1/auth/signup")}>Sign up</Button>
            <Button>Free Trial</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
