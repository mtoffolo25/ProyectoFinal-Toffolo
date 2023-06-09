import { memo } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = memo(({ productos }) => {
  return (
    <div className="conteinerProd">
      {productos.length > 0 &&
        productos.map((prod) => {
          return <Item key={prod.id} producto={prod} />;
        })}
    </div>
  );
});

export default ItemList;
