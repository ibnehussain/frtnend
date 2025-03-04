import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <div className="fixed top-0 right-0 w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item) => <p key={item.id}>{item.name} - ${item.price}</p>)}
    </div>
  );
}
