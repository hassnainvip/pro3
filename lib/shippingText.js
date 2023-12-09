  const shippingText = (shippingCT) => {

    if(shippingCT !== undefined && shippingCT !== null) {

        const selectedShipping = shippingCT.find((item) => item.is_s_true === true);
        return selectedShipping ? selectedShipping.shipping_option : 'Free';
    }else return 'FREE'

  };
  
  export default shippingText;
  