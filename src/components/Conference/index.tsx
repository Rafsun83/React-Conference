import Image from "next/image";
import ContentImage from "../../asstes/images/Content.png";
import { useEffect, useState } from "react";
import Strome from "@/asstes/icon/Strome";
import Marker from "@/asstes/icon/Marker";
import Link from "next/link";
import Loader from "../Loader";

interface Props {
  step?: [];
  activeStep?: any;
}

interface Data {
  data?: any;
  loading?: boolean;
}



const ConferenceList = ({data, loading}:Data) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (value: string) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <div className="pb-10">
        <h1 className="text-[48px] font-bold flex items-center justify-center">
          Conferences
        </h1>
      </div>
      {
        loading ? <div className="flex items-center justify-center">
          <Loader/>
        </div> :  <div>
        <div className="space-y-3 w-full">
          {data?.conferences?.map((item: any, index: any) => (
            <div key={index} className="flex max-w-full justify-center">
              <div className="hidden sm:block">
                {index % 2 === 0 ? (
                  <button onClick={() => handleNext(item.id)}>
                    <Link href={`/admin/${item.id}`}>
                      <div
                        className="mr-10 bg-[#F9FAFB] w-[480px] h-[104px] border-t-4 rounded-t-[8px]"
                        style={{
                          boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        <div className="p-[18px]">
                          <div className="flex items-baseline gap-2">
                            <Marker />
                            <div>
                              <p className="text-lg font-medium flex items-center gap-2">
                                {" "}
                                {item.name}
                              </p>
                              <p className=" text-[#617187] font-normal text-xs pt-2">
                                {item.slogan}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </button>
                ) : (
                  <div className="w-[480px] mr-10">
                    <div className="p-[18px]">
                      <p className="text-end text-[#617187] text-xs">
                        {item.startDate}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${
                    index === activeStep
                      ? " border-[#FFC93E]"
                      : "border-[#CDCDCD]"
                  } ${
                    index === activeStep
                      ? "bg-[#FFF9EB] text-white"
                      : "bg-[#F9FAFB]"
                  }`}
                >
                  <Strome active={index === activeStep} />
                </div>
                <p
                  className={`border-l-2 ${
                    index === activeStep
                      ? "border-[#FFC93E]"
                      : "border-[#CDCDCD]"
                  } h-[100px] ml-[15px] mt-3 ${
                    index + 1 === data?.conferences.length ? "hidden" : "block"
                  }`}
                ></p>
              </div>

              <div className="hidden sm:block">
                {index % 2 === 1 ? (
                  <button onClick={() => handleNext(item.id)}>
                    <Link href={`/admin/${item.id}`}>
                      <div
                        className="ml-10 bg-[#F9FAFB] w-[480px] h-[104px] border-t-4 rounded-t-[8px]"
                        style={{
                          boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        <div className="p-[18px]">
                          <div className="flex items-baseline gap-2">
                            <Marker />
                            <div>
                              <p className="text-lg font-medium flex items-center gap-2">
                                {" "}
                                {item.name}
                              </p>
                              <p className=" text-[#617187] font-normal text-xs pt-2">
                                {item.slogan}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </button>
                ) : (
                  <div className="w-[480px] ml-10">
                    <div className="p-[18px]">
                      <p className="text-[#617187] text-xs">{item.startDate}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="block sm:hidden">
                <div className="w-[280px] ml-5 sm:ml-10">
                  <div className="p-[10px]">
                    <p className="text-[#617187] text-xs">{item.startDate}</p>
                  </div>
                </div>
                <button onClick={() => handleNext(item.id)}>
                  <Link href={`/admin/${item.id}`}>
                    <div
                      className="ml-5 sm:ml-10 bg-[#F9FAFB] w-[280px] h-[104px] border-t-4 rounded-t-[8px]"
                      style={{
                        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div className="p-[18px]">
                        <div className="flex items-baseline gap-2">
                          <Marker />
                          <div>
                            <p className="text-lg font-medium flex items-center gap-2">
                              {" "}
                              {item.name}
                            </p>
                            <p className=" text-[#617187] font-normal text-xs pt-2">
                              {item.slogan}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-6">
          {activeStep !== 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
            >
              Back
            </button>
          )}
          {activeStep !== steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Reset
            </button>
          )}
        </div> */}
      </div>
      }
     
    </div>
  );
};
export default ConferenceList;
