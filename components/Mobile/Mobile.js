import { useContext } from "react";
import { AppContext } from "../../pages";
import Chart from "../Chart/Chart";
import Providers from "../Providers/Providers";
import StorageTransfer from "../StorageTranfer/StorageTransfer";

const Mobile = () => {
  const store = useContext(AppContext);
  const {
    storage,
    transfer,
    handlerStorageVal,
    handlerTransferVal,
    bunnyStorage,
    scalewayStorage,
    setBunnyStorage,
    setScalewayStorage,
    resultBacklazeCom,
    resultBunnyNet,
    resultScalewayCom,
    resultVultrCom,
  } = store;

  return (
    <div>
      {/* <Chart
        resultBacklazeCom={resultBacklazeCom}
        resultBunnyNet={resultBunnyNet}
        resultScalewayCom={resultScalewayCom}
        resultVultrCom={resultVultrCom}
      /> */}
      <Providers
        bunnyStorage={bunnyStorage}
        scalewayStorage={scalewayStorage}
        setBunnyStorage={setBunnyStorage}
        setScalewayStorage={setScalewayStorage}
      />
      <StorageTransfer
        storage={storage}
        transfer={transfer}
        storageVal={(e) => handlerStorageVal(e)}
        transferVal={(e) => handlerTransferVal(e)}
      />
    </div>
  );
};

export default Mobile;
