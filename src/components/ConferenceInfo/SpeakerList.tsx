import React from "react";
import Image from "next/image";

import SpeakerImage from "../../asstes/images/speaker1.png";
import SpeakerImage2 from "../../asstes/images/speaker2.png";
import SpeakerImage3 from "../../asstes/images/speaker3.png";
import Facebook from "@/asstes/icon/Facebook";
import SpeakerTweet from "@/asstes/icon/SpeakerTweet";
import SpeakerLinkedin from "@/asstes/icon/SpeakerLinkedin";
import SpeakerGlobal from "@/asstes/icon/SpeakerGlobal";
import SpeakerGit from "@/asstes/icon/SpeakerGit";

const SpeakerList = () => {
  return (
    <div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded flex gap-3">
          <Image src={SpeakerImage} alt={""} />
          <div className="sm:flex block items-baseline">
            <div className="">
              <div className="mb-5 sm:flex block items-baseline justify-between">
                <p className="text-xl font-bold ">Ronald Richards</p>
                <div className="flex items-center gap-4">
                  <SpeakerTweet />
                  <SpeakerLinkedin />
                  <SpeakerGlobal />
                  <SpeakerGit />
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded flex gap-3">
          <Image src={SpeakerImage2} alt={""} />
          <div className="sm:flex block items-baseline">
            <div className="">
              <div className="sm:flex block items-baseline justify-between mb-5">
                <p className="text-xl font-bold">Ronald Richards</p>
                <div className="flex items-center gap-4">
                  <SpeakerTweet />
                  <SpeakerLinkedin />
                  <SpeakerGlobal />
                  <SpeakerGit />
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, con sec tetur ad.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="bg-white p-5 rounded flex gap-3">
          <Image src={SpeakerImage3} alt={""} />
          <div className="sm:flex block items-baseline">
            <div className="">
              <div className="mb-5 sm:flex block items-baseline justify-between">
                <p className="text-xl font-bold">Ronald Richards</p>
                <div className="flex items-center gap-4">
                  <SpeakerTweet />
                  <SpeakerLinkedin />
                  <SpeakerGlobal />
                  <SpeakerGit />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                condimentum lectus in vel pellentesque arcu non odio. Ut dis eu
                dolor ac tellus vitae ut..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerList;
