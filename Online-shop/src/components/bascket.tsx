import type { BascketItem } from "../type";

type IBascketProps = {
  items: BascketItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
};

export const Bascket = ({
  items,
  onIncrease,
  onDecrease,
}: IBascketProps) => {
  let total = 0;

  return (
    <aside className="basket-panel">
      <div className="basket-header">
        <h2>Basket</h2>

        <span className="basket-count">
          {items.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </div>

      <div className="basket-items">
        {items.map((item) => {
          total += item.price * item.quantity;

          return (
            <div className="basket-item" key={item.id}>
              <div className="basket-item-copy">
                <h3>{item.model}</h3>

                <p className="basket-item-price">
                  ${item.price.toLocaleString()}
                </p>

                <div className="quantity">
                  <button onClick={() => onDecrease(item.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => onIncrease(item.id)}>
                    +
                  </button>
                </div>
              </div>

              {/* <img
                src={item.picture}
                alt={item.model}
                className="basket-item-image"
              /> */}
            </div>
          );
        })}
      </div>

      <div className="basket-total-row">
        <span>Total</span>

        <p className="basket-total">
          ${total.toLocaleString()}
        </p>
      </div>
    </aside>
  );
};