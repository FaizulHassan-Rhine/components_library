import React, { useEffect } from 'react';

const MasculineFacebookEmbed = () => {
  useEffect(() => {
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
      <section className="w-full h-[60vh] bg-cover bg-center relative bg-img">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
            Masculine Bangladesh
          </h1>
        </div>
      </section>

      <div className='flex justify-center items-center'>
        <div className="w-2/3  px-4 py-12">
        <p className="text-lg leading-relaxed mb-6">
          <strong>Masculine Bangladesh</strong> is your go-to destination for all things lifestyle, fashion, and inspiration tailored for the modern Bangladeshi man. From grooming tips to trendsetting styles, we curate the best content to keep you ahead of the game.
        </p>
        <p className="text-lg leading-relaxed mb-10">
          Dive into the latest articles, photo galleries, and exclusive updates from our official Facebook page embedded below. Stay connected and never miss a beat!
        </p>

        <div className="flex justify-center items-center ">
          {/* Facebook embed using SDK */}
          <div className="w-[500px] mx-auto border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
            <h2 className="text-2xl font-bold pb-3 text-orange-500">Facebook Embed Using SDK</h2>
            <div
              className="fb-page w-full"
              data-href="https://www.facebook.com/masculinebd"
              data-tabs="timeline"
              data-width="500"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/masculinebd"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/masculinebd">
                  Masculine Bangladesh
                </a>
              </blockquote>
            </div>
          </div>

          {/* Facebook embed using Iframe */}
          <div className="w-[500px] mx-auto border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 p-4">
            <h2 className="text-2xl font-bold pb-3 text-orange-500">Facebook Embed Using Iframe</h2>
            <div className="w-full flex justify-center">
              <iframe
                title="Masculine Bangladesh Facebook Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasculinebd&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
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
    </div>
  );
};

export default MasculineFacebookEmbed;
