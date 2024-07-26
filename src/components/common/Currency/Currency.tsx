
export type CurrencyIcon = 'USD' | 'INR' | 'EUR' | 'GBP' | 'RUB' | 'KRW' | 'CRC' | 'VND' | 'AWG' | 'PYG' | 'LAK' | 'ITL' | 'ILS' | 'NGN' | 'TWD' | 'KZT' | 'JPY' | 'PHP' | 'CNY';
export type CurrencySize = 'small' | 'medium' | 'large' | 'xlarge';
export type IconsList = {
    [x in CurrencyIcon]: string;
};

import { useEffect,  useState } from 'react';
import { NumericFormat } from 'react-number-format';

export const Symbol = {
    'USD': '$',
    'INR': '₹',
    'EUR': '€',
    'GBP': '£',
    'RUB': '₽',
    'KRW': '₩',
    'CRC': '₡',
    'VND': '₫',
    'AWG': 'ƒ',
    'PYG': '₲',
    'LAK': '₭',
    'ITL': '₤',
    'ILS': '₪',
    'NGN': '₦',
    'TWD': '$',
    'KZT': '₸',
    'JPY': '¥',
    'PHP': '₱',
    'CNY': '¥',
    'IRR': '﷼',
    'KHR': '៛',
    // 'AED':'د.إ'
}


function Currency(props: { amount: string | number, isAnimated?:boolean}) {
    function getFractionAmount() {
        //check if amount isNumber and floating points if true show only 2-digit after decimal else return the same;
        const isNumber = Boolean(Number(props?.amount));
        const haveFloating = Boolean(props?.amount?.toString()?.split('.')?.length > 1);
        return isNumber && haveFloating ? Number(props?.amount)?.toFixed(2) : props?.amount;
    }
    
    const [animatedCounter,setAnimatedCounter] = useState(+getFractionAmount());

    useEffect(()=>{
        if(props.isAnimated){
            let amount = +getFractionAmount()
            for(let i=0;i<=amount;i=i+50){
                if(amount - i <50)
                    i=amount
                setTimeout(()=>{
                    setAnimatedCounter(i);
                },1)
            }
        }else{
            setAnimatedCounter(+getFractionAmount());
        }
        
    },[props.amount])
    try {
        const iconsList: IconsList = Symbol;
        var windowObj = typeof window !== "undefined" ? window : '' as any;
        const CURRENCY_CODE = typeof windowObj.headerUserCompanyInfo !== "undefined" ? windowObj.headerUserCompanyInfo.corporateProfiles[0].currency.toUpperCase() as CurrencyIcon : 'INR';

        let parsedCode = CURRENCY_CODE;

        return (
            !iconsList[parsedCode] ?
                <>{parsedCode}&nbsp;{props?.amount}</>
                :
                <span 
                >
                    <span aria-label="currency symbol"> {iconsList[parsedCode]}</span>
                    <span aria-label="amount">  <NumericFormat decimalScale={0} value={animatedCounter} thousandSeparator={true} displayType={'text'} /></span>
                </span>
        )
    }
    catch (err) {
        console.trace(err);
        throw new Error("Please make sure you're passing in an code prop with a value")
    }
}


export default Currency;