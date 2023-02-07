import Chart from "../Chart/Chart";
import Providers from "../Providers/Providers";
import StorageTransfer from "../StorageTranfer/StorageTransfer";
import Logo from "../Logo/Logo";
const Desktop = () => {
  return (
    <div>
      <StorageTransfer />
      <div className="flex">
        <Providers />
        <Logo />
        <Chart />
      </div>
    </div>
  );
};

export default Desktop;
