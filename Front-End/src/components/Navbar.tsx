import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isUserPresent, setIsUserPresent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsUserPresent(true);
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsUserPresent(false);
    navigate("/v1/auth/login");
  };
  return (
    <div>
      <div className="relative">
        <div className="relative flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <a className="flex-shrink-0" href="/">
              <img
                className="block h-8 w-auto"
                src="https://www.svgrepo.com/show/303650/neo-logo.svg"
                alt="Logo"
              />
            </a>
          </div>

          {isUserPresent ? (
            <div className="flex items-center space-x-4">
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate("/v1/auth/login")}>Login</Button>
              <Button onClick={() => navigate("/v1/auth/signup")}>
                Sign up
              </Button>
              <Button>Free Trial</Button>
              <ModeToggle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
