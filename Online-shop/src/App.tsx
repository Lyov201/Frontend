import "./App.css";
import { useState } from "react";
import { Bascket } from "./components/bascket";
import { Products } from "./components/products";
import type { IProduct, BascketItem } from "./type";

const PRODUCT: IProduct[] = [
  {
    id: 101,
    model: "Porsche Cayene S",
    price: 250_000,
    picture:
      "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/lgmrqoqbrtrxovayjjqa.jpg",
  },
  {
    id: 102,
    model: "Ferrari Purosangue",
    price: 345_000,
    picture:
      "https://luxurypulse.com/img/pictures/6743105712baf01655.jpeg",
  },
  {
    id: 103,
    model: "Mercedes Benz GLS",
    price: 123_000,
    picture:
      "https://avatars.avto.ru/get-autoru-vos/6484303/ee9d956438482bf8d1cc30807eddfed7/456x342",
  },
  {
    id: 104,
    model: "BMW X7",
    price: 150_000,
    picture:
      "https://westgroup.by/d/novyi_albom_1_iz_1.jpg",
  },
];

export const App = () => {
  const [cart, setCart] = useState<BascketItem[]>([]);

  const addToBascket = (product: IProduct) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app-shell">
      <header className="page-header">
        <span className="header-badge">Premium Collection</span>

        <h1 className="page-title">My Shop</h1>
      </header>

      <div className="shop-layout">
        <Products
          products={PRODUCT}
          onAdd={addToBascket}
        />

        <Bascket
          items={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </div>
    </div>
  );
};