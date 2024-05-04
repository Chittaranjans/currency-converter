import React, { useState, useEffect } from 'react'
// import {swap} from '../public/352152_calls_swap_icon.png'
function CurrencyConverter() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json')
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoading(false)
            })
    }, [])
    if (!data) {
    console.log('Data is not defined');
    return null; // or return a loading spinner, or some placeholder content
}

// console.log('Data:', data);
if (loading) {
        return <div className='text-white'>Loading...</div>; // or return a loading spinner, or some placeholder content
    }

    // const [numRows, setNumRows] = useState(10);


    function InputBox({
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = "",
    }) {
        return (
            <div className={`bg-white p-4 rounded-lg text-sm flex ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={label} className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input
                        id={label}
                        className="outline-none w-full bg-transparent py-1.5"
                        type="number"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full font-bold">Currency Type</p>
                    <select
                        className="rounded-lg px-1 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-teal-500 ...cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }

    function App() {
        const [amount, setAmount] = useState()
        const [from, setFrom] = useState("usd")
        const [to, setTo] = useState("inr")
        const [convertedAmount, setConvertedAmount] = useState(0)

        const options = Object.keys(data?.quotes)

        const swap = () => {
            setFrom(to)
            setTo(from)
            setConvertedAmount(amount)
            setAmount(convertedAmount)
        }

        const convert = () => {
    if (data.quotes[to]) {
        setConvertedAmount(amount * data.quotes[to]);
        console.log(data.quotes[to]);
    } else {
        console.error(`Conversion rate for ${to} not found`);
    }
        }
        const [numRows, setNumRows] = useState(10);

        return (

            <div className="w-full  flex flex-wrap  justify-center  bg-cover bg-no-repeat p-2 max-w-md mx-auto"
            >
                <p className="pt-10 pb-10 text-center justify-center text-white text-4xl font-bold">
                    Currency Converter
                </p>
                <div className="w-full pt-2">
                    <div className=" border border-purple-40 0 rounded-lg p-5 backdrop-blur-sm  shadow-lg shadow-pink-900/90 ... bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            convert()
                        }}>
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
    type="button"
    className="absolute left-full -translate-x-full -translate-y-1/2 border-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-teal-500 ... text-white px-2 py-0.5"
    onClick={swap}
>
      swap
</button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-teal-500 ... text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>

                <div className=' justify-center items-center mt-4'>
    <table className='w-full h-auto  items-center justify-center border border-zinc-100 text-white '>
        <tbody>
            <tr>
                <th className='border border-zinc-100'>Currency</th>
                <th className='border border-zinc-100'>Rate</th>
            </tr>
            
            {Object.keys(data.quotes).slice(0, numRows).map((currency) => {
                console.log(data);
                return (
                    <tr key={currency}>
                        <td className='border border-zinc-100'>{currency.toUpperCase()}</td>
                        <td className='border border-zinc-100'>{data.quotes[currency]}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
                <div className='flex justify-center items-center'>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-teal-500 ... text-white px-4 py-3 rounded-lg mt-4' onClick={() => setNumRows(numRows + 10)}>Load More</button>
                
                
               
                </div>

                </div>


            </div>
            
        )
    }

    return <App />
}

export default CurrencyConverter