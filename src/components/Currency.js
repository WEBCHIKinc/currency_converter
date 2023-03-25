import React from "react";

const Currency = (props) => {
  const {
    currencyList,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <div className="currency__box">
      <input
        id={selectedCurrency}
        className="input__amount"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyList.map((curruncy) => (
          <option key={curruncy} value={curruncy}>
            {curruncy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
