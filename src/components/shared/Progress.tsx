function Progress(props: any) {
  return (
    <div className="progress mb-0" style={{ height: "2px" }}>
      <div
        className="progress-bar"
        role={"progressbar"}
        style={{ width: props.val + "%" }}
        aria-valuenow={props.val}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
}

export default Progress;
