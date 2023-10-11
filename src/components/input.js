import React,{useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className = "",
}) {
   const inputId=useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e)=>onCurencyChange && onCurencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency)=>{
                        return (
                            <option value={currency} key={currency}>
                            {currency}
                        </option>
                        )
                    })}
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
