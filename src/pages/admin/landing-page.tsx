import Image from "next/image";
import ContentImage from "../../asstes/images/Hero.png";
// import ContentImage from '../../asstes/images/Content.png'
import SponsorList from "@/components/Sponsor";
import ConferenceList from "@/components/Conference";
import { TypedDocumentNode, gql, useQuery } from "@apollo/client";
import ContentSmall from "../../asstes/images/ContentSmall.png";


const FILMS_QUERY = gql`
  {
    conferences {
      id
      name
      startDate
      slogan
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
      silverSponsors {
        image {
          url
        }
      }
      bronzeSponsors {
        image {
          url
        }
      }
    }
  }
`;


const Landingpage = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (error) return <pre>{error.message}</pre>;
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="hidden sm:block max-h-[100vh]">
          <Image src={ContentImage} alt={""} />
        </div>
        <div className="block sm:hidden">
          <Image src={ContentSmall} alt={""} />
        </div>
      </div>
      <div className="flex justify-center items-center pb-[50px]">
        <div className="">
          <div>
            <ConferenceList data={data} loading ={loading} />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB]">
        <div className="flex justify-center items-center">
          <div className="">
            <div>
              <SponsorList data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landingpage;
