import React, { useEffect } from "react";
import "./loading.css";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToMain = () => {
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    };

    redirectToMain();
  }, [navigate]);
  return (
    <div className="body-loading">
      <div className="loading-content">
        <h2>Saylore</h2>
        <h2>Saylore</h2>
      </div>
    </div>
  );
};

export default Loading;
