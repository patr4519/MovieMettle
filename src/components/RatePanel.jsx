import React from "react";
import { useDispatch } from "react-redux";
import { addRate } from "../redux/slices/favoritesSlice";

const RatePanel = ({ item, setShowRate }) => {
  const [rate, setRate] = React.useState(null);
  const dispatch = useDispatch();

  const handleRateClick = (rate) => {
    setRate(rate);
  };

  const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="ratePanel">
        {rates.map((rate) => (
          <span
            key={rate}
            className={`rateItem ${
              rate <= 4 ? "redRate" : rate <= 6 ? "greyRate" : "greenRate"
            }`}
            onClick={() => {
              handleRateClick(rate);
              setShowRate(prev => !prev)
              dispatch(addRate({ item: item, rate }));
            }}
          >
            {rate}
          </span>
        ))}
      </div>
    </>
  );
};

export default RatePanel;
