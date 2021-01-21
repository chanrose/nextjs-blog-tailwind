import Layout from "./layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className="container flex-col content-center px-4 mx-auto">
        <section>
          <h2 className="my-8 font-sans text-3xl font-extrabold">
            My background
          </h2>
          <p>
            {" "}
            My name is Broset, I am majoring in Information Technology at AIU. I
            am a student developer, I enjoy learning and using my knowledge to
            improve my productivity. I want to contribute to the society through
            my programming knowledge.
          </p>
          <br />
          <p>
            You can view some of my projects that I am working on right now{" "}
            <Link href={`/my-project`}>
              <a className="text-blue-700 hover:underline">here</a>
            </Link>
          </p>
        </section>

        <section>
          <h2 className="my-8 font-sans text-3xl font-extrabold">
            Personal interest
          </h2>
          <ul className="list-disc list-inside">
            <li>Blockchain</li>
            <li>Programming</li>
            <li>Web & App Development</li>
            <li>Playing Online Game</li>
          </ul>
        </section>
        <section>
          <h2 className="my-8 font-sans text-3xl font-extrabold">
            Work experience
          </h2>
          <p>
            I worked as video editor at Hope Channel for almost one year between
            February and November. Right now, I am working as Lab Assistant for
            Technology department at AIU
          </p>
        </section>
        <section>
          <h2 className="my-8 font-sans text-3xl font-extrabold">Education</h2>
          <p>
            Before coming to Thailand, I completed my study in CAS, Phnom Penh.
            Now I am on the third year to complete my B.S degree in Information
            Technology and minoring in Bioscience.
          </p>
        </section>
        <section>
          <h2 className="my-8 font-sans text-3xl font-extrabold">Contact me</h2>
          <ul className="list-disc list-inside">
            <li>
              Gmail:{" "}
              <a
                className="text-blue-700 hover:underline"
                href="mailto:bdchanbroset@gmail.com"
              >
                Email me
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="text-blue-700 hover:underline"
                href="https://www.linkedin.com/in/chanbroset-prach-a03645188/"
              >
                Check here
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
