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
  const storageVal = useRef(null);
  const transferVal = useRef(null);
  const [storage, setStorage] = useState(100);
  const [transfer, setTransfer] = useState(400);
  const [bunnyStorage, setBunnyStorage] = useState({ hdd: true, ssd: false });
  const [scalewayStorage, setScalewayStorage] = useState({
    multi: true,
    single: false,
  });

  const handlerStorageVal = (e) => {
    setStorage((prev) => (prev = e.target.value));
  };

  const handlerTransferVal = (e) => {
    setTransfer((prev) => (prev = e.target.value));
  };

  const resultBacklazeCom = () => {
    const result = providers.backlazeCom.map(
      (item) => item.storagePrice * storage + item.transferPrice * transfer
    );
    if (result[0] < 7) {
      return 7;
    } else {
      return result[0].toFixed(2);
    }
  };

  const resultBunnyNet = () => {
    const result = providers.bunnyNet.map(
      (item) =>
        (bunnyStorage.hdd ? item.storagePriceHDD : item.storagePriceSSD) *
          storage +
        item.transferPrice * transfer
    );
    if (result[0] > 10) {
      return 10;
    } else {
      return result[0].toFixed(2);
    }
  };

  const resultScalewayCom = () => {
    const result = providers.scalewayCom.map(
      (item) =>
        (scalewayStorage.multi
          ? item.storagePriceMulti
          : item.storagePriceSingle) *
          (storage < 75 ? 0 : storage) +
        item.transferPrice * transfer
    );
    return result[0].toFixed(2);
  };

  const resultVultrCom = () => {
    const result = providers.vultrCom.map(
      (item) => item.storagePrice * storage + item.transferPrice * transfer
    );
    if (result[0] < 5) {
      return 5;
    } else {
      return result[0].toFixed(2);
    }
  };
  console.log(bunnyStorage);
  return (
    <div>
      <Head>
        <title>Providers calculator</title>
      </Head>
      <div>
        <input
          ref={storageVal}
          type="range"
          id="storage"
          name="storage"
          min={0}
          max={1000}
          step={1}
          defaultValue={storage}
          onChange={() => handlerStorageVal(event)}
        ></input>
        Storage {storage}
      </div>
      <div>
        <input
          ref={transferVal}
          type="range"
          id="transfer"
          name="transfer"
          step={1}
          min={0}
          max={1000}
          defaultValue={transfer}
          onChange={() => handlerTransferVal(event)}
        ></input>
        Transfer {transfer}
      </div>
      <div>
        <div className="flex gap-1">
          <span>backlaze.com</span>
          <div
            className={`bg-green`}
            style={{ width: `${resultBacklazeCom() * 5}px` }}
          ></div>
          <div>{resultBacklazeCom()}$</div>
        </div>
        <div className="flex gap-2">
          <div>
            <div>bunny.net</div>
            <div>
              <input
                onChange={() => setBunnyStorage({ hdd: true, sdd: false })}
                type="radio"
                id="bunnyChoice1"
                name="bunny"
                value="hdd"
              ></input>
              <label htmlFor="bunnyChoice1">HDD</label>
              <input
                onChange={() => setBunnyStorage({ hdd: false, sdd: true })}
                type="radio"
                id="bunnyChoice2"
                name="bunny"
                value="sdd"
              ></input>
              <label htmlFor="bunnyChoice2">SDD</label>
            </div>
          </div>
          <div
            className={`bg-green h-[50px]`}
            style={{ width: `${resultBunnyNet() * 5}px` }}
          ></div>
          <div>{resultBunnyNet()}$</div>
        </div>
        <div className="flex gap-2">
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
              ></input>
              <label htmlFor="scalewayChoice1">Multi</label>
              <input
                onChange={() =>
                  setScalewayStorage({ multi: true, single: false })
                }
                type="radio"
                id="scalewayChoice2"
                name="scaleway"
                value="single"
              ></input>
              <label htmlFor="scalewayChoice2">Single</label>
            </div>
          </div>
          <div
            className={`bg-green h-[50px]`}
            style={{ width: `${resultScalewayCom() * 5}px` }}
          ></div>
          <div>{resultScalewayCom()}$</div>
        </div>
        <div className="flex gap-1">
          <span>vultr.com</span>
          <div
            className={`bg-green`}
            style={{ width: `${resultVultrCom() * 5}px` }}
          ></div>
          <div>{resultVultrCom()}$</div>
        </div>
      </div>
    </div>
  );
}
