import Footer from "@/components/Footer";
import TopNavBar from "@/components/Navigation/TopNavBar";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ProjectLayout = ({ children }: Props) => {
  return (
    <>
      <div>
        <div>
          <div>
            <TopNavBar />
          </div>
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
