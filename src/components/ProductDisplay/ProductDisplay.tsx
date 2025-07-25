import type { ProductDisplayProps } from "../types";


const ProductDisplay = ({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) => {
  const { id, name, price, description, imageUrl, inStock } = product;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        maxWidth: "300px",
        marginTop: "10px",
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
      )}
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>

      {showDescription && <p>{description}</p>}

      {showStockStatus && (
        <p style={{ color: inStock ? "green" : "red" }}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {onAddToCart && (
        <button onClick={() => onAddToCart(id)} style={{ marginTop: "10px" }}>
          Add to Cart
        </button>
      )}

      {children}
    </div>
  );
};

export default ProductDisplay;