import React, { useEffect, useState } from "react";

const Advertisement = () => {
  const [adImage, setAdImage] = useState(""); 

  useEffect(() => {
    const fetchAdvertisement = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/advertisements");
        const data = await response.json();
        console.log("Fetched Advertisement Data:", data); // ✅ Check karo API data sahi aa raha hai?
        if (data.length > 0) {
          setAdImage(data[0].imageUrl);
        }
      } catch (error) {
        console.error("Error fetching advertisement:", error);
      }
      
    };
  
    fetchAdvertisement();
  }, []);
  
  

  return (
    <div className="w-full h-full bg-cyan-500">
      {adImage ? (
        <img className="w-full h-full object-cover" src={adImage} alt="Advertisement" />
      ) : (
        <p>Loading Advertisement...</p>
      )}
    </div>
  );
};

export default Advertisement;
