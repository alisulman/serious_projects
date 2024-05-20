/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";

const IsNew = ({ dater, style, styler }) => {
    const [ok, setOk] = useState(false);
    const [count, setCount] = useState(172800);

    const dateObj = new Date(dater);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;

    const date = new Date()
    const zero = date.getDate()
    const one = date.getMonth() + 1
    const two = date.getFullYear()
    const dateZero = zero < 10 ? '0' + zero : zero
    const dateOne = one < 10 ? '0' + one : one
    const dateTwo = two < 10 ? '0' + two : two
    const realDate = `${dateTwo}-${dateOne}-${dateZero}`

    useEffect(() => {
        if (realDate === formattedDate) {
            setOk(true)
        }
    }, [])

    useEffect(() => {
        if (ok) {
            const interval = setInterval(() => {
                setCount(decre => --decre)
            }, 1000)
            if (count === 0) {
                clearInterval(interval)
                setOk(false)
            }
            return () => {
                clearInterval(interval)
            }
        }
    }, [count, ok])

    return <div className={`${styler}`} style={style}>{ok ? "New" : null}</div>

}


export default IsNew
