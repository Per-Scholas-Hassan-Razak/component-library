import { useState } from "react";
import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import type { Product, User } from "./components/types";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

function App() {

  const userProfile = {
    id: "#10101",
    name: "user 1",
    email: "userOne@gmail.com",
    role: "shooting guard",
    avatarUrl: "",
  };

  const product: Product = {
    id: "101",
    name: "Wireless Headphones",
    price: 149.99,
    description: "High-quality wireless headphones with great sound.",
    imageUrl: "https://via.placeholder.com/200",
    inStock: true,
  };

  const [user] = useState<User>(userProfile);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (productId: string) => {
    alert(`Product ${productId} added to cart`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        {showAlert && (
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={() => alert("editing user information")}
      />
      <div>
        <h2>Product</h2>
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <p style={{ fontSize: "12px", color: "white" }}>
            Free shipping included
          </p>
        </ProductDisplay>
      </div>
    </>
  );
}

export default App;
