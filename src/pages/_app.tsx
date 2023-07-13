import ProjectLayout from "@/layout/ProjectLayout";
import DashboardLayout from "@/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps, NextAppProps } from "next/app";

function getDefaultLayout(children: any) {
  return <ProjectLayout>{children}</ProjectLayout>;
}

function App(props: NextAppProps) {
  const { Component, pageProps} = props;

  const children = <Component {...pageProps} />;

  return <>{getDefaultLayout(children)}</>;
}
export default App;

