import React from "react";
import Image from "next/image";

import OrganizerImage from "../../asstes/images/organizer1.png";
import OrganizerImage2 from "../../asstes/images/organizer2.png";
import OrganizerImage3 from "../../asstes/images/organizer3.png";

const ScheduleList = () => {
  return (
    <div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold mb-5">Siddhartha</p>
            <p>Wednesday</p>
          </div>
          <div>
            <div className="mb-3">
              <p className="text-sm font-normal">Duration: 5:00 - 6:00 </p>
              <li className="text-sm font-normal">Registration</li>
            </div>
            <div className="mb-3">
              <p className="text-sm font-normal">Duration: 6:00 - 7:00 </p>
              <li className="text-sm font-normal">Starting</li>
            </div>
            <div className="mb-3">
              <p className="text-sm font-normal">Duration: 8:00 - 9:00 </p>
              <li className="text-sm font-normal">Dinner</li>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
      <div className="bg-white p-5 rounded">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold mb-5">Ronald Richards</p>
            <p>Wednesday</p>
          </div>
          <div>
            <div className="mb-3">
              <p className="text-sm font-normal">Duration: 5:00 - 6:00 </p>
              <li className="text-sm font-normal">Registration</li>
            </div>
            <div className="mb-3">
              <p className="text-sm font-normal">Duration: 6:00 - 7:00 </p>
              <li className="text-sm font-normal">Starting</li>
            </div>
            <div className="mb-3">
              <p className="text-sm font-normal">Duration: 8:00 - 9:00 </p>
              <li className="text-sm font-normal">Dinner</li>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default ScheduleList;
