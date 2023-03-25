import { useEffect, useState } from "react";
import { ExchangeRateService } from "./API/ExchangeRateService";
import "./App.css";
import CurrencyBox from "./components/CurrencyBox";
import Header from "./components/Header";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [usdValue, setUsdValue] = useState(0);
  const [eurValue, setEurValue] = useState(0);

  useEffect(() => {
    ExchangeRateService.getCurrencyData("UAH").then((response) => {
      setCurrencyList(Object.keys(response.data.conversion_rates));
      setUsdValue((1 / response.data.conversion_rates["USD"]).toFixed(2));
      setEurValue((1 / response.data.conversion_rates["EUR"]).toFixed(2));
    });
  }, []);

  return (
    <div className="App">
      <Header usdValue={usdValue} eurValue={eurValue} />
      <CurrencyBox currencyList={currencyList} />
    </div>
  );
}

export default App;
