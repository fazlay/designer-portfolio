import jwt from "jsonwebtoken";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
//import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement, pageProps: AppProps) => ReactNode;
};
const queryClient = new QueryClient();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      <SessionProvider session={session}>
        {getLayout(
          <QueryClientProvider client={queryClient}>
            <main>
              <ChakraProvider>
                <Component {...pageProps} />
              </ChakraProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </main>
          </QueryClientProvider>,
          { ...pageProps }
        )}
      </SessionProvider>
    </div>
  );
};

export default MyApp;

export const withSession = (
  getSerSideProps: (ctx: GetServerSidePropsContext, user: any | null) => any
): GetServerSideProps => {
  return (ctx: GetServerSidePropsContext) => {
    const token = ctx.req.cookies.token;

    let decodedUser: any | null = null;
    console.log(token);
    if (token) {
      decodedUser = jwt.decode(token) as any;
    }

    return getSerSideProps(ctx, decodedUser);
  };
};
