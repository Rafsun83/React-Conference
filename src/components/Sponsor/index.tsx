import Image from "next/image";

import LayerImage from "../../asstes/images/Layer.png";
import SisphusImage from "../../asstes/images/Sysyphus.png";
import CircoolesImage from "../../asstes/images/Circooles.png";
import CatalogImage from "../../asstes/images/Catalog.png";
import GoforeImage from "../../asstes/images/Gofore.png";
import Sisphus2Image from "../../asstes/images/Sisyphus2.png";
import QuotientImage from "../../asstes/images/Quotient.png";
import GoldImage from '../../asstes/images/Gold.png'
import SilverImage from '../../asstes/images/Silver.png'
import BronzeImage from '../../asstes/images/Bronze.png'

const SponsorList = () => {
  return (
    <div className=" py-[100px] px-[15px]">
      <h1 className="text-[48px] font-bold flex items-center justify-center">
        Our Sponsor
      </h1>
      <div>
        <span className="flex items-center justify-center py-8 text-[#667085]">
          <Image src={GoldImage} alt={""}/>
        </span>
        <div className="flex gap-3 justify-center">
          <Image src={LayerImage} alt={""} />
          <Image src={SisphusImage} alt={""} />
        </div>
      </div>
      <div>
        <span className="flex items-center justify-center py-8 text-[#667085]">
        <Image src={SilverImage} alt={""}/>
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
        <Image src={BronzeImage} alt={""}/>
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
