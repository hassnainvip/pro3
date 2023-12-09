import CheckoutForm1 from "./forms/CheckoutForm1";
import { Fragment } from "react";
import Head from "next/head";

function CheckoutForm({ discount, product, selectedOption }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <CheckoutForm1
        discount={discount}
        product={product}
        selectedOption={selectedOption}
      />
    </Fragment>
  );
}

export default CheckoutForm;
