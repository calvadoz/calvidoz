import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/movies", { replace: true });
  };

  return (
    <React.Fragment>
      <h1>Movie Form {params.id}</h1>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
