import Chart from "../Chart/Chart";
import Providers from "../Providers/Providers";
import StorageTransfer from "../StorageTranfer/StorageTransfer";

const Desktop = () => {
  return (
    <div>
      <StorageTransfer />
      <div className="flex absolute top-[100px]">
        <Providers />
        <Chart />
      </div>
    </div>
  );
};

export default Desktop;
