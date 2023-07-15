import Image from "next/image";
import ContentImage from "../../asstes/images/Content.png";
import LayersLogo from "@/asstes/icon/LayersLogo";
import SisphusLogo from "@/asstes/icon/SisphusLogo";
import CircoolesLogo from "@/asstes/icon/CircoolesLogo";
import GoforeLogo from "@/asstes/icon/GoforeLogo";
import CatalogLogo from "@/asstes/icon/CatalogLogo";
import SisypusLogo from "@/asstes/icon/SisypusLogo";
import Quotient from "@/asstes/icon/Quotient";
import CircoolesLogo2 from "@/asstes/icon/CircoolesLogo2";

import LayerImage from "../../asstes/images/Layer.png";
import SisphusImage from "../../asstes/images/Sysyphus.png";
import CircoolesImage from "../../asstes/images/Circooles.png";
import CatalogImage from "../../asstes/images/Catalog.png";
import GoforeImage from "../../asstes/images/Gofore.png";
import Sisphus2Image from "../../asstes/images/Sisyphus2.png";
import QuotientImage from "../../asstes/images/Quotient.png";
import Circooles2Image from "../../asstes/images/Circooles2.png";

const SponsorList = () => {
  const numRows = 3;
  return (
    <div className=" py-[100px] px-[15px]">
      <h1 className="text-[48px] font-bold flex items-center justify-center">
        Our Sponsor
      </h1>
      <div>
        <span className="flex items-center justify-center py-8 text-[#667085]">
          Gold Sponsors
        </span>
        <div className="flex gap-3 justify-center">
          <Image src={LayerImage} alt={""} />
          <Image src={SisphusImage} alt={""} />
        </div>
      </div>
      <div>
        <span className="flex items-center justify-center py-8 text-[#667085]">
          Silver Sponsors
        </span>
        <div className="flex gap-4 justify-center items-center flex-wrap ">
          <div className="flex gap-3">
            <Image src={CircoolesImage} alt={""} />
            <Image src={CatalogImage} alt={""} />
          </div>
          <Image src={GoforeImage} alt={""} />
        </div>
      </div>
      <div>
        <span className="flex items-center justify-center py-8 text-[#667085]">
          Bronze Sponsors
        </span>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <div className="flex gap-3">
            <Image src={Sisphus2Image} alt={""} />
            <Image src={QuotientImage} alt={""} />
          </div>
          <div className="flex gap-3">
            <Image src={LayerImage} alt={""} />
            <Image src={GoforeImage} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SponsorList;
