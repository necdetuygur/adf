import Iko from "./components/Iko";
import FwAltin from "./components/FwAltin";
import FwDoviz from "./components/FwDoviz";

function App() {
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
