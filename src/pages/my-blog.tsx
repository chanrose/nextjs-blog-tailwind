import Head from "next/head";
import Layout, { siteTitle } from "./layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";

export default function MyBlog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    category: string;
    completed?: boolean;
  }[];
}) {
  const myBlog = allPostsData.filter((post) => post.category === "blog");

  return (
    <>
      <Layout home portfolio>
        <Head>
          <title>Chanrose's Diary</title>
        </Head>
        <div className="container flex-col content-center px-4 mx-auto">
          <section className="my-8">
            <h2 className="font-sans text-3xl font-extrabold">My journey</h2>
            <hr />
          </section>
          <section>
            <ul>
              {myBlog.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-blue-700 hover:underline">{title}</a>
                  </Link>
                  <br />

                  <small className="text-gray-500">
                    <Date dateString={date} />{" "}
                  </small>
                </li>
              ))}
            </ul>
          </section>
          {/* <section className="my-8">
            <h2 className="font-sans text-3xl font-extrabold">
              What I am doing now
            </h2>
            <hr />
          </section>
          <section>
            <ul>
              {currProj.map(({ id, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-blue-700 hover:underline">{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section> */}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
