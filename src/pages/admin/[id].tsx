import Image from "next/image";
import ContentImage from "../../asstes/images/Content.png";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import OrganizerList from "@/components/ConferenceInfo/OrganizerList";
import SpeakerList from "@/components/ConferenceInfo/SpeakerList";
import ScheduleList from "@/components/ConferenceInfo/ScheduleList";
import ConSponsorList from "@/components/ConferenceInfo/ConSponsorList";
import Loader from "@/components/Loader";
import DragDrop from "@/components/DragDrop";

const query = gql`
  query GetDataItem($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      startDate
      organizers {
        name
        aboutShort
        image {
          url
        }
        noPhotography
      }
      speakers {
        name
        aboutShort
        image {
          url
        }
        social {
          twitter
          linkedin
          github
          googleMaps
        }
      }
      schedules {
        day
        description
        intervals {
          title
          begin
          end
        }
      }
      sponsors {
        name
        aboutShort
        image {
          url
        }
      }
      goldSponsors {
        image {
          url
        }
      }
    }
  }
`;

const ConferenceDetails = () => {
  const [activeCard, setActiveCard] = useState<string>('');

  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(query, {
    variables: { id },
  });
  console.log("single data--", data);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-[105px]">
      <div className="pt-[16px] pb-[52px]">
        <h1 className="text-[48px] font-bold">{data?.conference.name} </h1>
        <p>{data?.conference.slogan}</p>
      </div>
      <div className="block sm:flex justify-between gap-[48px]">
        <div>
          <DragDrop setActiveCard={setActiveCard} activeCard={activeCard} />
        </div>
        <div className="max-w-[904px] sm:w-[904px] h-[664px] bg-[#F9FAFB] rounded overflow-y-scroll">
          <div className="p-5 sm:p-10">
            {loading ? (
              <p className="flex items-center justify-center">
              <Loader/>
              </p>
            ) : activeCard === "1" ? (
              <OrganizerList data={data?.conference?.organizers} />
            ) : activeCard === "2" ? (
              <SpeakerList data={data?.conference?.speakers} />
            ) : activeCard === "3" ? (
              <ScheduleList data={data?.conference?.schedules} />
            ) : activeCard === "4" ? (
              <ConSponsorList data={data?.conference?.sponsors} />
            ) : (
              <OrganizerList data={data?.conference?.organizers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
