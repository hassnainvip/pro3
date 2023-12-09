import { useStateContext } from "../context/StateContext";
import { useEffect, useState  } from 'react';

const storedValue = JSON.parse(
  typeof window !== "undefined"
    ? localStorage.getItem("first_render") || "1"
    : "1"
);

const DiscountApplyForm = ({product, selectedOption, formDetails}) => {

    const {
        onAdd,
        appliedDiscounts,
        onAddDiscount,
      } = useStateContext();
      const [firstRender, setFirstRender] = useState(storedValue);



    const [selectedOffer, setSelectedOffer] = useState(() => {
        let initialSelectedOffer;
        if (typeof window !== "undefined") {
          const storedSelectedOffer = localStorage.getItem("selectedOffer");
          initialSelectedOffer = storedSelectedOffer
            ? storedSelectedOffer
            : selectedOption === "discount_applied"
            ? "2"
            : "1";
        } else {
          initialSelectedOffer = selectedOption === "discount_applied" ? "2" : "1";
        }
        return initialSelectedOffer;
      });

      
      useEffect(() => {
        localStorage.setItem("selectedOffer", selectedOffer);
        localStorage.setItem("first_render", JSON.stringify(firstRender));
      }, [selectedOffer, firstRender]);
    
  const [offerDisabled, setOfferDisabled] = useState({
    offer_1: false,
    offer_2: false,
  });

    const disableOffer = (offerNumber) => {
        const newState = {
          offer_1: false,
          offer_2: false,
        };
        newState[`offer_${offerNumber}`] = true;
        setOfferDisabled(newState);
        setSelectedOffer(offerNumber === "1" ? "2" : "1");
      };

    const handleDiscountToggleRemove = (item) => {
        disableOffer(1);
        const isCurrentlyApplied = appliedDiscounts.includes(item._id);
         onAdd(item, !isCurrentlyApplied);
      };

      const handleDiscountToggle = (item) => {
        disableOffer(2);
        const isCurrentlyApplied = appliedDiscounts.includes(item._id);
        onAddDiscount(item, !isCurrentlyApplied);
      };
      
      const handleDiscountToggleSecond = (item) => {
        const isCurrentlyApplied = appliedDiscounts.includes(item._id);
        onAddDiscount(item, !isCurrentlyApplied);
      };
      useEffect(() => {
        if (
          selectedOffer === "2" &&
          product?.discount === true
        ) {
          handleDiscountToggleSecond(product);
          setFirstRender(product?._id);
        }
      }, [selectedOffer, product]);

      useEffect(() => {
        setOfferDisabled((prev) => ({
          ...prev,
          [selectedOffer === "1" ? "offer_1" : "offer_2"]: true,
        }));
      }, [selectedOffer]);

    return(
        <>
          <label
            className="block text-[13px] text-black font-bold mb-1"
            htmlFor="quantity"
          >
            Select Quantity
            <strong className="text-red-500 text-[14px] font-[400]"> * </strong>
          </label>
          <span className="flex -ml-2 space-x-2 mb-[2px] ">
            <input
              type="radio"
              name="offer"
              id="offer_1"
              value="1"
              onClick={() => handleDiscountToggleRemove(product)}
              onChange={() => setSelectedOffer("1")}
              className="input-radio offer-input thwcfe-input-field"
              disabled={offerDisabled.offer_1}
            />
            <label
              htmlFor="offer_1"
              className={`radio  offer-label ${
                selectedOffer === "1" ? "checked" : ""
              }`}
            >
              <span
                className={`pay-heading-new  ${
                  selectedOffer === "1" ? "checked" : ""
                } absolute  top-[11.5px] left-[7px]`}
              ></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy 1 Only
            </label>
    
            <input
              type="radio"
              name="offer"
              id="offer_2"
              value={formDetails.address}
              onChange={() => setSelectedOffer("2")}
              onClick={() => handleDiscountToggle(product)}
              className="input-radio offer-input thwcfe-input-field"
              disabled={offerDisabled.offer_2}
            />
    
            <label
              htmlFor="offer_2"
              className={`flex-1 radio  offer-label ${
                selectedOffer === "2" ? "checked" : ""
              }`}
            >
              <span
                className={`pay-heading-new  ${
                  selectedOffer === "2" ? "checked" : ""
                } absolute  top-[11.5px] left-[7px] `}
              ></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy 2 Get 1 FREE
            </label>
          </span>
        </>
      );    
}

  export default DiscountApplyForm;