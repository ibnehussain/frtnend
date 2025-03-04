import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`).then((res) => setProduct(res.data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4">Buy Now</button>
    </div>
  );
}
