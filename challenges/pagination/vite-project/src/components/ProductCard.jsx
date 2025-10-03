const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
