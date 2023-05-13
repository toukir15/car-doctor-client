import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
}
