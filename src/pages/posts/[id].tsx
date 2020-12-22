import Layout from "../layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import utilStyles from "../../styles/utils.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    category?: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className="my-4">
          <h1 className="font-sans text-3xl font-extrabold">
            {postData.title}
          </h1>
          {postData.date && (
            <div className="mt-3 text-gray-500">
              <Date dateString={postData.date!} />
            </div>
          )}
        </div>
        <div
          className={utilStyles.postFormat}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};
