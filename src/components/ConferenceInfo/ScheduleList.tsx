import React from "react";
import Image from "next/image";

import OrganizerImage from "../../asstes/images/organizer1.png";
import OrganizerImage2 from "../../asstes/images/organizer2.png";
import OrganizerImage3 from "../../asstes/images/organizer3.png";

interface Props {
  data?: any;
}

const ScheduleList = ({ data }: Props) => {
  return (
    <div>
      {data?.map((item: any, index: any) => (
        <>
          <div className="mb-3">
            <div className="bg-white p-5 rounded">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold mb-5">{item.description}</p>
                <p>{item.day}</p>
              </div>
              {item.intervals.map((interval: any, index: any) => (
                <>
                  <div>
                    <div className="mb-3">
                      <p className="text-sm font-normal">
                        Duration: {`${interval.begin} - ${interval.end}`}
                      </p>
                      <li className="text-sm font-normal">{ interval.title}</li>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ScheduleList;
