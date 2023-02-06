const Providers = ({
  bunnyStorage,
  scalewayStorage,
  setBunnyStorage,
  setScalewayStorage,
}) => {
  return (
    <div className="flex sm:flex-col sm:gap-10 gap-4 sm:left-0 sm:top-0 left-10 bottom-[100px] sm:relative absolute">
      <div className="sm:text-[18px] text-[14px]">
        <div>backlaze.com</div>
      </div>
      <div>
        <div className="text-[14px] sm:text-[18px]">bunny.net</div>
        <div>
          <label className="sm:text-[12px] text-[10px] mr-3 ">
            <input
              onChange={() => setBunnyStorage({ hdd: true, sdd: false })}
              type="radio"
              id="hdd"
              name="hdd-ssd"
              value="hdd"
              checked={bunnyStorage.hdd}
            ></input>
            <span> HDD</span>
          </label>
          <label className="sm:text-[12px] text-[10px]">
            <input
              onChange={() => setBunnyStorage({ hdd: false, sdd: true })}
              type="radio"
              id="ssd"
              name="hdd-ssd"
              value="sdd"
            ></input>
            <span> SSD</span>
          </label>
        </div>
      </div>
      <div>
        <div className="text-[14px] sm:text-[18px]">scaleway.com</div>
        <div>
          <label className="text-[12px] mr-3">
            <input
              onChange={() =>
                setScalewayStorage({ multi: true, single: false })
              }
              type="radio"
              id="scalewayChoice1"
              name="scaleway"
              value="multi"
              checked={scalewayStorage.multi}
            ></input>
            <span> Multi</span>
          </label>
          <label className="text-[12px]">
            <input
              onChange={() =>
                setScalewayStorage({ multi: false, single: true })
              }
              type="radio"
              id="scalewayChoice2"
              name="scaleway"
              value="single"
            ></input>
            <span> Single</span>
          </label>
        </div>
      </div>
      <div>
        <div className="text-[14px] sm:text-[18px]">vultr.com</div>
      </div>
    </div>
  );
};

export default Providers;