import Head from 'next/head';


const Page404 = () => {
  return (
    <>
      <Head>
        <title>Error404</title>
      </Head>
        <h1>Page Is not found</h1>
    </>
  );
};

// Page404.pageOptions = {
//   getLayout: (children) => <>{children}</>,
// };

export default Page404;
