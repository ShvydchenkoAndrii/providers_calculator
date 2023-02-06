const Chart = ({
  resultBacklazeCom,
  resultBunnyNet,
  resultScalewayCom,
  resultVultrCom,
}) => {
  return (
    <div className="flex sm:flex-col items-start ml-3 border-l-2 relative">
      <div className="flex absolute">
        <div
          className={`bg-green`}
          style={{
            width: `${resultBacklazeCom() * 5}px`,
            height: "25px",
          }}
        ></div>
        <div>{resultBacklazeCom()}$</div>
      </div>
      <div className="flex absolute top-[70px]">
        <div
          className={`bg-green`}
          style={{ width: `${resultBunnyNet() * 5}px`, height: "30px" }}
        ></div>
        <div>{resultBunnyNet()}$</div>
      </div>
      <div className="flex absolute top-[160px]">
        <div
          className={`bg-green`}
          style={{
            width: `${resultScalewayCom() * 5}px`,
            height: "30px",
          }}
        ></div>
        <div>{resultScalewayCom()}$</div>
      </div>
      <div className="flex absolute top-[240px]">
        <div
          className={`bg-green `}
          style={{ width: `${resultVultrCom() * 5}px`, height: "25px" }}
        ></div>
        <div>{resultVultrCom()}$</div>
      </div>
    </div>
  );
};

export default Chart;
