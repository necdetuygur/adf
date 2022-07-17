import loadingGif from "../../assets/loading.gif";

function Loading() {
  return (
    <span className="p-1">
      <img width="9" src={loadingGif} alt="" />
    </span>
  );
}

export default Loading;
