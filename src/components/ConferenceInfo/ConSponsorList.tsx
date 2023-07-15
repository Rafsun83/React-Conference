import React from "react";
import Image from "next/image";


interface Props {
  data?: any;
}

const ConSponsorList = ({ data }: Props) => {
  return (
    <div>
      {data?.map((item: any, index: any) => (
        <>
          <div className="mb-3">
            <div className="bg-white p-5 rounded flex gap-3">
              <Image src={item.image.url} width={140} height={140} alt={""} />
              <div>
                <p className="text-xl font-bold mb-5">{ item.name}</p>
                <p>{ item.aboutShort}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ConSponsorList;
