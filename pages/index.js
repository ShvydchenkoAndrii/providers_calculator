import Head from "next/head";
import { useRef, useState } from "react";

export default function Home() {
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
  const [bunnyStorage, setBunnyStorage] = useState({ hdd: true, ssd: false });
  const [scalewayStorage, setScalewayStorage] = useState({
    multi: true,
    single: false,
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
    const result = providers.scalewayCom.map((item) => {
      if (storage <= 75 || transfer <= 75) {
        return 0;
      } else {
        return (
          (scalewayStorage.multi
            ? item.storagePriceMulti
            : item.storagePriceSingle) *
            (storage - 75) +
          item.transferPrice * (transfer - 75)
        );
      }
    });
    return result[0].toFixed(2);
  };

  const resultVultrCom = () => {
    const result = providers.vultrCom.map(
      (item) => item.storagePrice * storage + item.transferPrice * transfer
    );

    return Math.max(5, result[0]).toFixed(2);
  };
  console.log(bunnyStorage);
  return (
    <div className="flex items-start m-10 static w-full">
      <Head>
        <title>Providers calculator</title>
      </Head>
      <div>
        <div className="flex justify-around gap-10 absolute">
          <div className="flex flex-col">
            Storage: {storage} GB
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
          <div className="flex flex-col">
            Transfer: {transfer} GB
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
        <div className="flex absolute top-[100px]">
          <div className="flex flex-col gap-10">
            <div>
              <div>backlaze.com</div>
            </div>
            <div>
              <div>bunny.net</div>
              <div>
                <label>
                  <input
                    onChange={() => setBunnyStorage({ hdd: true, sdd: false })}
                    type="radio"
                    id="hdd"
                    name="hdd-ssd"
                    value="hdd"
                    checked={bunnyStorage.hdd}
                  ></input>
                  HDD
                </label>
                <label>
                  <input
                    onChange={() => setBunnyStorage({ hdd: false, sdd: true })}
                    type="radio"
                    id="ssd"
                    name="hdd-ssd"
                    value="sdd"
                  ></input>
                  SDD
                </label>
              </div>
            </div>
            <div>
              <div>scaleway.com</div>
              <div>
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
                <label htmlFor="scalewayChoice1" className="p-2">
                  Multi
                </label>
                <input
                  onChange={() =>
                    setScalewayStorage({ multi: false, single: true })
                  }
                  type="radio"
                  id="scalewayChoice2"
                  name="scaleway"
                  value="single"
                ></input>
                <label htmlFor="scalewayChoice2">Single</label>
              </div>
            </div>
            <div>
              <span>vultr.com</span>
            </div>
          </div>
          <div className="flex flex-col items-start border-l-2 relative">
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
        </div>
      </div>
    </div>
  );
}
