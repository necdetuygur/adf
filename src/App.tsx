import React from "react";
import Iko from "./components/Iko";
import FwAltin from "./components/FwAltin";
import FwDoviz from "./components/FwDoviz";
import Progress from "./components/shared/Progress";

function App() {
  const [progressVal, setProgressVal] = React.useState(0.0);
  React.useEffect(() => {
    setInterval(() => {
      setProgressVal((d) => {
        console.log(d);
        if (d > 99) {
          // eslint-disable-next-line
          window.location.href = window.location.href;
        }
        return (d = d + 0.1);
      });
    }, 100);
    document.addEventListener("click", function () {
      if (window != null) {
        // eslint-disable-next-line
        window.location.href = window.location.href;
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Progress val={progressVal} />
      <FwAltin />
      <FwDoviz />
      <Iko />
    </>
  );
}

export default App;
