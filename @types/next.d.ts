import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

type PageOptions = {
  getLayout: (children: ReactNode) => ReactNode;
};

type PageComponent<P = {}> = NextComponentType<NextPageContext, {}, P> & {
  pageOptions?: PageOptions;
};

declare module 'next' {
  type NextPageOptions = PageOptions;
  type NextPageComponent<P = {}> = PageComponent<P>;
}

declare module 'next/app' {
  type NextAppProps<P = {}> = AppProps<P> & {
    Component: PageComponent;
  };
  type StatelessPage<P = {}> = FC<P> & {
    getInitialProps?: (ctx: any) => Promise<P>;
  };
}

