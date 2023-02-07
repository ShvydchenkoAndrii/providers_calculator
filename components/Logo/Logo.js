import logo from "/images/no_icon.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex sm:flex-col sm:gap-6 gap-10 sm:mt-0 mt-20 sm:mx-0 mx-[70px]">
      <Image src={logo} alt="backlaze.com logo" width={50}></Image>
      <Image src={logo} alt="bunny.net logo" width={50}></Image>
      <Image src={logo} alt="scaleway.com logo" width={50}></Image>
      <Image src={logo} alt="vultr.com logo" width={50}></Image>
    </div>
  );
};

export default Logo;
