import Footer from "@/components/Footer";
import TopNavBar from "@/components/Navigation/TopNavBar";
import { ReactNode } from "react";

interface Props{
    children?: ReactNode;
}

const ProjectLayout = ({ children }: Props) => {


  return (
    <>
      <div>
        <div>
        <TopNavBar/>
        </div>
        <div>
        {children}
        </div>
        <div>
        <Footer/>
       </div>
        </div>
    </>
  );
};

export default ProjectLayout;
