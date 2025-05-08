
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dineflex-offwhite">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-dineflex-burgundy mb-4">404</h1>
        <p className="text-xl text-dineflex-charcoal mb-8">Oops! This table hasn't been set yet</p>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you were looking for. Perhaps you'd like to browse our restaurants instead?
        </p>
        <Link to="/">
          <Button className="bg-dineflex-burgundy hover:bg-dineflex-burgundy/90 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
