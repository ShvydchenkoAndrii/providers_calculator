import MainApp from "../components/MainApp/MainApp";
import Head from "next/head";
import React, { useState } from "react";

export const AppContext = React.createContext();
function Home() {
  const providers = {
    backlazeCom: [{ minPayment: 7, storagePrice: 0.005, transferPrice: 0.01 }],
    bunnyNet: [
      {
        maxPayment: 10,
        storagePriceHDD: 0.01,
        storagePriceSSD: 0.02,
        transferPrice: 0.01,
      },
    ],
    scalewayCom: [
      {
        storagePriceMulti: 0.06,
        storagePriceSingle: 0.03,
        transferPrice: 0.02,
      },
    ],
    vultrCom: [
      {
        minPayment: 5,
        storagePrice: 0.01,
        transferPrice: 0.01,
      },
    ],
  };

  const [storage, setStorage] = useState(100);
  const [transfer, setTransfer] = useState(400);
  const [bunnyStorage, setBunnyStorage] = useState({ hdd: true });
  const [scalewayStorage, setScalewayStorage] = useState({
    multi: false,
  });

  const handlerStorageVal = (e) => {
    setStorage(e.target.value);
  };

  const handlerTransferVal = (e) => {
    setTransfer(e.target.value);
  };

  const resultBacklazeCom = () => {
    const result = providers.backlazeCom.map(
      (item) => item.storagePrice * storage + item.transferPrice * transfer
    );
    return Math.max(7, result[0]).toFixed(2);
  };

  const resultBunnyNet = () => {
    const result = providers.bunnyNet.map(
      (item) =>
        (bunnyStorage.hdd ? item.storagePriceHDD : item.storagePriceSSD) *
          storage +
        item.transferPrice * transfer
    );

    return Math.min(10, result[0]).toFixed(2);
  };

  const resultScalewayCom = () => {
    const result = providers.scalewayCom.map(
      (item) =>
        (scalewayStorage.multi
          ? item.storagePriceMulti
          : item.storagePriceSingle) *
          (storage <= 75 ? 0 : storage - 75) +
        item.transferPrice * (transfer <= 75 ? 0 : transfer - 75)
    );

    return result[0].toFixed(2);
  };

  const resultVultrCom = () => {
    const result = providers.vultrCom.map(
      (item) => item.storagePrice * storage + item.transferPrice * transfer
    );

    return Math.max(5, result[0]).toFixed(2);
  };

  const value = {
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
  };

  return (
    <AppContext.Provider value={value}>
      <Head>
        <title>Providers calculator</title>
      </Head>
      <MainApp />
    </AppContext.Provider>
  );
}
export default Home;
