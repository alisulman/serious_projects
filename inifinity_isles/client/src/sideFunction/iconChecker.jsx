/* eslint-disable react/prop-types */
import { useState } from "react";

const IconChecker = ({ CheckedIcon, UnCheckedIcon, product }) => {
    const existProducts = JSON.parse(localStorage.getItem('favourites'))
    const setter = existProducts?.filter(prod => prod._id === product._id);
    console.log(setter)

    const [checked, setChecked] = useState('hidden')
    const [unChecked, setUnChecked] = useState('')

    const handleClickChecked = () => {
        setChecked('hidden')
        setUnChecked('')
    }
    const handleClickUnChecked = () => {
        console.log('checked')
        setChecked('')
        setUnChecked('hidden')
        localStorage.setItem('favourites', JSON.stringify(product, 'checked'))
    }

    return (
        <>
            <div className={`relative`}>
                <div className={`absolute top-0 ${unChecked}`} onClick={handleClickUnChecked}>{UnCheckedIcon}</div>
                <div className={`absolute top-0 ${checked}`} onClick={handleClickChecked}>{CheckedIcon}</div>
            </div>
        </>
    )
}

export default IconChecker
