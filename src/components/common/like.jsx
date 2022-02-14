const Like = ({ isLiked, onClick }) => {
  return (
    <span
      style={{ cursor: "pointer" }}
      className={`fa ${isLiked ? "fa-heart" : "fa-heart-o"}`}
      onClick={onClick}
    ></span>
  );
};

export default Like;
