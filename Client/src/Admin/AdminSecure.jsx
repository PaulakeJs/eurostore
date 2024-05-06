import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminSecure({children}) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    if (user.role == "Admin") {
      setAdmin(true);
    } else {
      navigate("/");
      console.log("Nice Try");
    }
  }, []);
  return <div>{admin && <div>{children}</div>}</div>;
}

export default AdminSecure;
