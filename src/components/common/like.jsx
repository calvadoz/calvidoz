const Like = (props) => {
  const { isLiked } = props;
  return (
    <span
      style={{ cursor: "pointer" }}
      className={`fa ${isLiked ? "fa-heart" : "fa-heart-o"}`}
      onClick={props.onClick}
    ></span>
  );
};

export default Like;
