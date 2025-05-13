import React, { useEffect } from 'react';

const BCBFacebookEmbed = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full h-[60vh] bg-cover bg-center relative bg-img" >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
            Bangladesh Cricket Board (BCB)
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-lg leading-relaxed mb-6">
          The <strong>Bangladesh Cricket Board (BCB)</strong> is the governing body for cricket in Bangladesh. Established in 1972, it has been the driving force behind the development and promotion of cricket across the nation. The BCB oversees domestic competitions, nurtures young talents, and manages the national cricket teams — affectionately known as <strong>The Tigers</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-10">
          Over the years, BCB has helped Bangladesh evolve from an underdog into a fierce competitor on the international cricket stage. Stay updated with the latest news, scores, and events from the official BCB Facebook page embedded below.
        </p>

       <div className='flex justify-center items-center gap-10'>

         {/* Facebook Embed */}
        <div className="w-full  mx-auto border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
      <h1 className='text-2xl font-bold pb-3 text-orange-500'>Facebook Embed Using FB SDK</h1>
          <div
            className="fb-page w-[500px] h-[500px]"
            data-href="https://www.facebook.com/bcbtigercricket"
            data-tabs="timeline"
            data-width="500"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/bcbtigercricket"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/bcbtigercricket">
                Bangladesh Cricket : The Tigers
              </a>
            </blockquote>
          </div>
        </div>

        {/* Facebook Iframe Embed */}
       
        <div className="w-full  mx-auto border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
          <h1 className='text-2xl font-bold pb-3 text-orange-500'>Facebook Embed Using Iframe</h1>
          <div className="w-full flex justify-center">
            <iframe
              title="BCB Facebook Page"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbcbtigercricket&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="500"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default BCBFacebookEmbed;
