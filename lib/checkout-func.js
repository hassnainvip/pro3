const handleDiscountToggleF = (item, disableOffer, appliedDiscounts, onAddDiscount) => {
    disableOffer(2);
    const isCurrentlyApplied = appliedDiscounts.includes(item._id);
    onAddDiscount(item, !isCurrentlyApplied);
  };
  const handleDiscountToggleRemoveF = (item, disableOffer, appliedDiscounts, onAdd)  => {
    disableOffer(1);
    const isCurrentlyApplied = appliedDiscounts.includes(item._id);
     onAdd(item, !isCurrentlyApplied);
  };
  /* eslint-disable */
  const handleDiscountToggleSecondF = (item, appliedDiscounts, onAddDiscount)  => {
    const isCurrentlyApplied = appliedDiscounts.includes(item._id);
    onAddDiscount(item, !isCurrentlyApplied);
  };

  export {
    handleDiscountToggleF, handleDiscountToggleRemoveF,handleDiscountToggleSecondF
  }