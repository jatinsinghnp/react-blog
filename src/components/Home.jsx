import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <section>
      {posts.map((e) => (
        <article key={e.id}>
          <Link to={`/product/${e.id}`}>
            <h1>{e.title}</h1>
          </Link>
          <p>{e.body}</p>
        </article>
      ))}
    </section>
  );
};

export default Home;
