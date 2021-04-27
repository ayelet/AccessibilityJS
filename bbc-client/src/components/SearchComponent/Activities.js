import React, { useState, useEffect } from "react";

const postsArr = [
  {
    title: "hello from mars",
    content:
      "blablablablablablablablablablablablablablablablablablablablablabl",
  },
  {
    title: "climate change...",
    content:
      "Uasdasd;jas;djha;klhsd;aosjhd;alhs;dklajs;dlnalkdsj'a;sdhbasdujas;dnlasd",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //! replace with axios when express is ready
  useEffect(() => {
    const fetchData = () => {
      const data = postsArr;
      return data;
    };
    setPosts(fetchData());
  }, []);

  const renderPosts = () => {
    if (posts)
      return posts.map((v, i) => {
        return (
          <div key={i}>
            <span>{v.title}</span>
            <p>{v.content}</p>
          </div>
        );
      });
  };

  return <>{renderPosts()}</>;
};

export default Posts;