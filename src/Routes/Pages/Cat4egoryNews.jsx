import React from "react";
import { useLoaderData } from "react-router-dom";

const Cat4egoryNews = () => {
  const data = useLoaderData();
  const ok = data.data;
  console.log(ok[1]);
  return (
    <div>
      {ok.map((newsItem, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
          }}
        >
          <h2 className="">{newsItem.title}</h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            {newsItem.image && (
            <img
              src={newsItem.image}
              alt={newsItem.title}
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
          )}

          <p>{newsItem.description}</p>
            {newsItem.author.img && (
              <img
                src={newsItem.author.img}
                alt={newsItem.title}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
            )}
            <p>{newsItem.author.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cat4egoryNews;
