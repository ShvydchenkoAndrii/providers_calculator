import { useContext } from "react";
import { AppContext } from "../../pages";

const StorageTransfer = () => {
  const store = useContext(AppContext);
  const { storage, transfer, handlerStorageVal, handlerTransferVal } = store;
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:top-[30px] sm:left-[40px] bottom-[10px] left-[20%] absolute">
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
          onChange={(event) => handlerStorageVal(event)}
        ></input>
      </div>
      <div className="flex flex-col sm:w-full w-[250px]">
        <div>Transfer: {transfer} GB</div>
        <input
          type="range"
          id="transfer"
          name="transfer"
          step={1}
          min={0}
          max={1000}
          defaultValue={transfer}
          onChange={(event) => handlerTransferVal(event)}
        ></input>
      </div>
    </div>
  );
};

export default StorageTransfer;
