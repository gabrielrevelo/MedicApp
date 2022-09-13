import { useEffect } from "react";
import { useAuthContext } from "../authContext";


export default function Logout() {
  const {logout} = useAuthContext();
  useEffect(()=> logout());

  return null;
}

