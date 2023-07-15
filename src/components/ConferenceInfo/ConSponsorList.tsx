import React from "react";
import Image from "next/image";

import OrganizerImage from "../../asstes/images/Sponsor1.png";
import OrganizerImage2 from "../../asstes/images/Sponsor2.png";
import OrganizerImage3 from "../../asstes/images/Sponsor3.png";

const ConSponsorList = () => {
  return (
    <div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded flex gap-3">
          <Image src={OrganizerImage} alt={""} />
          <div>
            <p className="text-xl font-bold mb-5">Siddhartha</p>
            <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded flex gap-3">
          <Image src={OrganizerImage2} alt={""} />
          <div>
            <p className="text-xl font-bold mb-5">Siddhartha</p>
            <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded flex gap-3">
          <Image src={OrganizerImage3} alt={""} />
          <div>
            <p className="text-xl font-bold mb-5">Siddhartha</p>
            <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConSponsorList;
