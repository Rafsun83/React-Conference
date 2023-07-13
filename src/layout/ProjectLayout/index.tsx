import { ReactNode } from "react";

interface Props{
    children?: ReactNode;
}

const ProjectLayout = ({ children }: Props) => {


  return (
    <>
      <div style={{
          padding:'200px'
        }} >
          { children}
        </div>
    </>
  );
};

export default ProjectLayout;
