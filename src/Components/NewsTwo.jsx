import React, { useEffect, useState } from "react";

const NewsTwo = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/news");
        const data = await response.json();
        console.log("Fetched News for NewsTwo:", data);
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // 4th to 7th news
  const selectedNews = newsData.slice(3, 6);

  return (
    <div className="w-full  bg-slate-100">
      {selectedNews.length > 0 ? (
        selectedNews.map((news) => (
          <div key={news._id} className="w-full mb-5 px-5">
            <h3 className="text-2xl text-justify">{news.title}</h3>
            <div className="w-full h-[30vh] px-4 py-2">
              <img
                className="w-full h-full object-cover bg-cyan-400"
                src={news.images?.[0]}
                alt="News"
              />
            </div>
            <div className="w-full px-5">
              <p className="text-justify">{news.details}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-xl">Loading News...</p>
      )}
    </div>
  );
};

export default NewsTwo;
