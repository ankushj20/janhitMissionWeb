import React, { useEffect, useState } from "react";
import BASE_URL from "../utils/config"; // ✅ Base URL import kiya

const ApnaMP = () => {
  const [newsData, setNewsData] = useState([]); 

  useEffect(() => {
    const fetchApnaMPNews = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/news?category=अपना एमपी`); // ✅ Query param filter
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching अनुकरणीय news:", error);
      }
    };
    

    fetchApnaMPNews();
  }, []);

  return (
    <div className="container mx-auto py-5 px-10">
      <h1 className="text-5xl font-bold text-center mb-5">मध्यप्रदेश खबरें</h1>

      {newsData.length > 0 ? (
        newsData.map((news, index) => (
          <div key={index} className="border-b-2 border-red-500 py-5">
            <h2 className="text-5xl text-red-500 leading-tight font-semibold">{news.title}</h2>
            <div className="w-full min-h-fit flex flex-col">
              <div className="w-full h-[30vh] gap-3 py-1 flex justify-between">
                {news.images.map((img, idx) => (
                  <div key={idx} className="w-1/3 h-full bg-cyan-800">
                    <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt={`news-${idx}`}
                      />
                  </div>
                ))}
              </div>
              <div className="w-full min-h-[2vw] py-2 text-justify">
                <p className="text-xl font-semibold">{news.details}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading अनुकरणीय News...</p>
      )}
    </div>
  );
};

export default ApnaMP;
