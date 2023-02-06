const Providers = ({ bunnyStorage, scalewayStorage, setBunnyStorage, setScalewayStorage}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex">
        <div>backlaze.com</div>
      </div>
      <div>
        <div>bunny.net</div>
        <div>
          <label className="text-[12px] mr-3 ">
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
          <label className="text-[12px]">
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
        <div>scaleway.com</div>
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
        <span>vultr.com</span>
      </div>
    </div>
  );
};

export default Providers;
