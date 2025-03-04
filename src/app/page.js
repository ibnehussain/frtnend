"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Your useEffect logic here
    const fetchData = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Your component's JSX */}
      {products.map((product) => (
        <div key={product.id}>
          {/* display product data */}
        </div>
      ))}
    </div>
  );
}