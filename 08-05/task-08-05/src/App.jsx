import React, { useState, useMemo, useCallback } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // Product Data
  const products = [
    { id: 1, name: "Hair Remover" },
    { id: 2, name: "Face Razor" },
    { id: 3, name: "Soap Holder" },
    { id: 4, name: "Watch Strap" },
    { id: 5, name: "Travel Bottle" },
  ];

  // useMemo Example
  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // useCallback Example
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h1>React Memo Hooks Example</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Product List */}
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              {product.name}
            </li>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </ul>

      {/* Counter Section */}
      <div style={{ marginTop: "30px" }}>
        <h2>Counter: {count}</h2>

        <button
          onClick={handleIncrement}
          style={{
            padding: "10px 20px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
}

export default App;