import Image from "next/image";
import ContentImage from "../../asstes/images/Content.png";
import SponsorList from "@/components/Sponsor";
import ConferenceList from "@/components/Conference";

const Landingpage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={ContentImage} alt={""} />
      </div>
      <div className="flex justify-center items-center py-[50px]">
        <div className="">
          <div>
            <ConferenceList />
          </div>
        </div>
      </div>

          <div className="bg-[#F9FAFB]">
          <div className="flex justify-center items-center">
        <div className="">
          <div>
            <SponsorList />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};
export default Landingpage;
