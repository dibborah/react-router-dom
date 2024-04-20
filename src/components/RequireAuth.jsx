import { Navigate } from "react-router-dom";
const RequireAuth = ({ children }) => {

  const isLoggedIn = false;

  if(isLoggedIn){
    return children;
  }

  return <div><Navigate to={"/login"}/></div>;
};

export default RequireAuth;
