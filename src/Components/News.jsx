import React, { useEffect, useState } from "react";

const News = () => {
  const [newsData, setNewsData] = useState([]); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://janhitmissionwebbackend.onrender.com/api/news");
        const data = await response.json();
        console.log("Fetched News Data:", data);
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Sirf latest 3 news lene ke liye
  const latestNews = newsData.slice(0, 2);

  return (
    <div className="container mx-auto pb-5">
      {latestNews.length > 0 ? (
        latestNews.map((news) => (
          <div key={news._id} className="border-b-2 border-red-500 py-5">
            <h1 className="text-5xl font-bold text-red-500 leading-snug">
              {news.title}
            </h1>
            <div className="w-full min-h-fit flex flex-col">
              <div className="w-full h-[30vh] gap-3 py-1 flex justify-between">
                {news.images && news.images.length > 0 ? (
                  news.images.map((img, idx) => (
                    <div key={idx} className="w-1/3 h-full bg-cyan-800">
                      <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt={`news-${idx}`}
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>

              <div className="w-full min-h-[2vw] py-2 text-justify">
                <p className="text-xl font-semibold">{news.details}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading News...</p>
      )}
    </div>
  );
};

export default News;
