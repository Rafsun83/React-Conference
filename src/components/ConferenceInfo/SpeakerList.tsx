import React from "react";
import Image from "next/image";

import SpeakerTweet from "@/asstes/icon/SpeakerTweet";
import SpeakerLinkedin from "@/asstes/icon/SpeakerLinkedin";
import SpeakerGlobal from "@/asstes/icon/SpeakerGlobal";
import SpeakerGit from "@/asstes/icon/SpeakerGit";
import Link from "next/link";

interface Props {
  data?: any;
}

const SpeakerList = ({ data }: Props) => {
  return (
    <div>
      {data?.map((item: any, index: any) => (
        <>
          <div key={index} className="mb-3">
            <div className="bg-white p-5 rounded flex gap-3">
              <Image src={item.image.url} width={140} height={140} alt={""} />
              <div className="sm:flex block items-baseline">
                <div className="">
                  <div className="mb-5 sm:flex block items-baseline justify-between">
                    <p className="text-xl font-bold ">{item.name}</p>
                    <div className="flex items-center gap-4">
                      <Link href={item.social.twitter || ''}>
                      <SpeakerTweet />
                      </Link>
                      <Link href={item.social.linkedin || ''}>
                      <SpeakerLinkedin />
                      </Link>
                      <Link href={item.social.googleMaps || ''}>
                      <SpeakerGlobal />
                      </Link>
                      <Link href={item.social.github || ''}>
                        
                      <SpeakerGit />
                      </Link>
                     
                    </div>
                  </div>

                  <p>{item.aboutShort}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      
      
    </div>
  );
};

export default SpeakerList;
