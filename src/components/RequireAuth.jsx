import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const RequireAuth = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children;
  }

  return (
    <div>
      <Navigate to={"/login"} />
    </div>
  );
};

export default RequireAuth;
