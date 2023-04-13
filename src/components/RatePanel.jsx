import React from "react";

const RatePanel = () => {
  const [rate, setRate] = React.useState(null);

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
            onClick={() => handleRateClick(rate)}
          >
            {rate}
          </span>
        ))}
      </div>
      {rate && <p>Your rate: {rate}</p>}
    </>
  );
};

export default RatePanel;
