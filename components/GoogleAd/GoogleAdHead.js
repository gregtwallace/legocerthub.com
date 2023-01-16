const GoogleAdHead = () => {
  // if not production, set ads to test mode
  if (process.env.NODE_ENV !== 'production') {
    return (
      <script
        async
        data-adbreak-test='on'
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9849738621238699'
        crossorigin='anonymous'
      ></script>
    );
  }

  // production ads
  return (
    <script
      async
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9849738621238699'
      crossorigin='anonymous'
    ></script>
  );
};

export default GoogleAdHead;
