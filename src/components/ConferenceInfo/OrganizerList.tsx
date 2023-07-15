import React from "react";
import Image from "next/image";



interface Props {
  data?: any;
}

const OrganizerList = ({ data }: Props) => {

  return (
    <div>
      {data?.map((item: any, index: any) => (
        <>
            <div className="mb-3" key={index}>
          <div className="bg-white p-5 rounded flex gap-3">
            <Image src={item?.image?.url} alt={""} width={140} height={140} />
            <div>
              <p className="text-xl font-bold mb-5">{item?.name}</p>
              <p>{item?.aboutShort}</p>
            </div>
          </div>
        </div>
        </>
      ))}
    </div>
  );
};

export default OrganizerList;
