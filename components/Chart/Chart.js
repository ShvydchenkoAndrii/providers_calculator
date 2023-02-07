import { useContext } from "react";
import { AppContext } from "../../pages";
import useMediaQuery from "../useMedia";
const Chart = () => {
  const store = useContext(AppContext);
  const {
    resultBacklazeCom,
    resultBunnyNet,
    resultScalewayCom,
    resultVultrCom,
  } = store;
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <div className="sm:flex sm:flex-col h-[350px] sm:h-[280px] sm:w-0 w-[450px] items-start sm:ml-3 border-l-2 sm:rotate-0 -rotate-90 absolute bottom-[220px]  sm:bottom-0 sm:left-0 left-[-30px] sm:relative">
      <div className="flex sm:absolute ">
        <div
          className={`bg-green my-5 sm:my-1`}
          style={{
            width: `${resultBacklazeCom() * 5}px`,
            height: "25px",
          }}
        ></div>
        <div className="sm:my-1 my-5 sm:rotate-0 rotate-90">
          {resultBacklazeCom()}$
        </div>
      </div>
      <div className="flex sm:absolute sm:top-[70px]">
        <div
          className={`bg-green my-[45px] sm:my-2`}
          style={{ width: `${resultBunnyNet() * 5}px`, height: "30px" }}
        ></div>
        <div className="sm:my-2 my-[45px] sm:rotate-0 rotate-90">
          {resultBunnyNet()}$
        </div>
      </div>
      <div className="flex sm:absolute sm:top-[160px]">
        <div
          className={`bg-green sm:my-2 my-8`}
          style={{
            width: `${resultScalewayCom() * 5}px`,
            height: "30px",
          }}
        ></div>
        <div className="sm:my-2 my-8 sm:rotate-0 rotate-90">
          {resultScalewayCom()}$
        </div>
      </div>
      <div className="flex sm:absolute sm:top-[240px]">
        <div
          className={`bg-green sm:my-3 my-9`}
          style={{ width: `${resultVultrCom() * 5}px`, height: "25px" }}
        ></div>
        <div className="sm:my-3 my-9 sm:rotate-0 rotate-90">
          {resultVultrCom()}$
        </div>
      </div>
    </div>
  );
};

export default Chart;
