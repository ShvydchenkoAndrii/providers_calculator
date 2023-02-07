import { useContext } from "react";
import { AppContext } from "../../pages";

const Chart = () => {
  const store = useContext(AppContext);
  const {
    resultBacklazeCom,
    resultBunnyNet,
    resultScalewayCom,
    resultVultrCom,
  } = store;

  const bgColorBack = () => {
    if (
      resultBacklazeCom() < resultBunnyNet() &&
      resultBacklazeCom() < resultScalewayCom() &&
      resultBacklazeCom() < resultVultrCom()
    ) {
      return "bg-red";
    } else {
      return "bg-gray";
    }
  };

  const bgColorBunny = () => {
    if (
      resultBunnyNet() < resultBacklazeCom() &&
      resultBunnyNet() < resultScalewayCom() &&
      resultBunnyNet() < resultVultrCom()
    ) {
      return "bg-red";
    } else {
      return "bg-gray";
    }
  };

  const bgColorScale = () => {
    if (
      resultScalewayCom() < resultBacklazeCom() &&
      resultScalewayCom() < resultBunnyNet() &&
      resultScalewayCom() < resultVultrCom()
    ) {
      return "bg-red";
    } else {
      return "bg-gray";
    }
  };

  const bgColorVultr = () => {
    if (
      resultVultrCom() < resultBacklazeCom() &&
      resultVultrCom() < resultBunnyNet() &&
      resultVultrCom() < resultScalewayCom()
    ) {
      return "bg-red";
    } else {
      return "bg-gray";
    }
  };
  
  return (
    <div className="sm:flex sm:flex-col h-[350px] sm:h-[273px] sm:w-0 w-[450px] items-start sm:ml-3 -ml-2 border-l-2 sm:rotate-0 -rotate-90">
      <div className="flex ">
        <div
          className={`${bgColorBack()} my-9 sm:my-2`}
          style={{
            width: `${resultBacklazeCom() * 4}px`,
            height: "30px",
          }}
        ></div>
        <div className="sm:my-2 my-9 sm:rotate-0 rotate-90">
          {resultBacklazeCom()}$
        </div>
      </div>
      <div className="flex sm:top-[70px]">
        <div
          className={`${bgColorBunny()} my-6 sm:my-9`}
          style={{ width: `${resultBunnyNet() * 4}px`, height: "30px" }}
        ></div>
        <div className="sm:my-9 my-6 sm:rotate-0 rotate-90">
          {resultBunnyNet()}$
        </div>
      </div>
      <div className="flex sm:top-40">
        <div
          className={`${bgColorScale()} sm:my-4 my-10`}
          style={{
            width: `${resultScalewayCom() * 4}px`,
            height: "30px",
          }}
        ></div>
        <div className="sm:my-4 my-10 sm:rotate-0 rotate-90">
          {resultScalewayCom()}$
        </div>
      </div>
      <div className="flex sm:top-60">
        <div
          className={`${bgColorVultr()} sm:my-7 my-5`}
          style={{ width: `${resultVultrCom() * 4}px`, height: "25px" }}
        ></div>
        <div className="sm:my-7 my-5 sm:rotate-0 rotate-90">
          {resultVultrCom()}$
        </div>
      </div>
    </div>
  );
};

export default Chart;
