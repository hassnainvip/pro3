import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/slug.module.css";

const BuyNow = ({ item, discount }) => {
    const router = useRouter();
    const { qty, onAdd } = useStateContext();


    const handleBuyNow = async () => {
      if (discount === "1") {
        await onAdd(item, qty);
        window.location.href = "/cod";
        router.push("/cod");
      }
      if (discount === "2") {
        await onAdd(item, qty);
        router.push({
          pathname: "/cod",
          query: { discount: "discount_applied" },
        });
      }
    };
    return (
      <div className={styles.priceBox}>
        <span>
          <h2>
            Rs {discount === "1" ? item?.original_price : item?.original_price * 3}
          </h2>
          <h3>
            Rs{" "}
            {discount === "1"
              ? item?.price
              : item?.discountprice + item?.shipping_charges}
          </h3>
        </span>

        <button onClick={handleBuyNow}>BUY NOW</button>
      </div>
    );
  };

  export default BuyNow;