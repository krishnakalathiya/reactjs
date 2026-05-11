import React, { useState, useMemo, useCallback } from "react";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Hair Remover" },
    { id: 2, name: "Face Razor" },
    { id: 3, name: "Soap Holder" },
    { id: 4, name: "Watch Strap" },
    { id: 5, name: "Travel Bottle" },
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React Memo Hooks Example</h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px",
        }}
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <h3>Counter: {count}</h3>

        <button
          onClick={handleIncrement}
          style={{
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default ProductList;