import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const storageVal = useRef(null);
  const transferVal = useRef(null);
  const [storage, setStorage] = useState();
  const [transfer, setTransfer] = useState();

  const handlerStorageVal = () => {
    setStorage((prev) => (prev = storageVal.current.value));
  };

  const handlerTransferVal = () => {
    setTransfer((prev) => (prev = transferVal.current.value));
  };

  useEffect(() => {
    setStorage((prev) => (prev = storageVal.current.value));
    setTransfer((prev) => (prev = transferVal.current.value));
  }, []);
  return (
    <div className={styles.container}>
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
          defaultValue={100}
          onChange={() => handlerStorageVal()}
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
          defaultValue={400}
          onChange={() => handlerTransferVal()}
        ></input>
        Transfer {transfer}
      </div>
    </div>
  );
}
