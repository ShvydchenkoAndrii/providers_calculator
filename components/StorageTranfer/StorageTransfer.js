const StorageTransfer = ({ storage, transfer, storageVal, transferVal }) => {
  return (
    <div className="flex justify-around gap-10 absolute">
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
          onChange={(event) => storageVal(event)}
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
