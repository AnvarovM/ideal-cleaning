import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import { Provider as AuthProvider } from "next-auth/client";
import { ThemeProvider } from "next-themes";
import Router from "next/router";
import { store } from "../app/store";
import "../styles/globals.css";
import "../styles/index.css";

const progress = new ProgressBar({
  size: 3,
  color: "#4ba0e8",
  className: "z-50 bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
        <AuthProvider session={pageProps.session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default appWithTranslation(MyApp);
