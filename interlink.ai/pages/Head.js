import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} || Interlink AI - Information Integrity for Industries</title>
        <meta name="description" content="Inter-Link AI: Revolutionize data verification with AI-powered document, audio, and image comparison. Automate error-checking, secure sensitive data, and integrate seamlessly into your workflow. Perfect for logistics, legal, and infrastructure industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://ai-square.io/images/logo/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://ai-square.io/images/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://ai-square.io/images/logo/favicon-16x16.png" />
        <link rel="manifest" href="https://ai-square.io/images/logo/site.webmanifest" />
        <link rel="mask-icon" href="https://ai-square.io/images/logo/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="https://ai-square.io/images/logo/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-config" content="https://ai-square.io/images/logo/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content="https://inter-link.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Inter-Link AI: Revolutionize data verification with AI-powered document, audio, and image comparison. Automate error-checking, secure sensitive data, and integrate seamlessly into your workflow. Perfect for logistics, legal, and infrastructure industries." />
        <meta property="og:image" content="https://ai-square.io/images/preview.gif" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ai-square.io" />
        <meta property="twitter:url" content="https://inter-link.ai" />
        <meta name="twitter:title" content="Home" />
        <meta name="twitter:description" content="Inter-Link AI: Revolutionize data verification with AI-powered document, audio, and image comparison. Automate error-checking, secure sensitive data, and integrate seamlessly into your workflow. Perfect for logistics, legal, and infrastructure industries." />
        <meta name="twitter:image" content="https://ai-square.io/images/preview.gif" />
        <link rel="icon" href="/favicon.ico" />


      </Head>
    </>
  );
};

export default PageHead;


