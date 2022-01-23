import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const Product = () => {
  const [prods, setprod] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setprod(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <h2>{prods.title}</h2>
      <p>{prods.body}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Product;
