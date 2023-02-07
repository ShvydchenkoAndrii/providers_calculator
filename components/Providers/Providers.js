import { useContext } from "react";
import { AppContext } from "../../pages";

const Providers = () => {
  const store = useContext(AppContext);
  const { bunnyStorage, scalewayStorage, setBunnyStorage, setScalewayStorage } =
    store;

  return (
    <div className="flex sm:flex-col sm:gap-10 gap-2.5 sm:mx-0 mx-10 ">
      <div className="sm:text-lg text-sm">
        <div>backlaze.com</div>
      </div>
      <div>
        <div className="text-sm sm:text-lg">bunny.net</div>
        <div className="flex">
          <label className="sm:text-xs text-[10px] sm:mr-3 mr-3">
            <input
              type="radio"
              id="hdd"
              name="hdd-ssd"
              value="hdd"
              defaultChecked={bunnyStorage.hdd}
              onChange={() => setBunnyStorage({ hdd: true })}
            ></input>
            <span> HDD</span>
          </label>
          <label className="sm:text-xs text-[10px]">
            <input
              type="radio"
              id="ssd"
              name="hdd-ssd"
              value="sdd"
              onChange={() => setBunnyStorage({ hdd: false })}
            ></input>
            <span> SSD</span>
          </label>
        </div>
      </div>
      <div>
        <div className="text-sm sm:text-lg">scaleway.com</div>
        <div className="flex">
          <label className="sm:text-xs text-[10px] mr-3">
            <input
              onChange={() => setScalewayStorage({ multi: true })}
              type="radio"
              id="scalewayChoice1"
              name="scaleway"
              value="multi"
            ></input>
            <span> Multi</span>
          </label>
          <label className="sm:text-xs text-[10px] mr-3">
            <input
              onChange={() => setScalewayStorage({ multi: false })}
              type="radio"
              id="scalewayChoice2"
              name="scaleway"
              value="single"
              defaultChecked={!scalewayStorage.multi}
            ></input>
            <span> Single</span>
          </label>
        </div>
      </div>
      <div>
        <div className="text-sm sm:text-lg">vultr.com</div>
      </div>
    </div>
  );
};

export default Providers;
