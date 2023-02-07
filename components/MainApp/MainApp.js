import Chart from "../Chart/Chart";
import Providers from "../Providers/Providers";
import StorageTransfer from "../StorageTranfer/StorageTransfer";
import Logo from "../Logo/Logo";
const MainApp = () => {
  return (
    <div className="grid">
      <div className="sm:grid sm:grid-flow-col sm:auto-cols-max sm:ml-10">
        <div className="sm:order-3">
          <Chart />
        </div>
        <div className="sm:order-2">
          <Logo />
        </div>
        <div>
          <Providers />
        </div>
      </div>
      <div className="sm:-order-last">
        <StorageTransfer />
      </div>
    </div>
  );
};

export default MainApp;
