import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoreProjects } from "../actions/projectActions";

const Button = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setLoading(true);
    dispatch(fetchMoreProjects());
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? "Loading..." : "See More Projects"}
    </button>
  );
};
export default Button;