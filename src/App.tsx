import React from "react";
import Iko from "./components/Iko";
import FwAltin from "./components/FwAltin";
import FwDoviz from "./components/FwDoviz";

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line
      window.location.href = window.location.href;
    }, 90e3);
    // eslint-disable-next-line
  }, []);
  document.addEventListener("click", function () {
    if (window != null) {
      // eslint-disable-next-line
      window.location.href = window.location.href;
    }
  });
  return (
    <>
      <FwAltin />
      <FwDoviz />
      <Iko />
    </>
  );
}

export default App;
