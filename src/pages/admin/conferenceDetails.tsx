import Image from "next/image";
import ContentImage from "../../asstes/images/Content.png";
import DragDrop from "@/components/DragDrop";
import { useEffect, useState } from "react";
import OrganizerImage from "../../asstes/images/organizer1.png";
import OrganizerList from "@/components/ConferenceInfo/OrganizerList";
import SpeakerList from "@/components/ConferenceInfo/SpeakerList";
import ScheduleList from "@/components/ConferenceInfo/ScheduleList";
import ConSponsorList from "@/components/ConferenceInfo/ConSponsorList";

const ConferenceDetails = () => {
  const [activeCard, setActiveCard] = useState<string>();

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-[105px]">
      <div className="pt-[16px] pb-[52px]">
        <h1 className="text-[48px] font-bold">[Conference name goes here]</h1>
        <p>
          Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
          fermentum.
        </p>
      </div>
      <div className="block sm:flex justify-between gap-[48px]">
        <div>
          <DragDrop setActiveCard={setActiveCard} activeCard={activeCard} />
        </div>
        <div className="max-w-[904px] sm:w-[904px] h-[664px] bg-[#F9FAFB] rounded">
          <div className="p-5 sm:p-10">
            {activeCard === "1" ? (
              <OrganizerList />
            ) : activeCard === "2" ? (
              <SpeakerList />
            ) : activeCard === "3" ? (
              <ScheduleList />
            ) : activeCard === "4" ? (
              <ConSponsorList />
            ) : <OrganizerList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
