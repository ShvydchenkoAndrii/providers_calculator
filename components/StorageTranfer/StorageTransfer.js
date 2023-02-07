import { useContext } from "react";
import { AppContext } from "../../pages";

const StorageTransfer = () => {
  const store = useContext(AppContext);
  const { storage, transfer, storageVal, transferVal } = store;
  return (
    <div className="flex justify-around gap-10 sm:top-[30px] bottom-[40px] left-[80px] absolute">
      <div className="flex flex-col">
        <div>Storage: {storage} GB</div>
        <input
          type="range"
          id="storage"
          name="storage"
          min={0}
          max={1000}
          step={1}
          defaultValue={storage}
          // onChange={(event) => storageVal(event)}
        ></input>
      </div>
      <div className="flex flex-col">
        <div>Transfer: {transfer} GB</div>
        <input
          type="range"
          id="transfer"
          name="transfer"
          step={1}
          min={0}
          max={1000}
          defaultValue={transfer}
          onChange={(event) => transferVal(event)}
        ></input>
      </div>
    </div>
  );
};

export default StorageTransfer;
