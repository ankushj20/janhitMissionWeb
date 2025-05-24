import React, { useEffect, useState } from "react";
import REACT_APP_BASE_URL from "./utils/config"; // ✅ Base URL import kiya

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${REACT_APP_BASE_URL}/api/news`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again.");
      }
    };

    fetchNews();
  }, []);

  const latestNews = newsData.slice(0, 2);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-2 pb-10">
      {error ? (
        <p className="text-red-500 text-center text-lg">{error}</p>
      ) : latestNews.length > 0 ? (
        latestNews.map((news) => (
          <div key={news._id} className="border-b-2 border-red-500  py-8">
            {/* Title */}

            <h1
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-500"
              style={{
                textAlign: "justify",
                wordSpacing: "1rem",
                textJustify: "inter-word",
                textAlignLast: "justify",
                lineHeight: 1.4,
                width: "100%",
                hyphens: "auto",
              }}
            >
              {news.title}
            </h1>

            {/* Images Section */}
            <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {news.images && news.images.length > 0 ? (
                news.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-40 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded shadow"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt={`news-${idx}`}
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-600 col-span-full">
                  No images available
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mt-4 space-y-4">
              {news.details.split("\\n\\n").map((para, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-lg md:text-xl font-medium text-justify leading-relaxed w-full ${
                    index === 1 ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 text-lg">Loading News...</p>
      )}
    </div>
  );
};

export default News;
