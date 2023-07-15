import ProjectLayout from "@/layout/ProjectLayout";
import "@/styles/globals.css";
import 'tailwindcss/tailwind.css';
import type { AppProps, NextAppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";


const client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql",
  cache: new InMemoryCache()
});

function getDefaultLayout(children: any) {
  return <ProjectLayout>{children}</ProjectLayout>;
}

function App(props: NextAppProps) {
  const { Component, pageProps } = props;
  
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') {
    
      router.push('/admin/landing-page');
    }
  }, [router]);
 
  const children = <Component {...pageProps} />;

  return (
    <ApolloProvider client={client}>
      {getDefaultLayout(children)}
    </ApolloProvider>
  )
}
export default App;

