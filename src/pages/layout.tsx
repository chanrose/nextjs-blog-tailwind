import Head from "next/head";
import React from "react";

import Link from "next/link";

const name = "Chanbroset Prach";
export const siteTitle = `Chanrose's Home`;

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
  console.log("Change Mode");
};

export const Layout = ({
  children,
  home,
  portfolio,
}: {
  children: React.ReactNode;
  home?: boolean;
  portfolio?: boolean;
}) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/chanrose.svg" />
        <meta
          name="Chanbroset Prach"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <img
              className="mx-auto mt-12"
              src="/images/chanrose.svg"
              height="8rem"
              alt={name}
            />
            <h1 className="mt-5 font-sans text-5xl font-extrabold text-center">
              {name}
            </h1>
            <br />
            {/* <div className="flex justify-center">
              <span className="hidden sm:block">
                <button
                  onClick={toggleDarkModeHandler}
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 active:bg-blue-700"
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  Change Mode
                </button>
              </span>
            </div> */}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  className="mx-auto mt-12"
                  src="/images/chanrose.svg"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="mt-5 font-sans text-3xl font-bold text-center">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <div className="container flex-col content-center px-4 mx-auto my-8">
        <main className="">{children}</main>
        {/* {!home && (
          <div className="my-9">
            <Link href="/my-portfolio">
              <a className="text-blue-700 hover:underline">← Go Back</a>
            </Link>
          </div>
        )} */}
        {portfolio && (
          <div className="my-9">
            <Link href="/">
              <a className="text-blue-700 hover:underline">← Go Home</a>
            </Link>
          </div>
        )}
      </div>
      <div className="container flex-col content-center px-4 mx-auto">
        <footer className="mt-8 text-center">
          <hr />
          <p className="mt-2">
            Built with Next.js @{" "}
            <a
              className="text-blue-700 hover:underline"
              href="https://vercel.com/"
            >
              Vercel
            </a>
            <br />
            Updated in December 22, 2020
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
