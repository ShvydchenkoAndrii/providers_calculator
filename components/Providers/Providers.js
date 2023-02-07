import { useContext } from "react";
import { AppContext } from "../../pages";

const Providers = () => {
  const store = useContext(AppContext);
  const { bunnyStorage, scalewayStorage, setBunnyStorage, setScalewayStorage } =
    store;

  return (
    <div className="flex sm:flex-col sm:gap-10 gap-[10px] sm:left-0 sm:top-0 left-[5%] bottom-[140px] sm:relative absolute">
      <div className="sm:text-[18px] text-[14px]">
        <div>backlaze.com</div>
      </div>
      <div>
        <div className="text-[14px] sm:text-[18px]">bunny.net</div>
        <div className="flex">
          <div className="sm:text-[12px] text-[10px] mr-3">
            <input
              type="radio"
              id="hdd"
              name="hdd-ssd"
              value="hdd"
              required
              onChange={() => setBunnyStorage({ hdd: true })}
            ></input>
            <span> HDD</span>
          </div>
          <div className="sm:text-[12px] text-[10px]">
            <input
              type="radio"
              id="ssd"
              name="hdd-ssd"
              value="sdd"
              onChange={() => setBunnyStorage({ hdd: false })}
            ></input>
            <span> SSD</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[14px] sm:text-[18px]">scaleway.com</div>
        <div className="flex">
          <div className="sm:text-[12px] text-[10px] mr-3">
            <input
              onChange={() => setScalewayStorage({ multi: true })}
              type="radio"
              id="scalewayChoice1"
              name="scaleway"
              value="multi"
            ></input>
            <span> Multi</span>
          </div>
          <div className="sm:text-[12px] text-[10px] mr-3">
            <input
              onChange={() => setScalewayStorage({ multi: false })}
              type="radio"
              id="scalewayChoice2"
              name="scaleway"
              value="single"
              checked={!scalewayStorage.multi}
            ></input>
            <span> Single</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[14px] sm:text-[18px]">vultr.com</div>
      </div>
    </div>
  );
};

export default Providers;
