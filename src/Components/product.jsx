import "./product.css";
import axios from "axios";
export default function Product({ value }) {
  const { name, url, price, rating } = value;
  console.log(name, price, rating);
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push("⭐");
  }
  function onOrder() {
    const order = { userId: "", orderId: "", item: name, price: price };
    axios
      .post("http://localhost:4000/add-order", order)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  return (
    <div className="product-div">
      <img src={url} alt="" height="150px" width="150px" />
      <h5>{name}</h5>
      <p>Price: $ {price}</p>
      <p>{stars}</p>
      <button onClick={onOrder}>Order</button>
    </div>
  );
}
