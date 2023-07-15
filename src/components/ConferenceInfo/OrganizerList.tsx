import React from "react";
import Image from "next/image";

import OrganizerImage from '../../asstes/images/organizer1.png'
import OrganizerImage2 from '../../asstes/images/organizer2.png'
import OrganizerImage3 from '../../asstes/images/organizer3.png'

const OrganizerList = () => {
  return (
      <div>
          <div className="mb-3">
              <div className="bg-white p-5 rounded flex gap-3">
                <Image src={OrganizerImage} alt={""}/>
                <div>
                  <p className="text-xl font-bold mb-5">Siddhartha</p>
                  <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
               </div>
            </div>
           </div>
           <div className="mb-3">
           <div className="bg-white p-5 rounded flex gap-3">
                <Image src={OrganizerImage2} alt={""}/>
                <div>
                  <p className="text-xl font-bold mb-5">Siddhartha</p>
                  <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
               </div>
            </div>
            </div>
            <div className="mb-3">
            <div className="bg-white p-5 rounded flex gap-3">
                <Image src={OrganizerImage3} alt={""}/>
                <div>
                  <p className="text-xl font-bold mb-5">Siddhartha</p>
                  <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
               </div>
            </div>
           </div>
    </div>
  );
};

export default OrganizerList;
