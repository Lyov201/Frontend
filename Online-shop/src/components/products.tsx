import type { IProduct } from "../type";

type ProductsProps = {
  products: IProduct[];
  onAdd: (product: IProduct) => void;
};

export const Products = ({ products, onAdd }: ProductsProps) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <div className="product-image-wrap">
            <img
              src={product.picture}
              alt={product.model}
              className="product-image"
              width="300"
            />
          </div>

          <div className="product-body">
            <h2 className="product-model">{product.model}</h2>

            <p className="product-price">
              ${product.price.toLocaleString()}
            </p>

            <button
              className="product-button"
              onClick={() => onAdd(product)}
            >
              Add to Basket
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};