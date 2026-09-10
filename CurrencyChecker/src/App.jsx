import { useState } from 'react'
import { InputBox } from './component'
import useCurrencyinfo from './hooks/UseCurrencyinfo'
import './App.css'


function App() {
  const [amount, setAmount] = useState(" ")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(" ")

  const currencyInfo = useCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/011/115/339/non_2x/economy-situation-concept-financial-business-statistics-with-bar-graph-and-candlestick-chart-show-stock-market-price-and-currency-exchange-on-green-background-vector.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                name="Amount"
                amount={amount}
                currencyOptions={options}
                // onCurrencyChange={(currency) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 
                border-white rounded-md bg-cyan-400 text-slate-900 font-semibold px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                name="ConvertedAmount"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900
             font-semibold rounded-lg px-4 py-2 transition">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
