import logo from "/images/no_icon.png";
import Image from "next/image";
console.log(logo);
const Logo = () => {
  return (
    <div className="flex sm:flex-col absolute sm:relative sm:gap-[27px] sm:bottom-0 sm:left-0 bottom-[190px] gap-[50px] left-[7%]">
      <Image src={logo} alt="backlaze.com logo" width={50}></Image>
      <Image src={logo} alt="bunny.net logo" width={50}></Image>
      <Image src={logo} alt="scaleway.com logo" width={50}></Image>
      <Image src={logo} alt="vultr.com logo" width={50}></Image>
    </div>
  );
};

export default Logo;
