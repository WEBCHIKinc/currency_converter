import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import { ExchangeRateService } from "../API/ExchangeRateService";

const CurrencyBox = ({ currencyList }) => {
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    ExchangeRateService.getCurrencyData(currency1).then((response) => {
      setMultiplier(response.data.conversion_rates[currency2]);
    });
  }, [currency1, currency2]);

  useEffect(() => {
    setAmount2((amount1 * multiplier).toFixed(2));
  }, [multiplier]);

  const handleAmount1Change = (e) => {
    setAmount1(e.target.value);
    setAmount2((e.target.value * multiplier).toFixed(2));
  };
  const handleAmount2Change = (e) => {
    setAmount2(e.target.value);
    setAmount1((e.target.value / multiplier).toFixed(2));
  };

  const handleCurrency1Change = (e) => {
    setCurrency1(e.target.value);
  };
  const handleCurrency2Change = (e) => {
    setCurrency2(e.target.value);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <Currency
        selectedCurrency={currency1}
        currencyList={currencyList}
        onChangeCurrency={handleCurrency1Change}
        amount={amount1}
        onChangeAmount={handleAmount1Change}
      />
      <Currency
        selectedCurrency={currency2}
        currencyList={currencyList}
        onChangeCurrency={handleCurrency2Change}
        amount={amount2}
        onChangeAmount={handleAmount2Change}
      />
    </div>
  );
};

export default CurrencyBox;
