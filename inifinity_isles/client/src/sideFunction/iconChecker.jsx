/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const IconChecker = ({ CheckedIcon, UnCheckedIcon, product }) => {
    const [check, setCheck] = useState(false)
    const state = useSelector(state => state.Cart)
    useEffect(() => {
        const fav = state.isFavourite.find(item => item?._id === product?._id)
        setCheck(fav?._id === product?._id)
    }, [product?._id, product.id, state.isFavourite])
    const [checked, setChecked] = useState(check ? '' : 'hidden')
    const [unChecked, setUnChecked] = useState(check ? 'hidden' : '')

    const dispatch = useDispatch()

    const handleClickChecked = () => {
        setChecked('hidden')
        setUnChecked('')
    }
    const handleClickUnChecked = () => {
        console.log('checked')
        setChecked('')
        setUnChecked('hidden')
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
